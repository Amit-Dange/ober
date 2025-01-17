"use client";
import React from "react";
import RideCard from "../components/user/RideCard/RideCard";
import { useRouter } from "next/navigation";
import WestIcon from "@mui/icons-material/West";

const Rides = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className="h-screen">
      <div className="flex items-center px2 lg:px-5 py-2">
        <div className="px-2 lg:px-5 py-2">
          <WestIcon onClick={goBack} className="cursor-pointer" />
        </div>
        <p className="text-center w-full"> Your Ride </p>
      </div>
      <div className="space-y-5 px-2 lg:px-5 h-[90vh] overflow-y-scroll">
        {[1, 2, 1, 1, 1, 1].map(() => (
          <RideCard />
        ))}
      </div>
    </div>
  );
};

export default Rides;
