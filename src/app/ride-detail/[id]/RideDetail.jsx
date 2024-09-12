"use client";
import { useRouter } from "next/navigation";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import CallIcon from "@mui/icons-material/Call";
import StarIcon from "@mui/icons-material/Star";
import KeyIcon from "@mui/icons-material/Key";
import { Avatar, Button, IconButton } from "@mui/material";

const RideDetail = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    // flex items-center border-b p-3
    <div>
      <div className="flex items-center px-2 lg:px-5 py-2">
        <WestIcon onClick={goBack} className="cursor-pointer" />
        <p className="text-center w-full"> AD42RCF3FSCWE</p>
      </div>
      <div className="px-2 lg:px-5 py-5">
        <div className="border rounded-md">
          <div className="flex items-center border-b p-3">
            <span className="pr-5 opacity-70 text-xs font-semibold">
              PICKUP :{" "}
            </span>
            {/* <span>{ride.RideDetails?.pickupArea}</span> */}
            <span>DUBAI fata</span>
          </div>
          <div className="flex  items-center border-b p-3">
            <span className="pr-5 opacity-70 text-xs font-semibold">
              DROP :{" "}
            </span>
            {/* <span>{ride.RideDetails?.destinationArea}</span> */}
            <span>UnderWorld</span>
          </div>
        </div>
      </div>
      <p className="p-2 bg-green-400 text-white text-center mb-2">
        Picking Ariving in 1min
      </p>
      {/* <br /> */}
      <div className="flex  items-center justify-center w-full h-[42vh] border border-black">
        <p className="text-center w-full">
          <iframe
            src={`https://maps.google.com/maps?q=London&hl=en&sll=37.0625,-95.677068&sspn=46.677964,93.076172&t=h&hnear=London,+United+Kingdom&z=10&output=embed`}
            // frameborder="0"
            width="100%"
            height="260"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </p>
      </div>

      <div className="px-2 lg:px-5 mt-2">
        <div className="border rounded-md ">
          <div className="flex justify-between w-full border-b p-3">
            <div className="flex items-center">
              <Avatar
                alt="Remy "
                src="https://unsplash.com/photos/a-white-sports-car-parked-in-a-parking-lot-JyzcUL21Qes"
              />
              <div className="pl-4">
                <p>Toyoto Phantom </p>
                <p className="text-xs font-semibold opacity-60">Mini Cab</p>
              </div>
            </div>
            <div>
              <p className="text-xs">MH14-529</p>
              <p className="font-semibold">529</p>
            </div>
          </div>
          <div className="flex justify-between w-full border-b p-3">
            <div className="flex items-center">
              <Avatar alt="Remy " src="" />
              <div className="pl-4">
                <p>Simon Raily</p>
                <p className="text-xs flex items-center">
                  4.7 <StarIcon className="text-yellow-500 text-sm" />
                </p>
              </div>
            </div>
            <div>
              <IconButton color="success" aria-label="call driver">
                <CallIcon />
              </IconButton>
            </div>
          </div>

          {false ? (
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: "100%",
                padding: " .5rem 0rem",
              }}
            >
              Pay Now{" "}
            </Button>
          ) : (
            <div className="flex justify-between items-center bg-yellow-600 text-white py-2 px-3">
              <div className="flex items-center">
                <KeyIcon />
                <p className="ml-4">OTP</p>
              </div>
              <p>3360</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RideDetail;
