import React from "react";
import DishesCard from "../layouts/DishesCard";
import asamManis from "server/images/asam-manis.jpg";
import ayamGoreng from "server/images/ayam-goreng.jpg";
import bawalBakar from "server/images/bawal-bakar.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard images={asamManis} title="Delicious Dish" price="$16.99" />
        <DishesCard images={ayamGoreng} title="Delicious Dish" price="$18.99" />
        <DishesCard images={bawalBakar} title="Delicious Dish" price="$14.99" />
      </div>
    </div>
  );
};

export default Menu;
