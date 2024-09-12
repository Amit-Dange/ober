"use client";
import React from "react";
import { Grid } from "@mui/material";
import BookRide from "@/app/book-ride/BookRide";

const Layout = ({ Children }) => {
  return (
    <div className="h-screen">
      <Grid container>
        <Grid item xs={12} md={8} lg={5}>
          {/* left */}
          {/* <BookRide /> */}
          {Children}
        </Grid>
        <Grid item className="h-screen w-full " xs={0} md={4} lg={7}>
          <img
            className="w-full h-full object-cover object-right-top"
            src="https://olawebcdn.com/images/v1/bg_city.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Layout;
