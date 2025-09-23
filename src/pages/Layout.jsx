import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
	return (
		<div className='flex flex-col min-h-screen bg-[#F1E4D0]'>
			<NavBar />
			<main className='flex-grow p-6'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
