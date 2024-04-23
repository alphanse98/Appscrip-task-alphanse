import React from "react";
import PaymentIcon from "../asset/paymentIcons.png";
import LinkedIcon from "../asset/LinkedIcon";
import InstaIcon from "../asset/InstaIcon";

const Footer = () => {
  return (
    <div className="bg-black px-16 pb-10">
      <div className=" flex justify-between ">
        <div className="pt-20">
          <p className="text-white text-2xl font-bold ">BE THE FIRST TO KNOW</p>
          <p className="text-white text-base font-nornal mt-5">
            Sign up for updates from mettā muse.
          </p>
          <input
            className=" w-96 mt-8 px-5 py-2"
            placeholder="Enter your e-mail..."
          />
          <button className=" text-stone-500 px-12 py-2 ml-6 border border-stone-500 border-white rounded">
            Subscribe
          </button>
        </div>

        <div className="pt-20">
          <p className="text-white text-2xl font-bold ">CONTACT US</p>
          <p className="text-white text-base font-nornal mt-4">
            +44 221 133 5360
          </p>
          <p className="text-white text-base font-nornal mt-4">
            customercare@mettamuse.com
          </p>
          <p className="text-white text-2xl font-bold mt-4">CURRENCY</p>
          <p className="text-white text-xl font-bold mt-4 ">USD</p>
          <p className="text-white text-sm font-nornal mt-4">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <hr class="mt-10" />

      <div className="flex justify-between mt-10">
        <div>
          <p className="text-white text-2xl font-bold ">mettā muse</p>
          <p className="text-white text-base font-nornal mt-2">About Us</p>
          <p className="text-white text-base font-nornal mt-2">Stories</p>
          <p className="text-white text-base font-nornal mt-2">Artisans</p>
          <p className="text-white text-base font-nornal mt-2">Boutiques</p>
          <p className="text-white text-base font-nornal mt-2">Contact Us</p>
          <p className="text-white text-base font-nornal mt-2">
            EU Compliances Docs
          </p>
        </div>

        <div>
          <p className="text-white text-2xl font-bold ">QUICK LINKS</p>
          <p className="text-white text-base font-nornal mt-2">
            Orders & Shipping
          </p>
          <p className="text-white text-base font-nornal mt-2">
            Join/Login as a Seller
          </p>
          <p className="text-white text-base font-nornal mt-2">
            Payment & Pricing
          </p>
          <p className="text-white text-base font-nornal mt-2">
            Return & Refunds
          </p>
          <p className="text-white text-base font-nornal mt-2">FAQs</p>
          <p className="text-white text-base font-nornal mt-2">
            Privacy Policy
          </p>
          <p className="text-white text-base font-nornal mt-2">
            Terms & Conditions
          </p>
        </div>

        <div>
          <p className="text-white text-2xl font-bold ">Follow Us</p>
          <div className="flex gap-5 mt-4">
            <InstaIcon />
            <LinkedIcon />
          </div>
          <p className="text-white text-2xl font-bold mt-5 mb-7">mettā muse Accepts</p>
          <img src={PaymentIcon} alt="payment icon"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
