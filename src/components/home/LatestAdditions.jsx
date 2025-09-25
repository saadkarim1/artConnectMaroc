import React from "react";
import SectionTitle from "./SectionTitle";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

const items = [1, 2, 3, 4, 5];
const LatestAdditions = () => {
    
	return (
		<section className=' px-16 my-4'>
			<SectionTitle title={"Latest Additions"} />
			<div className='flex items-center justify-between'>
				{items.map((item) => (
					<div
						key={item}
						className='w-[18%] p-2 bg-[#fff]  rounded-2xl border-2 border-[#D3662E] overflow-hidden'
					>
						<img
							src='src/assets/Mosaico.jpeg'
							alt=''
							className='w-full h-50 rounded-xl'
						/>
						<div className='flex flex-col  items-center justify-center my-1'>
							<div className='font-bold text-[#652B15]'>Zellij</div>
							<div className=' text-[#D3662E]'>Casablanca</div>
							<button className='group flex items-center justify-center mt-1 w-[70%] border-2 border-dashed border-[#D3662E] py-1 px-3 transition-colors duration-400 ease-in-out hover:bg-[#D3662E] hover:text-white font-medium text-[#4C2010] rounded-full text-sm cursor-pointer'>
								add to
								{/* <IoHeartOutline className='inline text-lg text-[#652B15] group-hover:text-white transition-colors duration-400 ease-in-out' /> */}
								<IoHeart className='inline text-lg text-[#652B15] group-hover:text-white transition-colors duration-400 ease-in-out' />
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default LatestAdditions;
