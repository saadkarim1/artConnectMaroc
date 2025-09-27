import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Publish from "./pages/Publish";
import Favorite from "./pages/Favorite";
import About from "./pages/About";
import Admin from "./pages/Admin";
import { useEffect } from "react";


function App() {
	
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='publish' element={<Publish />} />
					<Route path='favorite' element={<Favorite />} />
					<Route path='about' element={<About />} />
					<Route path='admin' element={<Admin />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
