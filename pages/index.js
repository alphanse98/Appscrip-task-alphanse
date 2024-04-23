export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");  // Fetch data from external API
  const data = await res.json();
  // console.log(data);
  return { props: { producList: data } }; // Pass data to the page via props
};

export default function Home({ producList }) {
  return (
    <div className="m-10">
      {producList.map((item) => (
        <div key={item?.key}> keyhai</div>
      ))}
    </div>
  );
}
