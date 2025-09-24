import React from "react";
import SectionTitle from "./SectionTitle";

const ArtisanOfTheMonth = () => {
	return (
		<section className='px-16 my-4'>
			<SectionTitle title={"Artisan of the month"} />
			<div className='w-full  flex items-center flex-col justify-center'>
				<div className='w-40 h-40 rounded-full border-3 border-[#D3662E]'></div>
				{/* <SectionTitle title={"Fatima Mohammed"} /> */}
				{/* <div className='font-medium text-[#EBA26B] text-2xl'>Artisan</div> */}
				<div className='font-bold text-[#652B15] text-2xl my-1'>
					Fatima Mohammed
				</div>
				<div className=' text-[#EBA26B] text-xl font-medium  w-[80%] mx-auto text-center '>
					Artisan
				</div>
			</div>
		</section>
	);
};

export default ArtisanOfTheMonth;
