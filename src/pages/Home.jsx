import React, { useContext } from "react";
import Category from "../components/home/Category";
import LatestAdditions from "../components/home/LatestAdditions";
import Events from "../components/home/Events";
import ArtisanOfTheMonth from "../components/home/ArtisanOfTheMonth";
import InfoSection from "../components/home/InfoSection";
import { PostsContext } from "../contexes/postsContex";
import SectionTitle from "../components/home/SectionTitle";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
	const notify = () => toast("Wow so easy !");
	return (
		<>
			<section className='flex flex-col space-y-10 my-10 '>
				<button
					onClick={() =>
						toast.success("Work published successfully!", {
							position: "top-center",
							autoClose: 3500,
							hideProgressBar: true,
							closeOnClick: false,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "light",
						})
					}
					className='bg-amber-500 py-2 px-4 text-white rounded-md'
				>
					notify
				</button>
				<InfoSection />
				<SectionTitle title={"Categories"} />
				<Category place={"home"} />
				<SectionTitle title={"Latest Additions"} />
				<LatestAdditions place={"home"} />
				<SectionTitle title={"Events"} />
				<Events />
				<ArtisanOfTheMonth />
				<ToastContainer />
			</section>
		</>
	);
};

export default Home;
