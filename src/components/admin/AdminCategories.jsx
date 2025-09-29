import React from "react";

const AdminCategories = ({ category, deleteCategory }) => {
	return (
		<div key={category.id} className='flex flex-col w-[23%] space-x-3 '>
			<div className='rounded-xl border-2 border-amber-600 flex items-center justify-center flex-col space-y-1 p-2'>
				<img
					src='src/assets/category2.jpeg'
					alt=''
					className='rounded-xl border-2 border-amber-600'
				/>
				<button
					onClick={() => deleteCategory(category.id)}
					className='w-full p-1.5 rounded-lg bg-[#D73029] text-white cursor-pointer'
				>
					Delete
				</button>
			</div>
			<div className='text-center my-2 font-medium text-xl text-[#4C2010]'>
				{category.title}
			</div>
		</div>
	);
};

export default AdminCategories;
