import React, { useState } from "react";

const InfoSection = () => {
	const data = [
		{
			title: "Moroccan carpets",
			description:
				"Rabat, Fez, and Tetouan showcase handmade Amazigh rugs, rich in patterns and colors, used as décor in both urban and rural life.",
		},
		{ title: "dkfj", description: "98789" },
		{ title: "dfhjdsk", description: "dkjhv" },
		{ title: "ckjdsfh", description: "difuy" },
		{ title: "dfiuyd", description: "dfkjhd" },
	];
	const [houda, setHouda] = useState(data[0]);
	// let i = 0;
	// const show = () => {
	// 	if (i > data.length) {
	// 		i = 0;
	// 	}
	// 	i++;
	// 	console.log(i);
	// 	setHouda(data[i]);
	// };

	// setTimeout(show(), 3000);
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
					<h1 className='font-bold text-4xl text-white'>{houda.title}</h1>
					<p className='font-medium text-lg w-[50%] text-center'>
						{houda.description}
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
