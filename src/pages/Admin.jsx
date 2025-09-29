import React, { useState } from "react";
import FormToAddPost from "../components/admin/AdminForms/FormToAddPost";
import FormToAddCategory from "../components/admin/AdminForms/FormToAddCategory";
import FormToAddEvent from "../components/admin/AdminForms/FormToAddEvent";
import Posts from "../components/Posts";
import Categories from "../components/categories";
import Events from "../components/Events";

const Admin = () => {
	const sections = ["artworks", "categories", "events", "artisans"];

	const [main, setMain] = useState(sections[0]);
	const [show, setShow] = useState(false);

	return (
		<div className='my-10 flex flex-col items-center justify-center space-y-5'>
			<div className='flex items-center justify-center'>
				<div className=' p-1 flex items-center justify-center space-x-2 rounded-full '>
					{sections.map((section) => (
						<button
							key={section}
							onClick={() => {
								setMain(section);
								setShow(false);
							}}
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

			<div className='w-[70%] flex items-center justify-center flex-col space-y-4'>
				<button
					onClick={() => setShow(!show)}
					className='bg-[#c35b1f] text-white px-10 py-2 cursor-pointer rounded-full shadow hover:bg-[#a34715] transition'
				>
					Add {main}
				</button>
				{show && main == sections[0] && <FormToAddPost />}
				{show && main == sections[1] && <FormToAddCategory />}
				{show && main == sections[2] && <FormToAddEvent />}
			</div>

			{main == sections[0] && <Posts place={"admin"} />}
			{main == sections[1] && <Categories place={"admin"} />}
			{main == sections[2] && <Events place={"admin"} />}
		</div>
	);
};

export default Admin;
