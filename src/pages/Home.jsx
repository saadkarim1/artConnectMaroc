import React, { useContext } from "react";
import Category from "../components/home/Category";
import LatestAdditions from "../components/home/LatestAdditions";
import Events from "../components/home/Events";
import ArtisanOfTheMonth from "../components/home/ArtisanOfTheMonth";
import InfoSection from "../components/home/InfoSection";
import { PostsContext } from "../contexes/postsContex";

const Home = () => {
	
	return (
		<>
			<section className='flex flex-col space-y-10 my-10 '>
				<InfoSection />
				<Category />
				<LatestAdditions />
				<Events />
				<ArtisanOfTheMonth />
			</section>
		</>
	);
};

export default Home;
