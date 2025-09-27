import React, { useContext } from "react";
import SectionTitle from "./SectionTitle";
import { CategoriesContext } from "../../contexes/categoriesContext";

// const categories = [
// 	{ title: "Tapis", img: "src/assets/category1.jpg" },
// 	{ title: "Tapis", img: "src/assets/category2.jpeg" },
// 	{ title: "Tapis", img: "src/assets/category1.jpg" },
// 	{ title: "Tapis", img: "src/assets/category2.jpeg" },
// ];
const Category = () => {
    const {categories} = useContext(CategoriesContext)
	return (
		<section
			className='bg-cover bg-center'
			// style={{ backgroundImage: `url(/src/assets/zakhrafa.png)` }}
		>
			<SectionTitle title={"Categories"} />
			<div className='flex items-center justify-between'>
				{categories?.map((item) => (
					<div key={item.id} className='flex flex-col w-[23%] space-x-3'>
						<div
							className='bg-white gap-3 border-2 border-[#4C2010] w-full h-40 bg-cover bg-center rounded-2xl'
							// className=''
							style={{ backgroundImage: `url(src/assets/category2.jpeg)` }}
						></div>
						<div className='text-center my-2 font-medium text-xl text-[#4C2010]'>
							{item.title}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Category;

{
	/* <img src={item.img} alt='' className='w-full object-contain' /> */
}
