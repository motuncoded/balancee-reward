"use client";
// Dashboard.js

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import cashbackItems from "../pages/api/rewards.json";
import Sidebar from "./Sidebar";
import { MdAttachMoney } from "react-icons/md";

// Define constants
const timeRanges = ["Last 7 days", "Last 30 days", "Last 90 days", "All time"];
// Define component props
type BalanceCardProps = {
  title: string;
  amount: string;
};

type CashbackProps = {
  date: string;
  amount: string;
  booking: string;
};

// BalanceCard component
const BalanceCard = ({ title, amount }: BalanceCardProps) => {
  return (
    <motion.div
      className=" bg-whiteColor max-w-[300px] h-[120px] flex-1 flex-col  items-center gap-2 rounded-xl p-4"
      whileHover={{
        border: "2px solid #173b61",
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <MdAttachMoney size={24} className="text-secondaryColor" />

      <h4 className="text-base font-medium">{title}</h4>
      <h5 className="font-bold">${amount}</h5>
    </motion.div>
  );
};

// CashbackItem component
const CashbackItem = ({ amount, date, booking }: CashbackProps) => {
  return (
    <div className="flex  gap-4 bg-white px-4 py-2 justify-between  max-sm:px-0  max-md:px-0">
      <div className="flex items-start gap-2">
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-sm font-normal leading-normal">{date}</p>
          <p className=" text-[.75rem] leading-normal">{booking}</p>
        </div>
      </div>
      <div className="shrink-0">
        <p className=" text-[#7697a0] text-base font-normal leading-normal">
          {amount}
        </p>
      </div>
    </div>
  );
};

// Dashboard component
function Dashboard() {
  return (
    <div className="">
      {/* Sidebar */}
      <div className="w-1/6 bg-whiteColor h-screen overflow-auto fixed top-0 left-0 max-sm:invisible max-md:invisible max-lg:invisible max-xl:w-1/4  ">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="ml-[16.67%] max-sm:ml-0 max-md:ml-0 max-lg:ml-0">
        <Navbar />

        {/* Dashboard content */}
        <div className=" w-5/6 flex flex-col mx-8 py-4 max-xl:px-10 max-lg:px-0 ">
          {/* Header */}
          <div className="py-2 px-10 h-[100px] flex items-center rounded max-sm:px-0  max-md:px-0 max-lg:px-0 ">
            <div className=" flex  max-sm:px-0  max-md:px-0 ">
              <motion.svg
                animate={{
                  x: [0, 2, -0],
                  rotate: [0, 5, 0],
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                    repeat: 10,
                    repeatType: "reverse",
                  },
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#173b61"
                viewBox="0 0 16 16"
              >
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
              </motion.svg>
              <div className="flex flex-col pl-4">
                <h2 className="text-2xl font-bold">Your Rewards at a Glance</h2>
                <h3 className="text-grayTextColor ">
                  You can redeem your earned rewards for discounts on future
                  services.
                </h3>
              </div>
            </div>
          </div>
          <div className=" flex flex-wrap gap-4 items-center px-10 max-sm:px-0  max-md:px-0 max-lg:px-0">
            <BalanceCard title="Total Cashback" amount="1200.00" />
            <BalanceCard title="Current Balance" amount="500" />
          </div>
          <div className="px-8 pt-4 max-sm:px-0  max-md:px-0 max-lg:px-0">
            <h2 className=" font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-2  max-sm:px-0  max-md:px-0 max-lg:px-0">
              Cashout Options
            </h2>
            <div className="flex flex-wrap gap-3 pl-4 max-sm:pl-0  max-md:px-0 max-lg:px-0 ">
              <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-grayTextColor px-4 h-11  has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-secondaryColor relative cursor-pointer">
                Direct cashout
                <input
                  type="radio"
                  className="invisible absolute"
                  name="f8c62dfa-5dec-434c-a9c9-d9a7fcea80c2"
                />
              </label>
              <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-grayTextColor px-4 h-11 has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-secondaryColor relative cursor-pointer">
                Convert to promo codes
                <input
                  type="radio"
                  className="invisible absolute"
                  name="f8c62dfa-5dec-434c-a9c9-d9a7fcea80c2"
                />
              </label>
            </div>
          </div>
          <div className=" px-8 py-2 max-sm:px-0  max-md:px-0 max-lg:px-0">
            <h6 className=" font-bold leading-tight tracking-[-0.015em] px-4  pt-5 max-sm:px-0  max-md:px-0 max-lg:px-0">
              Earnings History
            </h6>
            <div className="flex gap-3 p-3 flex-wrap pr-4 max-sm:pl-0  max-md:pl-0 max-lg:pl-0">
              {timeRanges.map((range) => (
                <div
                  key={range}
                  className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl border bg-primaryColor text-textColor pl-4 pr-4  "
                >
                  <p className=" text-sm font-medium leading-normal">{range}</p>
                </div>
              ))}
            </div>
            <div>
              {cashbackItems.map((item, index) => (
                <CashbackItem key={index} {...item} />
              ))}
            </div>
            <div className="flex justify-center items-center pt-6 max-sm:pb-2">
              <button className="bg-primaryColor p-2 text-[.8rem] text-whiteColor rounded">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
