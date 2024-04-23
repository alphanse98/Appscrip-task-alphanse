import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products"); // Fetch data from external API
  const data = await res.json();
  // console.log(data);
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
        {isFilterActive && (
          <div className="w-1/4 customWidth bg-slate-700 p-5">aside rgrtv Lorem</div>
        )}

        {/* productlist ui */}
        <div className="m-10 flex flex-wrap gap-10">
          {producList.map((item) => (
            <div key={item?.id}>
              
              <div className=" w-64 h-72" >
                <img alt={item?.title}  className="w-64 h-72" src={item?.image}/>
              </div>
              <p>{item?.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
