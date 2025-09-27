import React, { useContext } from "react";
import SectionTitle from "./SectionTitle";
import { EventsContext } from "../../contexes/eventsContext";

// const events = [
// 	{
// 		title: "Gnaoua Festival",
// 		description: "In Essaouira, mixing Gnaoua and world music together.",
// 		img: "src/assets/gnoua.jpg",
// 	},
// 	{
// 		title: "Maison de l’Artisan",
// 		description: "Events that promote Moroccan crafts and local artisans.",
// 		img: "src/assets/maison.jpeg",
// 	},
// 	{
// 		title: "Mawazine Festival",
// 		description:
// 			"A huge festival in Rabat with world stars and Moroccan music.",
// 		img: "src/assets/mawazine.jpg",
// 	},
// ];
const Events = () => {
	const { events } = useContext(EventsContext);
	return (
		<section>
			
			<div className='flex items-center justify-between'>
				{events?.map((item, index) => (
					<div
						key={item.id}
						className='w-[31%] p-2 bg-[#fff]  rounded-2xl border-2 border-[#D3662E] overflow-hidden text-center'
					>
						<img
							src={"src/assets/gnoua.jpg"}
							alt=''
							className='w-full h-50 rounded-xl'
						/>
						<div className='font-bold text-[#652B15] text-lg my-1'>
							{item.title}
						</div>
						<div className='my-1 text-[#D3662E] text-md font-medium w-[80%] mx-auto text-center '>
							{item.description}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Events;
