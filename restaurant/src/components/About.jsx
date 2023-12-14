import React from "react";
import img from "../server/logo/logo.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        About Us
      </h1>

      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/2">
          <img src={img} alt="About Us" className="rounded-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg mb-4">
            We are a passionate team dedicated to serving delicious and
            high-quality food to our valued customers.
          </p>
          <p className="text-lg mb-4">
            Our mission is to create an exceptional dining experience and make
            your every visit memorable.
          </p>
          {/* Add more content as needed */}
          <Button label="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
