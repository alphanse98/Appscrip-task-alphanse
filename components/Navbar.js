import React from "react";
import SearchIcon from "../asset/searchIcon";
import Logo from "../asset/Logo";
import { HeartIcon } from "../asset/HeartIcon";
import BagIcon from "../asset/BagIcon";
import ProfileIcon from "../asset/Profileicon";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>
        <div className="text-3xl font-bold">LOGO</div>
        <div className="flex gap-5">
          <SearchIcon />
          <HeartIcon />
          <BagIcon />
          <ProfileIcon />
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
