import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const paths = [
	{ path: "/", name: "home" },
	{ path: "/publish", name: "publish" },
	{ path: "/favorite", name: "favorite" },
	{ path: "/about", name: "about" },
	{ path: "/admin", name: "admin" },
];
const NavBar = () => {
	const { pathname } = useLocation();
	const [main, setMain] = useState("");
	return (
		// <div className="blur-lg">

		<nav className='sticky py-3 backdrop-blur-lg bg-[#FAF6F0]/50 z-50 top-0 flex items-center justify-evenly px-18'>
			<div className='w-[33%]'>
				{/* <img src='src/assets/image.png' alt='' className='w-[60px] h-[40px] ' /> */}
				<h1 className='font-extrabold text-2xl'>ArtConnect Morroco</h1>
			</div>
			<ul className=' flex items-center justify-between capitalize font-medium text-[#4C2010]  p-2   space-x-2 rounded-full border-2 border-[#4C2010]'>
				{paths.map((item) => (
					// <li
					// 	key={item.name}
					// 	className='group flex flex-col items-center cursor-pointer'
					// >
					// 	<Link to={item.path} className='text-md tracking-wide'>
					// 		{item.name}
					// 	</Link>
					// 	<span
					// 		className={`${
					// 			pathname == item.path
					// 				? "w-full bg-amber-500"
					// 				: "w-0 group-hover:w-full  bg-transparent group-hover:bg-amber-500"
					// 		} h-1 transition-all duration-400 ease-in-out rounded-full `}
					// 	></span>
					// </li>
					<li
						key={item.name}
						className={`cursor-pointer font-bold py-1 px-3 rounded-full capitalize ${
							pathname == item.path
								? "bg-amber-500  text-white"
								: "bg-transparent hover:bg-amber-500 py-1 px-3 text-[#652B15] hover:text-white"
						} transition-colors duration-300 ease-in-out `}
					>
						<Link to={item.path} className='text-md tracking-wide'>
							{item.name}{" "}
						</Link>
					</li>
				))}
			</ul>
			<div className='w-[33%] flex items-center justify-end space-x-2'>
				<div className='group p-1.5 rounded-full flex  bg-[#fff]  text-xl cursor-pointer border-2 border-[#4C2010]'>
					<FaSearch />
				</div>
				<Link
					to={"/admin"}
					className='bg-[#fff] py-1.5 px-3 rounded-full border-2 border-[#4C2010] flex items-center space-x-1.5 cursor-pointer'
				>
					<FaUser /> <span className='capitalize font-medium'>admin</span>
				</Link>
			</div>
		</nav>
		// </div>
	);
};

export default NavBar;
