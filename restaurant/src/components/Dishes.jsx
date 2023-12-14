import React from "react";
import DishesCard from "../layouts/DishesCard";
import pie from "server/images/pie.jpg";
import nasiPadang from "server/images/nasi-padang.jpg";
import sotoKudus from "server/images/soto-kudus.jpg";
import bakwan from "server/images/bakwan.jpg"

const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard images={pie} title="Nasi Goreng" price="$10.99" alt="Nasi Goreng Image" />
        <DishesCard images={nasiPadang} title="Nasi Padang" price="$12.99" alt="Nasi Padang Image" />
        <DishesCard images={sotoKudus} title="Soto Kudus" price="$10.99" alt="Soto Kudus Image" />
        <DishesCard images={bakwan} title="bakwan" price="$10.99" alt="Soto Kudus Image" />
        {/* ... (tambahkan card lain jika ada) */}
      </div>
    </div>
  );
};

export default Dishes;
