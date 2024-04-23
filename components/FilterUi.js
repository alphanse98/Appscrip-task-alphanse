import React from "react";
import FilterDropdown from "./FilterDropdown";

const FilterUi = ({ isFilterActive }) => {
  return (
    <>
      {isFilterActive && (
        <div className="w-1/4 customWidth p-5">

          <input type="checkbox" value="Submit"></input>
          <label className="font-bold mx-2  "> Customizable</label>

          <div class="relative w-full bg-white  mt-3">
            <div class=" ">
              <div class=" grid max-w-xl divide-y divide-neutral-200">
                <FilterDropdown title={"IDEAL FOR"} />
                <FilterDropdown title={"OCCASION"} />
                <FilterDropdown title={"WPRK"} />
                <FilterDropdown title={"FABRIC"} />
                <FilterDropdown title={"SEGMET"} />
                <FilterDropdown title={"SUITABLE FOR"} />
                <FilterDropdown title={"RAW MATERIALS"} />
                <FilterDropdown title={"PATTERN"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterUi;
