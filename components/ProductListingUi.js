import React from 'react'
import Image from 'next/image';

const ProductListingUi = ({producList}) => {
  return (
    <div className="m-10 flex flex-wrap justify-around gap-10">

          {producList.map((item) => (
            <div key={item?.id} className=" w-64 ">
              <div className="w-64 h-72">     

                <Image 
                src={item?.image}
                alt={item?.description} // img SEO here
                width={260}
                height={290}
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
  )
}

export default ProductListingUi