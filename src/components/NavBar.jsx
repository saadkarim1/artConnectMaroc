import React from "react";
import { Link } from "react-router";

const NavBar = () => {
	return (
		<div>
			<ul className='flex gap-6'>
				<li>
					<Link to={"/"}>home</Link>
				</li>
				<li>
					<Link to={"/publish"}>publish</Link>
				</li>
				<li>
					<Link to={"/favorite"}>favorite</Link>
				</li>
				<li>
					<Link to={"/about"}>about</Link>
				</li>
				<li>
					<Link to={"/admin"}>admin</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
