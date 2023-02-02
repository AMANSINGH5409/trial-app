import React from "react";
import FilterChips from "./FilterChips";

const QuickActionBar = () => {
  var filterList = ["Gujarati", "Punjabi", "Chineese", "Fast Food"];

  return (
    <div className="bg-white h-full w-[500px] flex flex-col justify-between items-center drop-shadow">
      <div className="container text-center justify-center">
        <div className="text-3xl ml-5 mt-5">
          <h1 className="font-bold text-center">
            Quick Filters
          </h1>
        </div>
        <div className="flex flex-wrap items-center">

          {filterList.map((item) => (
            <FilterChips text={item} />
          ))
          }
        </div>
      </div>
      <div className='md:w-[450px] w-[320px] p-5 rounded-xl bg-[#e1e1e1] flex flex-col mt-10 justify-center items-center sm:mr-0 mr-[100px]'>
        <div className="sm:text-3xl text-2xl font-semibold">
          Review & Suggestions
        </div>
        <div className="text-xs mt-2 bg-black text-yellow-300 sm:w-max w-[300] px-5 py-2 rounded-2xl">
          <p className="font-normal text-[16px]">
            Your valuable Review and suggestions will <br className="sm:block hidden"/> help us to improve FoodieeWoodie.eat
          </p>
        </div>
        <div className="w-full">
          <textarea placeholder="Type Here......." className="rounded-lg w-full h-[200px] mt-5 text-lg text-start p-2" />
        </div>
        <button className="bg-black text-yellow-300 rounded-xl py-3 sm:w-[400px] w-[250px] mt-5">Submit My Review</button>
      </div>
    </div>
  );
};

export default QuickActionBar;