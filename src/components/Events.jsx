import React, { useContext } from "react";
import { EventsContext } from "../contexes/eventsContext";
import HomeEvents from "./home/HomeEvents";
import AdminEvents from "./admin/AdminEvents";
import axios from "axios";

const Events = ({ place }) => {
	const { events, setEvents } = useContext(EventsContext);

	const deleteEvent = async (event) => {
		console.log(event);
		try {
			await axios.delete(`http://localhost:5001/events/${event.id}`);
			setEvents(events.filter((item) => item.id != event.id));
		} catch (error) {}
	};
	return (
		<section>
			<div className='flex items-center justify-between'>
				{place == "home" &&
					events?.map((item) => <HomeEvents key={item.id} event={item} />)}
				{place == "admin" &&
					events?.map((item) => (
						<AdminEvents key={item.id} event={item} deleteEvent={deleteEvent} />
					))}
			</div>
		</section>
	);
};

export default Events;
