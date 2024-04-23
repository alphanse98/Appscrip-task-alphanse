import React from "react";

const ProductPageTopMenu = ({ isFilterActive, setIsFilterActive }) => {
  return (
    <div>
      <hr class="" />
      <div className="flex justify-between p-5">
        <div className="font-bold">
          3525 ITEMS
          <span
            onClick={() => setIsFilterActive(!isFilterActive)}
            className="ml-10 font-normal cursor-pointer"
          >
           {isFilterActive? "< HIDE FILTER": " > SHOW FILTER"}
          </span>
        </div>
        <div>
          <select name="cars" id="cars">
            <option value="RECOMMENDED">RECOMMENDED</option>
            <option value="NEWEST">NEWEST FIRST</option>
            <option value="POPOLAR">POPOLAR</option>
            <option value="audi">PRICE : HIGH TO LOW</option>
            <option value="audi">PRICE : LOW TO HIGH</option>
          </select>
        </div>
      </div>
      <hr class="" />
    </div>
  );
};

export default ProductPageTopMenu;
