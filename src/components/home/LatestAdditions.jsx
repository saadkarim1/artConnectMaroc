import React, { useContext } from "react";
import SectionTitle from "./SectionTitle";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { PostsContext } from "../../contexes/postsContex";

const LatestAdditions = () => {
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
	const handleClick = () => {
		// console.log(latestPosts);
	};
	return (
		<section>
			<SectionTitle title={"Latest Additions"} />
			<div className='flex items-center justify-between'>
				{latestFivePosts()?.map((post) => (
					<div
						key={post.id}
						className='w-[19%] p-2 bg-[#fff]  rounded-2xl border-2 border-[#D3662E] overflow-hidden'
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
								className='group flex items-center justify-center mt-1 w-[70%] border-2 border-dashed border-[#D3662E] py-1 px-3 transition-colors duration-400 ease-in-out hover:bg-[#D3662E] hover:text-white font-medium text-[#4C2010] rounded-full text-sm cursor-pointer'
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
			</div>
		</section>
	);
};

export default LatestAdditions;
