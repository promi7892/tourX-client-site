import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../Images/1.jpeg';
import img2 from '../../../Images/2.jpeg';
import img3 from '../../../Images/4.jpg';
import img4 from '../../../Images/5.jpg';
import img5 from '../../../Images/3.jpg';
import './Banner.css';

const Banner = () => {
	return (
		<div>
			<div className='heading my-5 text-center'>
				<h1>Your Journey Begins</h1>
				<h4>
					<small>
						Travel with one of us and we will prove to you that it’s never been
						easier, safer, or more fun
					</small>
				</h4>
			</div>
			<Carousel
				className='container 
             w-100 h-50 my-1'
			>
				<Carousel.Item interval={1000}>
					<img className='d-block w-100' src={img1} alt='First slide' />
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={img2} alt='Second slide' />
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={img3} alt='Third slide' />
				</Carousel.Item>

				<Carousel.Item>
					<img className='d-block w-100' src={img4} alt='fourth slide' />
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={img5} alt='fifth slide' />
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Banner;
