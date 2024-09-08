// Navbar.js

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "./variants";
import Link from "next/link";

const SIDEBAR_LINKS = [
  { label: "Dashboard", url: "/" },
  { label: "Book a Repair", url: "/" },
  { label: "Appointment", url: "/" },
  { label: "My Vehicle", url: "/" },
  { label: "Repair History", url: "/" },
  { label: "Repair Stations", url: "/" },
  { label: "Newsletter", url: "/" },
  { label: "Rewards", url: "/" },
  { label: "Support", url: "/" },
];

// DesktopNavbar component
const DesktopNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-whiteColor h-[60px] w-full flex justify-between items-center py-4 px-8  ">
      <div>
        <div className=" flex items-center">
          <motion.button
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            className="bg-grayTextColor p-2 rounded ml-[4.5rem] max-xl:ml-[8rem]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#fff"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />{" "}
            </svg>
          </motion.button>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
              visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
            }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="px-2 text-secondaryColor"
          >
            <p> Learn about the dashboard</p>
          </motion.div>
        </div>
      </div>
      <div className="border border-grayColor flex items-center p-2 rounded max-sm:invisible">
        <button>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#a9a9a9"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
        <input
          type="text"
          className="bg-whiteColor px-4 w-[300px]"
          placeholder="Search"
        />
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#a9a9a9"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
          </svg>{" "}
        </motion.button>
      </div>
      <div>
        <button type="button" className="p-2 bg-grayColor  rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
          </svg>
        </button>
      </div>
    </div>
  );
};
const MobileDesktop = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 left-0 w-full z-10 flex justify-between items-center p-2 bg-whiteColor shadow-md">
      <header className="">
        <h1 className="text-3xl text-primaryColor">Balanceé </h1>
      </header>
      <div className="flex items-center">
        <button className="mx-2">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#000000"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
        <button className="bg-grayTextColor p-2 rounded mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#fff"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />{" "}
          </svg>
        </button>
        <div></div>
        <button className="" onClick={handleMenuClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000000"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-whiteColor shadow-md p-2">
            {SIDEBAR_LINKS.map((link, index) => (
              <li
                key={index}
                className={` p-2  my-[.5rem]  hover:bg-primaryColor rounded hover:text-textColor ${index === 7 ? "bg-primaryColor text-textColor " : ""}`}
              >
                <Link
                  href={link.url}
                  className="flex justify-start items-center"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <> {isDesktop ? <DesktopNavbar /> : <MobileDesktop />}</>;
}

export default Navbar;
