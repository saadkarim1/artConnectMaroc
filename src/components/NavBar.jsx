import React from "react";
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
	return (
		<nav className='flex items-center justify-evenly px-16'>
			<div className='w-[33%]'>
				{/* <img src='src/assets/image.png' alt='' className='w-[60px] h-[40px] ' /> */}
				<h1 className='font-extrabold text-2xl'>ArtConnect Morroco</h1>
			</div>
			<ul className='w-[33%] flex items-center justify-between  bg-[#E3C9A0] p-4 px-6 rounded-b-2xl border-b-2 border-l-2 border-r-2 capitalize font-medium text-[#4C2010] border-[#4C2010]'>
				{paths.map((item) => (
					<li
						key={item.name}
						className='group flex flex-col items-center cursor-pointer'
					>
						<Link to={item.path}>{item.name}</Link>
						<span
							className={`${
								pathname == item.path
									? "w-full bg-[#D3662E]"
									: "w-0 group-hover:w-full  bg-transparent group-hover:bg-[#D3662E]"
							} h-1 transition-all duration-400 ease-in-out rounded-full `}
						></span>
					</li>
				))}
			</ul>
			<div className='w-[33%] flex items-center justify-end space-x-2'>
				<div className='group p-1.5 rounded-full flex  bg-[#f5f5f5]  text-xl cursor-pointer border-2 border-[#4C2010]'>
					<FaSearch />
				</div>
				<Link
					to={"/admin"}
					className='bg-[#f5f5f5] py-1 px-3 rounded-md border-2 border-[#4C2010] flex items-center space-x-1.5 cursor-pointer'
				>
					<FaUser /> <span className='capitalize'>admin</span>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
