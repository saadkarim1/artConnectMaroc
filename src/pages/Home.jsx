import React, { useContext } from "react";
import ArtisanOfTheMonth from "../components/home/ArtisanOfTheMonth";
import InfoSection from "../components/home/InfoSection";
import SectionTitle from "../components/home/SectionTitle";
import Posts from "../components/Posts";
import Categories from "../components/categories";
import Events from "../components/Events";

const Home = () => {
	return (
		<>
			<section className='flex flex-col space-y-10 my-10 '>
				<InfoSection />
				<SectionTitle title={"Categories"} />
				<Categories place={"home"} />
				<SectionTitle title={"Latest Additions"} />
				<Posts place={"home"} />
				<SectionTitle title={"Events"} />
				<Events place={"home"} />
				<ArtisanOfTheMonth />
			</section>
		</>
	);
};

export default Home;
