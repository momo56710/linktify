"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Loader } from "@/app/components/loader";
import { useRouter } from "next/navigation";
import { auth } from "@/utils/firebase";
import { toast } from "react-toastify";
import Loading from "../../components/loading";
// Import your initialized Firebase instance

export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [warning, setWarning] = useState("");
  const [storiesArr, setStoriesArr] = useState([
    {
      cover: "https://i.ibb.co/nB8RBgk/GD6-KM-m-Wk-AATLg9.png",
      title: "",
      disc: "",
    },
  ]);
  const [postData, setPostData] = useState({
    title: "",
    backers: [],
    deadline: "",
    disc: "",
    funded: 0,
    goal: 0,
    logo: "https://i.ibb.co/nB8RBgk/GD6-KM-m-Wk-AATLg9.png",
    shortDisc: "",
    stories: [],
    owner: "",
    verified: false,
    recommended: false,
    field: "",
  });
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((fetchedUser) => {
      setUser(fetchedUser);
      setIsLoading(false); // Update user state on auth state change
    });
    setPostData({ ...postData, stories: storiesArr });
  }, [storiesArr]);

  function verifyStories(story) {
    var isfilled = true;
    const reqStory = ["title", "disc"];
    story.forEach((e) => {
      for (const field in e) {
        if (reqStory.includes(field) && (e[field] === "" || e[field] === 0)) {
          isfilled = false;
        }
      }
    });
    if (!isfilled) {
      return "stories must be filled";
    }
    return true;
  }
  function isDataFilled(data) {
    const requiredFields = [
      "title",
      "deadline",
      "disc",
      "goal",
      "shortDisc",
      "field",
    ];

    // Check for missing keys
    const missingKeys = requiredFields.filter(
      (field) => !data.hasOwnProperty(field)
    );
    if (missingKeys.length > 0) {
      return `Missing required fields: ${missingKeys.join(", ")}`;
    }

    // Check for empty strings or zero values
    for (const field in data) {
      if (
        requiredFields.includes(field) &&
        (data[field] === "" || data[field] === 0)
      ) {
        return `"${field}" field cannot be empty or zero.`;
      }
    }

    // All fields are filled and valid
    return true;
  }
  const handleAddStory = () => {
    // Create a new story object with relevant fields
    const newStory = {
      cover: "https://i.ibb.co/nB8RBgk/GD6-KM-m-Wk-AATLg9.png",
      title: "", // Placeholder for story cover image URL (optional)
      disc: "", // Placeholder for story description
    };

    setStoriesArr([...storiesArr, newStory]);
  };

  const handleRemoveStory = (index) => {
    // Create a copy of the stories array to avoid mutation
    const updatedStories = [...storiesArr];

    // Remove the story at the specified index using splice
    updatedStories.splice(index, 1);

    setStoriesArr(updatedStories);
  };

  const handleStoryChange = (event, index) => {
    // Create a copy of the stories array to avoid mutation
    const updatedStories = [...storiesArr];

    // Update the specific story object based on the index and event target
    updatedStories[index] = {
      ...updatedStories[index],
      [event.target.name]: event.target.value, // Update the relevant field
    };

    setStoriesArr(updatedStories);
  };
  const [error, setError] = useState(null);
  const handleSubmit = async () => {
    setLoading(true);
    if (isDataFilled(postData) != true || verifyStories(storiesArr) != true) {
      setLoading(false);
      if (isDataFilled(postData) != true) {
        setWarning(isDataFilled(postData));
      }
      if (verifyStories(storiesArr) != true) {
        setWarning(verifyStories(storiesArr));
      }
    } else {
      try {
        const collectionRef = collection(db, "startups");
        const response = await addDoc(collectionRef, {
          ...postData,
          owner: {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            profeesion: user.photoURL,
          },
        }); // Add document with data
        setError(null);
        setLoading(false);
        toast("startup created and getiing verified");
        router.push("/");
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
  };
  if (isloading) {
    return <Loading />;
  } else if (!user) {
    router.push("/login");
  }
  return (
    <div className="mt-10">
      <p className="text-[#2271B9] text-[3em] text-center font-bold">
        Start a project
      </p>
      <div className="flex flex-col gap-4 w-[80vw] m-auto p-10 my-10 bg-white rounded-xl">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[1.5em]">project logo</p>
          <input
            type="text"
            disabled
            className="border bg-transparent p-3 rounded-[10px] "
            value={"https://i.ibb.co/nB8RBgk/GD6-KM-m-Wk-AATLg9.png"}
            onChange={(e) => setPostData({ ...postData, logo: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[1.5em]">project name</p>
          <input
            type="text"
            placeholder="Title"
            className="border bg-transparent p-3 rounded-[10px] "
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[1.5em]">project Field</p>
          <select
            value={postData.field}
            onChange={(e) =>
              setPostData({ ...postData, field: e.target.value })
            }
            className="border bg-transparent p-3 rounded-[10px]"
          >
            {" "}
            {/* Added a custom class */}
            <option value="" disabled selected>
              Choose a Field
            </option>
            <option value="Technology & Innovation">
              Technology & Innovation
            </option>
            <option value="Sustainability & Social Impact">
              Sustainability & Social Impact
            </option>
            <option value="Consumer & Business Services">
              Consumer & Business Services
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-bold text-[1.5em]">Project idea</p>
          <textarea
            placeholder="will be on the startup card "
            className="border bg-transparent p-3 rounded-[10px] "
            onChange={(e) =>
              setPostData({ ...postData, shortDisc: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[1.5em]">Description</p>
          <textarea
            placeholder="wil be on startup page"
            className="border bg-transparent p-3 rounded-[10px] "
            onChange={(e) => setPostData({ ...postData, disc: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[1.5em]">Goal (Amount)</p>
          <input
            type="number"
            placeholder='needs to be a round number with atleast "000" in the end'
            className="border bg-transparent p-3 rounded-[10px] number-no-arrows appearance-none form-input"
            onChange={(e) => setPostData({ ...postData, goal: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[1.5em]">Deadline</p>
          <input
            type="date"
            className="border bg-transparent p-3 rounded-[10px] "
            onChange={(e) =>
              setPostData({ ...postData, deadline: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[1.5em]">Stories</p>

          {storiesArr.map((story, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 mb-2 border p-3 rounded-md"
            >
              <input
                type="text"
                disabled
                className="border bg-transparent p-2 rounded-[5px] mb-2"
                name="cover"
                value={"https://i.ibb.co/nB8RBgk/GD6-KM-m-Wk-AATLg9.png"}
                onChange={(event) => handleStoryChange(event, index)}
              />
              <input
                type="text"
                placeholder="title"
                className="border bg-transparent p-2 rounded-[5px] mb-2"
                name="title"
                value={story.title}
                onChange={(event) => handleStoryChange(event, index)}
              />
              <textarea
                className="border bg-transparent p-2 rounded-[5px] h-20"
                placeholder="Story Description"
                name="disc"
                value={story.disc}
                onChange={(event) => handleStoryChange(event, index)}
              />
              {index == 0 ? (
                ""
              ) : (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-md mt-2"
                  onClick={() => handleRemoveStory(index)}
                >
                  Remove Story
                </button>
              )}
            </div>
          ))}
          <button
            className="bg-gray-200 text-black p-2 rounded-md mb-2"
            onClick={handleAddStory}
          >
            Add Story
          </button>
        </div>
        <p
          onClick={() => {
            handleSubmit();
          }}
          className="bg-blue-500 cursor-pointer  hover:bg-blue-600 text-white gird place-content-center p-2 rounded-md mb-2 text-center"
        >
          {loading ? (
            <p className="h-[25px] grid place-content-center">
              <Loader />
            </p>
          ) : (
            'submit'
          )}
        </p>
        <p>{warning}</p>
      </div>
    </div>
  );
}
