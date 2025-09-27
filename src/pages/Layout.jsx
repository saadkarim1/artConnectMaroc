import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { PostsContext } from "../contexes/postsContex";
import axios from "axios";
import { CategoriesContext } from "../contexes/categoriesContext";
import { EventsContext } from "../contexes/eventsContext";

const Layout = () => {
	const [posts, setPosts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [events, setEvents] = useState([]);
	useEffect(() => {
		async function fetchPosts() {
			try {
				const posts = await axios.get("http://localhost:5001/posts");
				const categories = await axios.get("http://localhost:5001/categories");
				const events = await axios.get("http://localhost:5001/events");

				setCategories(categories.data);
				setPosts(posts.data);
				setEvents(events.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchPosts();
	}, []);

	const addOrRemoveFavorite = async (post) => {
		try {
			const response = await axios.patch(
				`http://localhost:5001/posts/${post.id}`,
				{
					favorite: !post.favorite,
				}
			);
			// console.log(post.favorite);
			setPosts(
				posts.map((item) => {
					if (item.id == post.id) {
						item.favorite = !post.favorite;
					}
					return item;
				})
			);
			console.log("Updated with PATCH:", response.data);
		} catch (error) {
			console.error("Error updating with PATCH:", error);
		}
	};
	return (
		<PostsContext value={{ posts: posts, setPosts, addOrRemoveFavorite }}>
			<CategoriesContext value={{ categories: categories, setCategories }}>
				<EventsContext value={{ events: events, setEvents }}>
					<div className='flex flex-col min-h-screen bg-[#FAF6F0] '>
						<NavBar />
						<main className='flex-grow px-30'>
							<Outlet />
						</main>
						<Footer />
					</div>
				</EventsContext>
			</CategoriesContext>
		</PostsContext>
	);
};

export default Layout;
