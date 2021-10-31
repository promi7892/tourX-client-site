import React, { useEffect, useState } from 'react';
import ALlBookings from '../../AllBookings/ALlBookings';

const ManageBooking = () => {
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		fetch('https://bloodcurdling-scarecrow-07685.herokuapp.com/services')
			.then((response) => response.json())
			.then((data) => setBookings(data));
	}, []);

	return (
		<div>
			<h1 className='heading text-center mt-5'>Your Bookings</h1>
			<div className='row my-5 container mx-auto'>
				{bookings.map((booking) => (
					<ALlBookings booking={booking}></ALlBookings>
				))}
			</div>
		</div>
	);
};

export default ManageBooking;
