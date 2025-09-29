import React, { useContext, useState } from "react";
import axios from "axios";
import { CategoriesContext } from "../contexes/categoriesContext";
import { PostsContext } from "../contexes/postsContex";
import { ToastContainer, toast } from "react-toastify";

const Publish = () => {
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

			toast.success("Work published successfully!", {
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
		<div className='flex flex-col items-center justify-center mt-20'>
			<div className='w-full max-w-3xl bg-[#fafafa] rounded-2xl shadow-xl border border-[#d8b98c] p-10'>
				{/* Header */}
				<h1 className='text-center text-2xl font-[#4C2010] bg-[#c35b1f] text-white py-2 rounded-xl mb-10 shadow-md tracking-wide'>
					Publish
				</h1>

				{/* Formulaire */}
				<form
					onSubmit={handleSubmit}
					className='grid grid-cols-1 md:grid-cols-1 gap-8'
				>
					{/* Title */}
					<div className='col-span-1'>
						<label className='block text-sm font-semibold text-[#4C2010] mb-2'>
							Title
						</label>
						<input
							type='text'
							placeholder='Enter artwork title'
							value={formData.title}
							name='title'
							onChange={(e) => handleOnchange(e)}
							className='w-full border border-[#d8b98c] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
						/>
					</div>

					{/* Category */}
					<div className='col-span-1'>
						<label className='block text-sm font-semibold text-[#4C2010] mb-2'>
							Category
						</label>
						<select
							value={formData.category}
							name='category'
							onChange={(e) => handleOnchange(e)}
							className='w-full border border-[#d8b98c] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
						>
							<option value=''>Select category</option>
							<hr />
							{categories?.map((item) => (
								<option key={item.id} value={item.id}>
									{item.title}
								</option>
							))}
						</select>
					</div>

					{/* Region */}
					<div className='col-span-1'>
						<label className='block text-sm font-semibold text-[#4C2010] mb-2'>
							Region
						</label>
						<input
							type='text'
							placeholder='Enter region'
							value={formData.region}
							name='region'
							onChange={(e) => handleOnchange(e)}
							className='w-full border border-[#d8b98c] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
						/>
					</div>

					{/* Image Upload  */}

					<div>
            <label className='block text-sm font-semibold text-[#4C2010] mb-2'>
              Image
            </label>
            <div className='border-2 border-dashed border-[#d8b98c] rounded-lg p-6 text-center bg-[#fafafa]'>
              <p className='text-gray-500 mb-3'>
                Drag & drop your image here or
              </p>
              <input
                type='file'
                accept='image/*'
                className='hidden'
                id='fileInput'
              />
              <label
                htmlFor='fileInput'
                className='inline-block bg-[#c35b1f] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#a34715] transition'
              >
                Choose File
              </label>
              <p className='text-xs text-gray-400 mt-2'>
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
         
				</form>

				{/* Buttons */}
				<div className='flex justify-end gap-4 mt-10'>
					<button
						type='submit'
						onClick={handleSubmit}
						className='bg-[#c35b1f] cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-[#a34715] transition shadow-md'
					>
						Post
					</button>
					<button
						type='button'
						onClick={handleCancel}
						className='bg-[#e5d5b8] cursor-pointer text-black px-6 py-3 rounded-lg hover:bg-[#d1c0a0] transition shadow-md'
					>
						Cancel
					</button>
				</div>
				<ToastContainer />
			</div>
		</div>
	);
};

export default Publish;
