import React from "react";
import Category from "../components/home/Category";
import LatestAdditions from "../components/home/LatestAdditions";
import Events from "../components/home/Events";
import ArtisanOfTheMonth from "../components/home/ArtisanOfTheMonth";

const Home = () => {
	return (
		<>
			<section>
				<Category />
				<LatestAdditions />
				<Events />
				<ArtisanOfTheMonth />
			</section>
		</>
	);
};

export default Home;
