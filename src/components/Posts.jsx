import React, { useContext } from "react";
import { PostsContext } from "../contexes/postsContex";
import HomePosts from "./home/HomePosts";
import { ToastContainer, toast } from "react-toastify";
import AdminPosts from "./admin/AdminPosts";
import axios from "axios";

const Posts = ({ place }) => {
	const { posts, setPosts, addOrRemoveFavorite } = useContext(PostsContext);

	const latestFivePosts = () => {
		let latestPosts = [];
		for (let i = posts?.length - 1; i > 0; i--) {
			latestPosts.push(posts[i]);
			if (latestPosts.length == 5) {
				break;
			}
		}
		return latestPosts;
	};
	const deletePost = async (postId) => {
		try {
			if (confirm("bssah")) {
				const response = await axios.delete(
					`http://localhost:5001/posts/${postId}`
				);

				setPosts(posts.filter((post) => post.id != postId));
				console.log("deleted :", response.data);

				toast.success("Deleted successfully!", {
					position: "top-center",
					autoClose: 3500,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}
		} catch (error) {
			console.error("Error deleting :", error);
		}
	};

	const updatePost = async (payload) => {
		console.log(payload);

		await axios.put(`http://localhost:5001/posts/${payload.id}`, payload);

		setPosts(
			posts.map((post) => {
				if (post.id == payload.id) {
					post.title = payload.title;
					post.category = payload.category;
					post.region = payload.region;
				}

				return post;
			})
		);

        
		toast.success("updated", {
			position: "top-center",
			autoClose: 3500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};

	return (
		<section>
			<div className='flex items-center justify-between flex-wrap space-y-3'>
				{place == "home" &&
					latestFivePosts()?.map((post) => (
						<HomePosts
							key={post.id}
							post={post}
							addOrRemoveFavorite={addOrRemoveFavorite}
						/>
					))}
				{place == "admin" &&
					posts?.map((post) => (
						<AdminPosts
							key={post.id}
							post={post}
							deletePost={deletePost}
							updatePost={updatePost}
						/>
					))}
			</div>
			<ToastContainer />
		</section>
	);
};

export default Posts;
