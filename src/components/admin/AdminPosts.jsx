import React, { useContext, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import { CategoriesContext } from "../../contexes/categoriesContext";

const AdminPosts = ({ post, updatePost }) => {
	const [showEditPopUp, setShowEditPopUp] = useState(false);
	const { categories } = useContext(CategoriesContext);
	const [formData, setFormData] = useState({
		artisanId: post.artisanId,
		category: post.category,
		favorite: post.favorite,
		id: post.id,
		region: post.region,
		title: post.title,
	});
	// console.log(post);

	const handleOnchange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			if (!formData.title || !formData.category || !formData.region) {
				return;
			}
			await updatePost(formData);

			setShowEditPopUp(false);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<div className=' p-2 bg-[#fff]  rounded-2xl border-2 border-amber-600 overflow-hidden'>
				<img
					src='src/assets/Mosaico.jpeg'
					alt=''
					className='w-full h-50 rounded-xl'
				/>
				<div className='flex flex-col  items-center justify-center my-1'>
					<div className='font-bold text-[#652B15]'>{post.title}</div>
					<div className=' text-[#D3662E]'>{post.region}</div>
					<div className='w-full flex items-center justify-between mt-2'>
						<button
							onClick={() => setShowEditPopUp(true)}
							className='w-[49%] border-2 cursor-pointer font-medium text-xl rounded-lg flex items-center justify-center py-1 text-[#4487D2] bg-[#EBF5FF] '
						>
							<FiEdit />
						</button>
						<button
							onClick={() => deletePost(post.id)}
							className='w-[49%] border-2 cursor-pointer font-medium text-xl rounded-lg flex items-center justify-center py-1 px-3 text-[#D73029] bg-[#edced2]'
						>
							<RiDeleteBin6Line />
						</button>
					</div>
				</div>
			</div>
			{showEditPopUp && (
				<div className='fixed inset-0 flex items-center justify-center  bg-black/50 z-50'>
					<div className='bg-[#f5f5f5] w-[35%] p-6 rounded-xl'>
						<div className=' w-full flex items-center justify-end text-xl text-slate-600'>
							<GiCancel
								onClick={() => setShowEditPopUp(false)}
								className='cursor-pointer'
							/>
						</div>
						<form className='flex flex-col space-y-2' onSubmit={handleSubmit}>
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
								Edit
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default AdminPosts;
