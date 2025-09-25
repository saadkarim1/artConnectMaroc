import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
	return (
		<div className='flex flex-col min-h-screen bg-[#FAF6F0] '>
			<NavBar />
			<main className='flex-grow'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
