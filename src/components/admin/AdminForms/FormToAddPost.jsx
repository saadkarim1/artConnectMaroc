import React, { useContext, useState } from "react";
import { CategoriesContext } from "../../../contexes/categoriesContext";
import axios from "axios";
import { PostsContext } from "../../../contexes/postsContex";
import { ToastContainer, toast } from "react-toastify";

const FormToAddPost = () => {
	const { categories } = useContext(CategoriesContext);
	const { posts, setPosts } = useContext(PostsContext);
	const [formData, setFormData] = useState({
		title: "",
		category: 0,
		region: "",
	});

	const validateForm = () => {
		if (!formData.title || !formData.category || !formData.region) {
			toast.warning("All fields are required.", {
				position: "top-center",
				autoClose: 3500,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return false;
		}
		return true;
	};

	const handleOnchange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		try {
			let lastId = parseInt(posts[posts.length - 1]?.id) || 0;

			const payload = {
				...formData,
				id: (lastId + 1).toString(),
				favorite: false,
				artisanId: 1,
			};

			await axios.post("http://localhost:5001/posts", payload);

			setPosts([...posts, payload]);

			toast.success("work published successfully!", {
				position: "top-center",
				autoClose: 3500,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			handleCancel();
		} catch (error) {
			console.error(error);
		}
	};

	const handleCancel = () => {
		setFormData({
			title: "",
			category: 0,
			region: "",
		});
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
						value={formData.title}
						name='title'
						onChange={(e) => handleOnchange(e)}
						className='w-full border border-[#d8b98c] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
					/>
				</div>

				{/* Category */}
				<div>
					<label className='text-sm font-semibold text-[#4C2010] my-2'>
						Category
					</label>
					<select
						value={formData.category}
						name='category'
						onChange={(e) => handleOnchange(e)}
						className='w-full border border-[#d8b98c] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
					>
						<option>Select category</option>
						<hr />
						{categories?.map((item) => (
							<option key={item.id} value={item.id}>
								{item.title}
							</option>
						))}
					</select>
				</div>

				{/* Region */}
				<div>
					<label className='text-sm font-semibold text-[#4C2010] my-2'>
						Region
					</label>
					<input
						type='text'
						placeholder='Enter region'
						value={formData.region}
						name='region'
						onChange={(e) => handleOnchange(e)}
						className='w-full border border-[#d8b98c] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
					/>
				</div>
				<button
					type='submit'
					className='bg-[#c35b1f] text-white p-2 rounded-lg mt-1 cursor-pointer'
				>
					add
				</button>
			</form>
			<ToastContainer />
		</div>
	);
};

export default FormToAddPost;
