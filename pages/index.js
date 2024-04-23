import Head from "next/head";
import ProductListingUi from "../components/ProductListingUi";
import FilterUi from "../components/FilterUi";
import ProductPageTopMenu from "../components/ProductPageTopMenu";
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

      <ProductPageTopMenu isFilterActive={isFilterActive} setIsFilterActive={setIsFilterActive} />

      <div className="flex justify-between">

        <FilterUi isFilterActive={isFilterActive} />
        
        {/* img SEO inside this component */}
        <ProductListingUi producList={producList} /> 

      </div>
    </>
  );
}
