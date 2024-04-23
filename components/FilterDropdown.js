import React from "react";

const FilterDropdown = ({ title }) => {
  return (
    <div>
      <hr class="" />
      <details class="group">
        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
          <span className="font-bold my-3">
            {title}
            <p className="font-medium mt-2">All</p>
          </span>
          <span class="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <div>
          <u className="text-stone-500">Unselect all</u>
          <div className="mt-2">
            <input type="checkbox" value="Submit"></input>
            <label className="font-normal mx-2  ">Men</label>
          </div>
          <div className="mt-2">
            <input type="checkbox" value="Submit"></input>
            <label className="font-normal mx-2  ">Women</label>
          </div>
          <div className="mt-2 mb-5">
            <input type="checkbox" value="Submit"></input>
            <label className="font-normal mx-2 ">Baby & Kids</label>
          </div>
        </div>
      </details>
      <hr class="" />
    </div>
  );
};

export default FilterDropdown;
