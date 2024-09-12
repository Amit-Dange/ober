import { Verified } from "@mui/icons-material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Avatar } from "@mui/material";
import React from "react";

const RideCard = () => {
  return (
    <div className="flex justify-between items-center rounded-s-sm p-3 cursor-pointer">
      <div className="flex items-center">
        <img
          src="https://cdn.pixabay.com/photo/2024/02/25/13/30/car-8595770_1280.jpg"
          alt=""
          className="w-20 h-20"
        />
        <div className="ml-5 space-y-1">
          <p className="text-sm font-semibold">Today 10:00 pm</p>
          <p className="text-xs font-semibold opacity-60">cab MH14 DW434</p>
          <p className="opacity-60 text-xs">Dubai fata </p>
          <p className="opacity-60 text-xs">UnderWorld </p>
          {/* <p className=""></p> */}
        </div>
      </div>
      {true ? (
        <div>
          <VerifiedIcon className="text-green-800 text-4xl" fontSize="3rem" />
        </div>
      ) : (
        <div className="flex flex-col justify-between pl-5">
          <p className="text-green-500 mb-5">Schedule..</p>
          <Avatar
            alt="Remy"
            src="https://cdn.pixabay.com/photo/2023/06/16/15/10/city-8068201_1280.jpg"
          />
        </div>
      )}
    </div>
  );
};

export default RideCard;
