import axios from "axios";
import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CategoriesContext } from "../../contexes/categoriesContext";

const FormToAddCategory = () => {
	const [title, setTitle] = useState("");
	const { categories, setCategories } = useContext(CategoriesContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (!title) {
				toast.warning("Enter title", {
					position: "top-center",
					autoClose: 3500,
					hideProgressBar: true,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				return;
			}

			let lastId = parseInt(categories[categories.length - 1]?.id) || 0;
			const payload = { id: (lastId + 1).toString(), title: title };
			const response = await axios.post(
				"http://localhost:5001/categories",
				payload
			);
			setCategories([...categories, payload]);
			console.log("adding category :", response.data);
		} catch (error) {}
	};
	return (
		<div className='bg-white w-[70%] p-4 rounded-xl border border-[#d8b98c]'>
			<form onSubmit={handleSubmit} className='flex flex-col space-y-2'>
				{/* Title */}
				<div>
					<label className='text-sm font-semibold text-[#4C2010] my-2'>
						Title
					</label>
					<input
						type='text'
						placeholder='Enter artwork title'
						name='title'
						onChange={(e) => setTitle(e.target.value)}
						className='w-full border border-[#d8b98c] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
					/>
				</div>
				<button type='submit'>add</button>
			</form>
			<ToastContainer />
		</div>
	);
};

export default FormToAddCategory;
