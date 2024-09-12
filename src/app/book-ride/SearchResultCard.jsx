import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchResultCard = ({
  item,
  latitude_key,
  longitude_key,
  area_key,
  setActiveField,
}) => {
  const pickup_latitude = 101;
  const pickup_longitude = 201;
  const pickup_area = 301;
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const handleSelect = () => {
    // console.log("handle triggered");
    const params = new URLSearchParams(searchParams);
    params.set([latitude_key], pickup_latitude);
    params.set([longitude_key], pickup_longitude);
    params.set([area_key], pickup_area);

    router.replace(pathname + "?" + params.toString());
    console.log(pathname, searchParams);
  };
  return (
    <div
      onClick={handleSelect}
      className="flex items-center py-2 z-10 bg-white cursor-pointer"
    >
      <div className="pr-5">
        <LocationOnIcon />
      </div>
      <div>
        <p className="font-semibold">dubai</p>
        <p className="font-semibold opacity-60">dubai fata </p>
      </div>
    </div>
  );
};

export default SearchResultCard;
