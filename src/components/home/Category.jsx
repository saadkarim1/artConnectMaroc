import React, { useContext } from "react";
import { CategoriesContext } from "../../contexes/categoriesContext";

const Category = ({ place }) => {
  const { categories } = useContext(CategoriesContext);

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories?.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div
              className="bg-white border-2 border-amber-600 w-full h-40 bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(${item.img || "src/assets/category2.jpeg"})` }}
            ></div>
            <div className="text-center my-2 font-medium text-xl text-[#4C2010]">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
