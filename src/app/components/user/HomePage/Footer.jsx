"use client";
import react from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <footer className="mt-40">
      <div className="container mx-auto pu-8">
        <div className="grid grid-cols-1 md:flex justify-around ">
          <div className="footer-links">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/OLA.svg"
              alt=""
            />
            <div className="flex items-center mt-5">
              <InstagramIcon className="" style={{ fontSize: 40 }} />
              <YouTubeIcon className="ml-5" style={{ fontSize: 40 }} />
              <XIcon className="ml-5" style={{ fontSize: 40 }} />
            </div>
          </div>
          <div className="footer-links">
            <h3 className="text-lg font-semibold"> Explore </h3>
            <ul className="mt-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Book A Ride
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-Links">
            <h3 className="text-lg font-semibold">Customer Support </h3>
            <ul className="mt-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3 className="text-lg font-semibold">Legal </h3>
            <ul className="mt-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Tearms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Ola Cabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
