import React from "react";
import img1 from "../assets/images/nasi-goreng.jpg";
import img2 from "../assets/images/nasi-padang.jpg";
import img3 from "../assets/images/soto-kudus.jpg";
import img4 from "../assets/images/sup-manten.jpg";
import img5 from "../assets/images/asam-manis.jpg";
import img6 from "../assets/images/ayam-goreng.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard image={img1} title="Nasi Goreng" price="$10.99" alt="Nasi Goreng Image" />
        <DishesCard image={img2} title="Nasi Padang" price="$12.99" alt="Nasi Padang Image" />
        <DishesCard image={img3} title="Soto Kudus" price="$10.99" alt="Soto Kudus Image" />
        <DishesCard image={img4} title="Sup Manten" price="$11.99" alt="Sup Manten Image" />
        <DishesCard image={img5} title="Asam Manis" price="$10.99" alt="Asam Manis Image" />
        <DishesCard image={img6} title="Ayam Goreng" price="$12.99" alt="Ayam Goreng Image" />
      </div>
    </div>
  );
};

export default Dishes;
