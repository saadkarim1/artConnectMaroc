import React, { useState } from "react";
import Category from "../components/home/Category";
import ArtWorks from "../components/admin/ArtWorks";
import Events from "../components/home/Events";

const Admin = () => {
	const sections = ["artworks", "categories", "events", "artisans"];
	const [main, setMain] = useState(sections[0]);
	return (
		<>
			<div className='  px-6 py-10'>
				{/* Navigation Tabs */}
				<div className='flex items-center justify-center'>
					<div className=' p-1 flex items-center justify-center space-x-2 rounded-full '>
						{sections.map((section) => (
							<button
								key={section}
								onClick={() => setMain(section)}
								className={`group flex flex-col space-y-1 items-center cursor-pointer font-bold tracking-wide py-1 px-3 rounded-full capitalize  transition-colors duration-300 ease-in-out `}
							>
								<span>{section}</span>
								<span
									className={` h-1 rounded-full bg-[#c35b1f] ${
										main == section
											? "w-full"
											: "w-0 group-hover:w-full group-hover:bg-[#c35b1f]"
									} transition-all duration-300 ease-in-out`}
								></span>
							</button>
						))}
					</div>
				</div>

				{/* Section Title + Add Button */}
				{/* <div className='flex justify-between items-center mb-8'>
					<h2 className='text-2xl font-bold text-[#7b3e1c] bg-[#e5d5b8] rounded-full px-6 py-2'>
						List of Artworks
					</h2>
					<button className='bg-[#c35b1f] text-white px-6 py-2 rounded-full shadow hover:bg-[#a34715] transition'>
						Add
					</button>
				</div> */}

				{main == sections[0] && <ArtWorks />}
				{main == sections[1] && <Category />}
				{main == sections[2] && <Events />}
			</div>
		</>
	);
};

export default Admin;
