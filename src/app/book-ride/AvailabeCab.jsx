import React from "react";

const AvaliableCab = () => {
  return (
    <div className="flex items-center border rounded-md py-2 px-5 cursor-pointer -z-10">
      <div>
        <img
          className="w-7"
          src="https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png"
          alt=""
        />
        <p className="font-semibold text-xs">1 min</p>
      </div>
      <div className="pl-5 text-sm">
        <p className="font-semibold -z-10">Prime SUV</p>
        <p>SUVs with Free Wifi</p>
      </div>
    </div>
  );
};
export default AvaliableCab;
