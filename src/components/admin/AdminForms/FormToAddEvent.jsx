import React, { useContext, useState } from "react";
import { EventsContext } from "../../../contexes/eventsContext";
import axios from "axios";

const FormToAddEvent = () => {
	const { events, setEvents } = useContext(EventsContext);
	const [formData, setFormData] = useState({ title: "", description: "" });

	const handleOnchange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		try {
			if (!formData.title || !formData.description) return;

			let lastId = parseInt(events[events.length - 1]?.id) || 0;
			const payload = { ...formData, id: (lastId + 1).toString() };
			console.log(payload);

			await axios.post("http://localhost:5001/events", payload);

			setEvents([...events, payload]);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='bg-white w-[70%] p-4 rounded-xl border border-[#d8b98c]'>
			<form onSubmit={handleSubmit} className='flex flex-col space-y-2'>
				<div>
					<label className='text-sm font-semibold text-[#4C2010] my-2'>
						Title
					</label>
					<input
						type='text'
						placeholder='Enter artwork title'
						name='title'
						onChange={(e) => handleOnchange(e)}
						className='w-full border border-[#d8b98c] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
					/>
				</div>

				<div>
					<label className='text-sm font-semibold text-[#4C2010] my-2'>
						Description
					</label>
					<textarea
						type='text'
						placeholder='Enter description'
						name='description'
						onChange={(e) => handleOnchange(e)}
						className='w-full border border-[#d8b98c] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#c35b1f] bg-white shadow-sm'
					/>
				</div>
				<button
					type='submit'
					className='bg-[#c35b1f] text-white p-2 rounded-lg mt-1 cursor-pointer'
				>
					add
				</button>
			</form>
		</div>
	);
};

export default FormToAddEvent;
