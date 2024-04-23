import Head from "next/head";
import ProductListingUi from "../components/ProductListingUi";
import FilterUi from "../components/FilterUi";
import ProductPageTopMenu from "../components/ProductPageTopMenu";
import { useState } from "react";


// <<<<<<<<<<<<<<<<<<<<<<< server side rendering >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products"); // Fetch data from external API
  const data = await res.json();
  return { props: { producList: data } }; // Pass data to the page via props
};

export default function Home({ producList }) {
  const [isFilterActive, setIsFilterActive] = useState(true);
  return (
    <>
      <Head>  {/* Page SEO meta tags */}
        <title>My Products Page</title>
        <meta name="description" content="Welcome to our online store!" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="products, online store, shopping" />
        <meta name="author" content="Your Name" />
        <link rel="canonical" href="https://example.com/products" />
      </Head>

      <ProductPageTopMenu isFilterActive={isFilterActive} setIsFilterActive={setIsFilterActive} />

      <div className="flex justify-between">
        <FilterUi isFilterActive={isFilterActive} />
        <ProductListingUi producList={producList} /> {/* img SEO inside this component */}
      </div>
    </>
  );
}
