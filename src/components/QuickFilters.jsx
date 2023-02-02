import React from "react";
import FilterChips from "./FilterChips";

const QuickActionBar = () => {
  var filterList = ["Gujarati", "Punjabi", "Chineese", "Fast Food" ];

  return (
    <div className="bg-white h-full w-[400px] flex flex-col justify-between items-center drop-shadow">
      <div className="container">
        <div className="text-3xl ml-5 mt-5">Quick Filters</div>
        <div className="flex flex-wrap">

          {filterList.map((item) => (
            <FilterChips text={item} />
          ))
          }
        </div>
      </div>
      <div className='container w-max p-5 rounded-xl bg-[#e1e1e1] flex flex-col mt-10'>
        <div className="text-3xl">
          Review & Suggestions
        </div>
        <div className="text-xs mt-2 bg-black text-yellow-300 w-max px-5 py-2 rounded-2xl">
          Your valuable Review and suggestions will <br /> help us to improve FoodieeWoodie.eat
        </div>
        <div className="w-full">
          <textarea placeholder="Type Here......." className="rounded-lg w-full h-[200px] mt-5 text-lg text-start p-2" />
        </div>
        <button className="bg-black text-yellow-300 rounded-xl py-2 mt-5">Submit My Review</button>
      </div>
    </div>
  );
};

export default QuickActionBar;