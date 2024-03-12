"use client";
import Link from "next/link";
import { useState } from "react";
import { SearchIcon, UserIcon } from "@heroicons/react/solid";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
// css
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGests, setNumOfGests] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  return (
    <>
      <div className="flex items-center md:border-2 shadow-sm rounded-full outline-[#4F719E] p-1 ">
        <input
          type="text"
          placeholder="Start Your Search... "
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex mx-2 text-sm border-1 rounded-full text-gray-600 placeholder-gray-400 flex-grow pl-5 py-2 bg-transparent outline-none"
        />
        <SearchIcon className="w-[35px] text-white bg-[#4F719E] rounded-full p-2" />
      </div>
      {input && (
        <div className="absolute flex flex-col col-span-3 top-[100%] left-[50%] translate-x-[-50%]">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#4F719E"]}
            minDate={new Date()}
          />
          <div className="flex items-center border-b bg-white p-5">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
            <UserIcon className="h-5"/>
            <input type="number"
            className="bg-whit w-12 pl-2 text-lg outline-none text-[#1F334E]"
            value={numOfGests}
            min={1}
            onChange={(e) => setNumOfGests(Number(e.target.value))}
            />
          </div>
          {/* cancel & search buttons */}
          <div className="bg-white text-center p-4 flex items-center">
            <button type="button" className="flex-grow text-gray-300" 
            onClick={() => setInput('')}>
              Cancel
            </button>
            <Link href="/" className="flex-grow text-[#4F719E]">
              Search
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
