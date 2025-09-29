import React from "react";
const HomeCategory = ({ category }) => {
	return (
		<div key={category.id} className='flex flex-col w-[23%] space-x-3 '>
			<img
				src='src/assets/category2.jpeg'
				alt=''
				className='rounded-xl border-2 border-amber-600'
			/>
			<div className='text-center my-2 font-medium text-xl text-[#4C2010]'>
				{category.title}
			</div>
		</div>
	);
};

export default HomeCategory;
