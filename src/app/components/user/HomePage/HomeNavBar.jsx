"use client";
import react from "react";
import MenuIcon from "@mui/icons-material/Menu";

const HomeNavBar = () => {
  return (
    <nav className="bg-black py-4">
      <div className="container max-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center mx-5">
              <img
                src="https://cdn.olaelectric.com/ev-discovery-platform/images/ola-logo-13042023.svg"
                alt="img"
              />
            </div>
            <div>
              <ul className="flex items-center">
                <li className="mr-6">
                  <a href="#" className="text-white hover:text-blue-200">
                    {" "}
                    ola s1
                  </a>
                </li>
                <li className="mr-6">
                  <a href="#" className="text-white hover:text-blue-200">
                    {" "}
                    ola electric
                  </a>
                </li>
                <li className="mr-6">
                  <a href="#" className="text-white hover:text-blue-200">
                    {" "}
                    ola future factory
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button className="bg-gray-700 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-3 ">
              Book An Ola Cab{" "}
            </button>
            <button className="bg-white text-black hover:bg-gray-300 text-sm font-semibold px-4 py-3 ml-5">
              Free S1 Test Ride{" "}
            </button>

            <MenuIcon className="ml-5 text-white text-3xl " />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default HomeNavBar;
