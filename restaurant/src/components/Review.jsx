import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import salad from "server/images/salad.jpg";
import ayamGoreng from "server/images/ayam-goreng.jpg";
import bawalBakar from "server/images/bawal-bakar.jpg";

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Customer Reviews
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <ReviewCard image={salad} />
        <ReviewCard image={ayamGoreng} />
        <ReviewCard image={bawalBakar} />
        {/* ... (add other cards if needed) */}
      </div>
    </div>
  );
};

export default Review;
