import Link from "next/link";
import {
  FaTools,
  FaCalendarAlt,
  FaCar,
  FaHistory,
  FaMapMarkerAlt,
  FaEnvelope,
  FaStar,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdDashboard, MdOutlineLogout } from "react-icons/md";
import Image from "next/image";

export default function Sidebar() {
  const sidebarLinks = [
    { label: "Dashboard", url: "/", icon: MdDashboard },
    { label: "Book a Repair", url: "/", icon: FaTools },
    { label: "Appointment", url: "/", icon: FaCalendarAlt },
    { label: "My Vehicle", url: "/", icon: FaCar },
    { label: "Repair History", url: "/", icon: FaHistory },
    { label: "Repair Stations", url: "/", icon: FaMapMarkerAlt },
    { label: "Newsletter", url: "/", icon: FaEnvelope },
    { label: "Rewards", url: "/", icon: FaStar },
    { label: "Support", url: "/", icon: FaQuestionCircle },
  ];
  return (
    <div className="flex items-center flex-col py-6">
      <header className="pb-8">
        <h1 className="text-3xl text-primaryColor">Balanceé </h1>
      </header>
      <div className="py-2">
        <Image
          src="/girl.jpg"
          width={75}
          height={75}
          className="rounded-full"
          alt="profile-picture"
        />
      </div>
      <h3 className="font-medium text-[1rem] ">Motunrayo Adeneye</h3>
      <h4 className="text-grayestColor text-[.975rem]">View Profile</h4>

      <div className="mt-8">
        <h5 className="text-grayestColor text-left ">MENU</h5>
        <ul className="my-2">
          {sidebarLinks.map((link, index) => (
            <li
              key={index}
              className={` p-2  my-[.5rem] hover:bg-primaryColor rounded hover:text-textColor ${index === 7 ? "bg-primaryColor text-textColor " : ""}`}
            >
              <Link href={link.url} className="flex justify-start items-center">
                {link.icon && <link.icon className="w-4 h-4 mx-2" />}{" "}
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <h6 className="pt-2 px-4 text-accentColor flex items-center text ">
          <MdOutlineLogout />
          <span className="">Log Out</span>
        </h6>
      </div>
    </div>
  );
}
