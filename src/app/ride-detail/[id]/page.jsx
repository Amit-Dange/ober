"use client";
import Layout from "@/app/components/user/Layout/Layout";
import React from "react";
import RideDetail from "./RideDetail";

const page = (props) => {
  return <Layout Children={<RideDetail />} />;
};

export default page;
