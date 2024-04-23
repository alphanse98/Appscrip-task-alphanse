import React from "react";
// import SearchIcon from "../asset/searchIcon";
import Logo from "../asset/Logo";
import { HeartIcon } from "../asset/HeartIcon";
import BagIcon from "../asset/BagIcon";
// import ProfileIcon from "../asset/Profileicon";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>
        <div className="text-3xl font-bold">LOGO</div>
        <div className="flex gap-5">
          {/* <SearchIcon /> */}
          <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/linear/search-normal">
        <g id="vuesax/linear/search-normal_2">
          <g id="search-normal">
            <path
              id="Vector"
              d="M11.5 20.9998C16.7467 20.9998 21 16.7465 21 11.4998C21 6.25311 16.7467 1.99982 11.5 1.99982C6.25329 1.99982 2 6.25311 2 11.4998C2 16.7465 6.25329 20.9998 11.5 20.9998Z"
              stroke="#292D32"
              stroke-width="1.40625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M22 21.9998L20 19.9998"
              stroke="#292D32"
              stroke-width="1.40625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
          <HeartIcon />
          <BagIcon />
          {/* <ProfileIcon /> */}
          <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/twotone/profile">
        <g id="vuesax/twotone/profile_2">
          <g id="profile">
            <path
              id="Vector"
              d="M12.1625 10.87C12.0625 10.86 11.9425 10.86 11.8325 10.87C9.4525 10.79 7.5625 8.84 7.5625 6.44C7.5625 3.99 9.5425 2 12.0025 2C14.4525 2 16.4425 3.99 16.4425 6.44C16.4325 8.84 14.5425 10.79 12.1625 10.87Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M7.15875 14.56C4.73875 16.18 4.73875 18.82 7.15875 20.43C9.90875 22.27 14.4188 22.27 17.1688 20.43C19.5888 18.81 19.5888 16.17 17.1688 14.56C14.4288 12.73 9.91875 12.73 7.15875 14.56Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
        </div>
      </div>

      <div className="flex justify-center items-center gap-24 mt-8 drop-shadow-md">
        <h1 className="text-lg font-bold">SHOP</h1>
        <h1 className="text-lg font-bold">SKILLS</h1>
        <h1 className="text-lg font-bold">STORIES</h1>
        <h1 className="text-lg font-bold">ABOUTH</h1>
        <h1 className="text-lg font-bold">CONTACT US</h1>
      </div>
      <hr class="mt-4" />

      <div className="my-14 ">
        <h2 className="text-5xl text-center">DISCOVER OUR PRODUCTS</h2>
        <p className="text-xl font-normal text-center font-sans mt-5">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        </p>
        <p className="text-xl font-normal text-center font-sans mt-2">
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </div>
  );
};

export default NavBar;
