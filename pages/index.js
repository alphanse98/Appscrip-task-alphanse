import Head from "next/head";

import FilterUi from "../components/FilterUi";
import { useState } from "react";

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products"); // Fetch data from external API
  const data = await res.json();
  return { props: { producList: data } }; // Pass data to the page via props
};

export default function Home({ producList }) {
  const [isFilterActive, setIsFilterActive] = useState(true);
  return (
    <>
      <Head>
        <title>My Products Page</title>
        <meta name="description" content="Welcome to our online store!" />
      </Head>

      <hr class="" />

      <div className="flex justify-between p-5">
        <div className="font-bold">
          {" "}
          3525 Items{" "}
          <span
            onClick={() => setIsFilterActive(!isFilterActive)}
            className="ml-10 font-normal "
          >
            {" "}
            HIDE FILTER
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

      <div className="flex justify-between">
        
        <FilterUi isFilterActive = {isFilterActive}/>

        {/* productlist ui */}
        <div className="m-10 flex flex-wrap justify-around gap-10">
          {producList.map((item) => (
            <div key={item?.id} className=" w-64 ">
              <div className="  w-64 h-72">
                <img
                  alt={item?.title}
                  className=" w-64 h-72"
                  src={item?.image}
                />
              </div>
              <p className="truncate w-52 mt-3 text-lg font-bold">
                {item?.title}
              </p>
              <p className="text-xs mt-2 text-stone-500 w-52 text-lg font-bold">
                Sign in or Create an account to see pricing
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
