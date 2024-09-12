import React, { useState } from "react";
import BookRideNavbar from "./BookRideNavbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import AvaliableCab from "./AvailabeCab";
import SearchResult from "./SearchResult";

const validationSchema = Yup.object().shape({
  pickupLocation: Yup.string().required("Pickup Location Is Required"),
  destinationLocation: Yup.string().required(
    "destination Location Is Required"
  ),
});

const BookRide = () => {
  const [activeField, setActiveField] = useState("");
  const handleOnSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues: {
      pickupLocation: "",
      destinationLocation: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (formik.isValid) {
        handleOnSubmit(values);
      }
    },
  });
  const onFocused = (e) => {
    const name = e.target.name;
    setActiveField(name);
  };
  return (
    <div>
      <BookRideNavbar />
      <div className="px-3 lg:px5 mt-10">
        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          <div>
            <div className="border p-2 flex items-center relative">
              <p className="pr-3">From</p>
              <input
                name="pickupLocation"
                placeholder="Enter Pickup location"
                value={formik.values.pickupLocation}
                onChange={(event) => {
                  const value = event.target.value;
                  formik.setFieldValue("pickupLocation", value);
                  // dispatch(searchLocation(value));
                }}
                onBlur={formik.handleBlur}
                className="border-none outline-none"
                onFocus={onFocused}
              />
              {activeField === "pickupLocation" &&
                // ride.results?.length > 0 &&
                formik.values?.pickupLocation?.length > 0 && (
                  <div className="">
                    <SearchResult
                      setActiveField={setActiveField}
                      latitude_key={"pickupLocation"}
                      longitude_key={"pickupLocation"}
                      area_key={"pickup_area"}
                    />
                  </div>
                )}
            </div>
            {formik.touched.pickupLocation && formik.errors.pickupLocation && (
              <div>
                {" "}
                <p className="text-xs text-red-500 px-2">
                  {formik.errors.pickupLocation}
                </p>
              </div>
            )}
          </div>

          <div>
            <div className="border p-2 flex items-center relative">
              <p className="pr-3">To</p>
              <input
                name="destinationLocation"
                placeholder="Enter Destination location"
                value={formik.values.destinationLocation}
                onChange={(event) => {
                  const value = event.target.value;
                  formik.setFieldValue("destinationLocation", value);
                  // dispatch(searchLocation(value));
                }}
                onBlur={formik.handleBlur}
                className="border-none outline-none"
                onFocus={onFocused}
              />
              {activeField === "destinationLocation" &&
                // ride.results?.length > 0 &&
                formik.values.destinationLocation.length > 0 && (
                  <div className="">
                    <SearchResult
                      setActiveField={setActiveField}
                      latitude_key={"destination_latitude"}
                      longitude_key={"destination_longitude"}
                      area_key={"destination_area"}
                    />
                  </div>
                )}
            </div>
            {formik.touched.destinationLocation &&
              formik.errors.destinationLocation && (
                <div>
                  {" "}
                  <p className="text-xs text-red-500 px-2">
                    {formik.errors.destinationLocation}
                  </p>
                </div>
              )}
          </div>
          <Button
            className=""
            sx={{
              width: "100%",
              padding: ".7rem 0rem",
            }}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Find Driver
          </Button>
        </form>
      </div>
      <div className="-z-10 px-2 lg:px-5 mt-5">
        <p>Available Cabs </p>
        <div className="space-y-5">
          <AvaliableCab />
          <AvaliableCab />
          <AvaliableCab />
          <AvaliableCab />
        </div>
      </div>
    </div>
  );
};
export default BookRide;
