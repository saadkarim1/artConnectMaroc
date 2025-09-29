import React from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

const HomePosts = ({ post, addOrRemoveFavorite }) => {
	return (
		<div
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
				</button>
			</div>
		</div>
	);
};

export default HomePosts;
