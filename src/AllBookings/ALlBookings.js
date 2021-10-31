import React from 'react';

const ALlBookings = (props) => {
	const { person, name, price } = props.booking;
	return (
		<div className='mx-auto container border my-3 shadow '>
			<h6 className='booking-name my-3'>Name: {name}</h6>
			<p className='person'>Total Person : {person}</p>
			<p className='person'>Total Price : {price}</p>
		</div>
	);
};

export default ALlBookings;
