import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import {
	SiYourtraveldottv,
	SiSlideshare,
	SiGooglemaps,
	SiHandshake,
} from 'react-icons/si';
import './Achievements.css';

const Achievements = () => {
	return (
		<div className='container '>
			<div className='text-center my-5 mx-auto'>
				<h1 className='heading '>Plan Your Tour With Us</h1>
				<p className='fs-5 w-75 mx-auto'>
					Find your next travel adventure and make it memorable. Explore
					wildlife, enjoy seaside or book a cruise tour. Check out our popular
					destinations.
				</p>
			</div>
			<Container>
				<Row className='d-flex justify-content-evenly'>
					<Col className='bg-light  mx-5 p-4'>
						<SiYourtraveldottv className='section-icon mx-5 text-center' />
						<p>
							<b>Reliable Booking </b>
							<br /> System Your booking system! We offer a booking, scheduling
							help.
						</p>
					</Col>
					<Col className='bg-light  mx-5 p-4'>
						<SiSlideshare className='section-icon mx-5' />
						<p>
							<b>2000+ Tour Guides </b> <br /> We hire local guides to provide
							you the best service in your travel
						</p>
					</Col>
					<Col className='bg-light  mx-5 p-4'>
						<SiGooglemaps className='section-icon mx-5' />
						<p>
							<b>World Class Service</b> <br /> We all want it. If we run a
							business, we all want to give the impression.
						</p>
					</Col>
					<Col className='bg-light mx-5 p-4'>
						<SiHandshake className='section-icon mx-5 ' />
						<p>
							<b>Trusted Travel Agency</b> <br />
							We all want it. If we run a business, we all want to give the
							impression.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Achievements;
