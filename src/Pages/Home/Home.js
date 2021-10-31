import React from 'react';
// import Booking from '../Booking/Booking';
import Achievements from './Achievements/Achievements';
import AllService from './AllService/AllService';
import Banner from './Banner/Banner';
import Search from './Search/Search';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Search></Search>
			<AllService></AllService>
			<Achievements></Achievements>
			<Testimonial></Testimonial>
			{/* <Booking></Booking> */}
		</div>
	);
};

export default Home;
