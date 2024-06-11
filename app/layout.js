import { Inter } from "next/font/google";
import "./globals.css";
import 'reactjs-popup/dist/index.css'
import NavBarDes from "./components/navBar/navBarDes";
import FooterDes from "./components/footer/footerDes";
import NavBarMob from "./components/navBar/navBarMob";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Linktify",
  description: "Croudfunding platform",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F7FBFE]`} >
        <div className="max-md:hidden"> <NavBarDes /></div>
        <div className="md:hidden"> <NavBarMob /> </div>
        {children}
        <FooterDes />
        <ToastContainer
          toastStyle={{ backgroundColor: "rgb(59,130,246)", color: 'white' }}
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  );
}
