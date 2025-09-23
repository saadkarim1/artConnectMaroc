import React from "react";
import SectionTitle from "./SectionTitle";

const items = [1, 2, 3, 4, 5];
const LatestAdditions = () => {
	return (
		<section className=' px-16 my-4'>
			<SectionTitle title={"Latest Additions"} />
			<div className='flex items-center justify-between'>
				{items.map((item) => (
					<div
						key={item}
						className='w-[18%] bg-[#FAF6F0]  rounded-2xl border-2 border-[#D3662E] overflow-hidden text-center'
					>
						<img src='src/assets/Mosaico.jpeg' alt='' className='w-full h-50' />
						<div className='font-bold text-[#652B15] my-1'>Zellij</div>
						<div className='my-1 text-[#D3662E]'>Casablanca</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default LatestAdditions;
