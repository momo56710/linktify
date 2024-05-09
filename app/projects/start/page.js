'use client'
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/firebase'
import { addDoc, collection } from 'firebase/firestore';
import { Loader } from '@/app/components/loader';
import { useRouter } from 'next/navigation';

// Import your initialized Firebase instance

export default function Page() {
  const router = useRouter()
  const [loading, isLoading] = useState(false)
  const [warning, setWarning] = useState('')
  const [storiesArr, setStoriesArr] = useState([{ cover: '', title: '', disc: '' }])
  const [postData, setPostData] = useState(
    {
      title: '',
      backers: [],
      deadline: '',
      disc: '',
      funded: 0,
      goal: 0,
      logo: 'https://i.ibb.co/M5QzsGt/logo.jpg',
      shortDisc: '',
      stories: [],
    });
  useEffect(() => {
    setPostData({ ...postData, stories: storiesArr })
  }, [storiesArr])
  function verifyStories(story) {
    var isfilled = true
    const reqStory = ['cover', 'title', 'disc']
    story.forEach(e => {
      for (const field in e) {
        if (reqStory.includes(field) && (e[field] === '' || e[field] === 0)) {
          isfilled = false
        }
      }
    })
    if (!isfilled) {
      return 'stories must be filled'
    }
    return true
  }
  function isDataFilled(data) {
    const requiredFields = [
      'title',
      'deadline',
      'disc',
      'goal',
      'shortDisc', // Assuming goal is a required field
    ];


    // Check for missing keys
    const missingKeys = requiredFields.filter(field => !data.hasOwnProperty(field));
    if (missingKeys.length > 0) {
      return `Missing required fields: ${missingKeys.join(', ')}`;
    }

    // Check for empty strings or zero values
    for (const field in data) {
      if (requiredFields.includes(field) && (data[field] === '' || data[field] === 0)) {
        return `"${field}" field cannot be empty or zero.`;
      }
    }

    // All fields are filled and valid
    return true;
  }
  const handleAddStory = () => {
    // Create a new story object with relevant fields
    const newStory = {
      cover: '',
      title: '', // Placeholder for story cover image URL (optional)
      disc: '', // Placeholder for story description
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
    isLoading(true)
    if (isDataFilled(postData) != true || verifyStories(storiesArr) != true) {
      isLoading(false)
      if (isDataFilled(postData) != true) { setWarning(isDataFilled(postData)) }
      if (verifyStories(storiesArr) != true) { setWarning(verifyStories(storiesArr)) }
      console.log(warning)

    } else {
      try {

        const collectionRef = collection(db, 'startups')
        const response = await addDoc(collectionRef, { ...postData }); // Add document with data
        console.log('Document written with ID:', response.id); // Clear form after successful post
        setError(null);
        isLoading(false)
        router.push('/')
      } catch (error) {
        console.error('Error adding document: ', error);
        setError(error.message);
        isLoading(false)
      }
    }
  };

  return (
    <div className='mt-10'>
      <p className='text-[#2271B9] text-[3em] text-center font-bold'>Start a project</p>
      <div className='flex flex-col gap-4 w-[80vw] m-auto p-10 my-10 bg-white rounded-xl'>
        <div className='flex flex-col gap-3'>
          <p className='font-bold text-[1.5em]'>project logo</p>
          <input type='text' placeholder='imageURL' className='border bg-transparent p-3 rounded-[10px] ' onChange={e => setPostData({ ...postData, logo: e.target.value })} />
        </div>
        <div className='flex flex-col gap-3'>
          <p className='font-bold text-[1.5em]'>project name</p>
          <input type='text' placeholder='Title' className='border bg-transparent p-3 rounded-[10px] ' onChange={e => setPostData({ ...postData, title: e.target.value })} />
        </div>
        <div className='flex flex-col gap-3'>
          <p className='font-bold text-[1.5em]'>Short Description</p>
          <textarea
            className='border bg-transparent p-3 rounded-[10px] '
            onChange={(e) => setPostData({ ...postData, shortDisc: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <p className='font-bold text-[1.5em]'>Description</p>
          <textarea
            className='border bg-transparent p-3 rounded-[10px] '
            onChange={(e) => setPostData({ ...postData, disc: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <p className='font-bold text-[1.5em]'>Goal (Amount)</p>
          <input
            type='number'
            className='border bg-transparent p-3 rounded-[10px] '
            onChange={(e) => setPostData({ ...postData, goal: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <p className='font-bold text-[1.5em]'>Deadline</p>
          <input
            type='date'
            className='border bg-transparent p-3 rounded-[10px] '
            onChange={(e) => setPostData({ ...postData, deadline: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <p className='font-bold text-[1.5em]'>Stories</p>


          {storiesArr.map((story, index) => (
            <div key={index} className='flex flex-col gap-3 mb-2 border p-3 rounded-md'>
              <input
                type='text'
                placeholder='Story Cover URL (1080x1080)'
                className='border bg-transparent p-2 rounded-[5px] mb-2'
                name='cover'
                value={story.cover}
                onChange={(event) => handleStoryChange(event, index)}
              />
              <input
                type='text'
                placeholder='title'
                className='border bg-transparent p-2 rounded-[5px] mb-2'
                name='title'
                value={story.title}
                onChange={(event) => handleStoryChange(event, index)}
              />
              <textarea
                className='border bg-transparent p-2 rounded-[5px] h-20'
                placeholder='Story Description'
                name='disc'
                value={story.disc}
                onChange={(event) => handleStoryChange(event, index)}
              />
              <button
                className='bg-red-500 hover:bg-red-700 text-white p-2 rounded-md mt-2'
                onClick={() => handleRemoveStory(index)}
              >
                Remove Story
              </button>

            </div>

          ))}
          <button className='bg-gray-200 text-black p-2 rounded-md mb-2' onClick={handleAddStory}>
            Add Story
          </button>
        </div>
        <p onClick={() => {
          handleSubmit()
        }} className='bg-blue-500 cursor-pointer hover:bg-blue-600 text-white gird place-content-center p-2 rounded-md mb-2 text-center'>
          {loading ? <Loader /> : 'submit'}</p>
        <p>{warning}</p>
      </div>

    </div>
  );
}

