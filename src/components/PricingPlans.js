import React from "react";

const PricingPlans = () => {
  return (
    <div className="px-4 py-10 bg-white mt-[80px]">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#002C3E] text-center mb-10">
        Select your plan to get started
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {/* Standard Plan */}
        <div className="border border-gray-300 rounded-xl p-6 w-full max-w-md shadow-md">
          <h2 className="text-2xl font-bold text-[#002C3E] mb-2">Standard plan</h2>
          <p className="text-[#002C3E] mb-4">
            Best for businesses and small teams that manage a few profiles across networks.
          </p>
          <div className="bg-[#D9E8EF] rounded-lg p-4 flex justify-center mb-4">
            <img
              src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F3n6mGfKmBpZeqkEvkR8ZXb%2F15cb2675437ae3cc7be7eb616d9081e5%2FHomepage-Features-SaveHours_4x.png&w=3840&q=75"
              alt="Standard Laptop"
              className="h-40 object-contain"
            />
          </div>
          <div className="bg-[#004E66] text-white font-bold text-center py-3 rounded-md mb-4">
            STANDARD
            <br />
            Manage 5 Social Accounts
          </div>
          <p className="font-semibold text-[#002C3E] mb-2">5 social accounts</p>
          <div className="flex flex-wrap gap-3 mb-6 text-2xl text-[#002C3E]">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-tiktok"></i>
          </div>
          <button className="bg-[#002C3E] text-white py-3 w-full rounded-md font-bold hover:bg-[#001F2B] transition">
            Start your free 30-day trial
          </button>
        </div>

        {/* Advanced Plan */}
        <div className="border border-gray-300 rounded-xl p-6 w-full max-w-md shadow-md">
          <h2 className="text-2xl font-bold text-[#002C3E] mb-2">Advanced plan</h2>
          <p className="text-[#002C3E] mb-4">
            Best for businesses and teams that need to drive engagement and results.
          </p>
          <div className="bg-[#FFE8E8] rounded-lg p-4 flex justify-center mb-4">
            <img
              src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F6qiY3uDOZ47r3pu3GAWgKe%2F395ad503a1167bd1ff2b47ed81c94a52%2FHomepage-Accordion-Analytics_4x.png&w=1200&q=75"
              alt="Advanced Laptop"
              className="h-40 object-contain"
            />
          </div>
          <div className="bg-[#FF5A5F] text-white font-bold text-center py-3 rounded-md mb-4">
            ADVANCED
            <br />
            Unlimited Social Accounts
          </div>
          <p className="font-semibold text-[#002C3E] mb-2">Unlimited social accounts</p>
          <div className="flex flex-wrap gap-3 mb-6 text-2xl text-[#002C3E]">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-tiktok"></i>
          </div>
          <button className="bg-[#002C3E] text-white py-3 w-full rounded-md font-bold hover:bg-[#001F2B] transition">
            Start your free 30-day trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
