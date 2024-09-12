// import React from "react";
// import SearchResultCard from "./SearchResultCard";

// const SearchResult = ({
//   area_key,
//   setActiveField,
//   item,
//   latitude_key,
//   longitude_key,
// }) => {
//   return (
//     <div className="absolute top-10 left-0 right-0 z-10 bg-white rounded-md p-2 border max-h-[50vh] overflow-y-scroll shadow-md hide-scrollbar">
//       {[1, 1, 1, 1, 1].map((item) => (
//         <>
//           <SearchResultCard
//             area_key={area_key}
//             setActiveField={setActiveField}
//             item={item}
//             latitude_key={latitude_key}
//             longitude_key={longitude_key}
//           />
//           {/* <Divider /> */}
//         </>
//       ))}
//     </div>
//   );
// };

// export default SearchResult;
import React from "react";
import SearchResultCard from "./SearchResultCard";

const SearchResult = ({
  area_key,
  setActiveField,
  latitude_key,
  longitude_key,
}) => {
  const results = [1, 1, 1, 1, 1]; // Example array

  return (
    <div className="absolute top-10 left-0 right-0 z-10 bg-white rounded-md p-2 border max-h-[50vh] overflow-y-scroll shadow-md hide-scrollbar">
      {results.map((item, index) => (
        <React.Fragment key={index}>
          {" "}
          {/* Use index as key */}
          <SearchResultCard
            area_key={area_key}
            setActiveField={setActiveField}
            item={item}
            latitude_key={latitude_key}
            longitude_key={longitude_key}
          />
          {/* <Divider /> */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SearchResult;
