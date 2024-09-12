"use client";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import { useRouter } from "next/navigation";
import { Avatar, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import RideCard from "../components/user/RideCard/RideCard";
import WifiIcon from "@mui/icons-material/Wifi";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Profile = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className="px-2 lg:px-5">
      <div className="px-2 lg:px-5 py-2">
        <WestIcon onClick={goBack} className="cursor-pointer" />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Avatar sx={{ bgcolor: deepOrange[500] }}>R</Avatar>
        <p>escobar</p>
        <p>594893</p>
      </div>
      <div className="border rounded-sm mt-5">
        <RideCard />
        <div className="flex flex-col items-center p-3">
          <Button onClick={() => router.push("/your-rides")} variant="text">
            See All Ride{" "}
          </Button>
        </div>
      </div>

      <div className="border mt-5">
        <div className="flex items-center p-3 border-b">
          <AccountBalanceWalletIcon className="text-green-600" />
          <p className="ml-4">ola money </p>
        </div>
        <div className="flex items-center p-3 border-b">
          <ContactPhoneIcon className="text-blue-600" />
          <p className="ml-4">Emergency Contact</p>
        </div>
        <div className="flex items-center p-3 border-b">
          <WifiIcon className="text-blue-500" />
          <p className="ml-4">OLa Wi-Fi Credentials</p>
        </div>
      </div>
      <div className="mt-5">
        <Button
          className="w-full bg-red-500 text-white hover:bg-red-700"
          variant="contained"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
