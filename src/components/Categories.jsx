import React, { useContext } from "react";
import HomeCategory from "./home/HomeCategory";
import { CategoriesContext } from "../contexes/categoriesContext";
import AdminCategories from "./admin/AdminCategories";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Categories = ({ place }) => {
	const { categories, setCategories } = useContext(CategoriesContext);

	const deleteCategory = async (categoryId) => {
		try {
			await axios.delete(`http://localhost:5001/categories/${categoryId}`);
			setCategories(categories.filter((item) => item.id != categoryId));
			toast.success("deleted", {
				position: "top-center",
				autoClose: 3500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} catch (error) {}
		console.log(categoryId);
	};
	return (
		<section className='w-full'>
			<div className='flex items-center justify-between flex-wrap'>
				{place == "home" &&
					categories?.map((item) => (
						<HomeCategory key={item.id} category={item} />
					))}
				{place == "admin" &&
					categories?.map((item) => (
						<AdminCategories
							key={item.id}
							category={item}
							deleteCategory={deleteCategory}
						/>
					))}
				<ToastContainer />
			</div>
		</section>
	);
};

export default Categories;
