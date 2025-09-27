import React, { useState } from "react";

const InfoSection = () => {
	const handleScroll = () => {
		window.scrollBy({
			top: 800, // adjust how much you want to scroll
			left: 0,
			behavior: "smooth",
		});
	};
	return (
		<section>
			<div className='w-full h-96 rounded-xl border-2 border-[#4C2010] overflow-hidden'>
				<div className=' flex items-center flex-col space-y-3 justify-center w-full h-full bg-linear-0 from-[#D1913C] to-[#FFD194]'>
					<h1 className='font-bold text-4xl text-white'>Moroccan carpets</h1>
					<p className='font-medium text-lg w-[50%] text-center'>
						Rabat, Fez, and Tetouan showcase handmade Amazigh rugs, rich in
						patterns and colors, used as décor in both urban and rural life.
					</p>
					<button
						className='text-white py-2 px-4 rounded-full bg-blue-500 cursor-pointer'
						onClick={handleScroll}
					>
						Discover
					</button>
				</div>
			</div>
		</section>
	);
};

export default InfoSection;
