import React, { useContext } from "react";
import SectionTitle from "./SectionTitle";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { PostsContext } from "../../contexes/postsContex";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const LatestAdditions = ({ place }) => {
	const { posts, setPosts, addOrRemoveFavorite } = useContext(PostsContext);

	const latestFivePosts = () => {
		let latestPosts = [];
		for (let i = posts?.length - 1; i > 0; i--) {
			latestPosts.push(posts[i]);
			if (latestPosts.length == 5) {
				break;
			}
		}
		return latestPosts;
	};

	const deletePost = async (postId) => {
		try {
			if (confirm("bssah")) {
				const response = await axios.delete(
					`http://localhost:5001/posts/${postId}`
				);

				setPosts(posts.filter((post) => post.id != postId));
				console.log("deleted :", response.data);

				toast.success("Deleted successfully!", {
					position: "top-center",
					autoClose: 3500,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
		} catch (error) {
			console.error("Error deleting :", error);
		}
	};
	return (
		<section>
			<div className='flex items-center justify-between flex-wrap space-y-3'>
				{place == "home" &&
					latestFivePosts()?.map((post) => (
						<div
							key={post.id}
							className='w-[19%] p-2 bg-[#fff]  rounded-2xl border-2 border-amber-600 overflow-hidden'
						>
							<img
								src='src/assets/Mosaico.jpeg'
								alt=''
								className='w-full h-50 rounded-xl'
							/>
							<div className='flex flex-col  items-center justify-center my-1'>
								<div className='font-bold text-[#652B15]'>{post.title}</div>
								<div className=' text-[#D3662E]'>{post.region}</div>
								<button
									onClick={() => addOrRemoveFavorite(post)}
									className='group flex items-center justify-center mt-1 w-[70%] border-2 border-dashed border-amber-600 py-1 px-3 transition-colors duration-400 ease-in-out hover:bg-[#D3662E] hover:text-white font-medium text-[#4C2010] rounded-full text-sm cursor-pointer'
								>
									{post.favorite ? (
										<>
											<span>remove from</span>
											<IoHeart className='inline text-lg text-[#652B15] group-hover:text-white transition-colors duration-400 ease-in-out' />
										</>
									) : (
										<>
											<span>add to</span>
											<IoHeartOutline className='inline text-lg text-[#652B15] group-hover:text-white transition-colors duration-400 ease-in-out' />
										</>
									)}{" "}
									{/* <IoHeartOutline className='inline text-lg text-[#652B15] group-hover:text-white transition-colors duration-400 ease-in-out' /> */}
								</button>
							</div>
						</div>
					))}
				{place == "admin" &&
					posts?.map((post) => (
						<div
							key={post.id}
							className=' p-2 bg-[#fff]  rounded-2xl border-2 border-amber-600 overflow-hidden'
						>
							<img
								src='src/assets/Mosaico.jpeg'
								alt=''
								className='w-full h-50 rounded-xl'
							/>
							<div className='flex flex-col  items-center justify-center my-1'>
								<div className='font-bold text-[#652B15]'>{post.title}</div>
								<div className=' text-[#D3662E]'>{post.region}</div>
								<div className='w-full flex items-center justify-between mt-2'>
									<button className='w-[49%] border-2 cursor-pointer font-medium text-xl rounded-lg flex items-center justify-center py-1 text-[#4487D2] bg-[#EBF5FF] '>
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
					))}
			</div>
			<ToastContainer />
		</section>
	);
};

export default LatestAdditions;
