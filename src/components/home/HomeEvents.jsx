import React, { useContext } from "react";


const HomeEvents = ({event}) => {
	return (
		<div
			key={event.id}
			className='w-[31%] p-2 bg-[#fff]  rounded-2xl border-2 border-[#D3662E] overflow-hidden text-center'
		>
			<img
				src={"src/assets/gnoua.jpg"}
				alt=''
				className='w-full h-50 rounded-xl'
			/>
			<div className='font-bold text-[#652B15] text-lg my-1'>{event.title}</div>
			<div className='my-1 text-[#D3662E] text-md font-medium w-[80%] mx-auto text-center '>
				{event.description}
			</div>
		</div>
	);
};

export default HomeEvents;
