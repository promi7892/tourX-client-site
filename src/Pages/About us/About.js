import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img1 from '../../Images/pexels-tirachard-kumtanom-347141.jpg';

const About = () => {
	return (
		<div className='container w-75'>
			{/* add a video in background nD SHOW SOME TEXT INFRONT */}
			<div className='text-center mx-auto my-5'>
				<h1 className='center my-3'>Why Choose TourX??</h1>
				<p>
					We’re on a mission to help people discover the real value of travel —
					to inspire, to give more reasons, to make it easy — for you to go. Our
					company was founded back in 2005, and since then, we’ve imagined and
					created some of the most well-loved products for travelers all around
					the world. Today, TourX is used by millions of people every month —
					people who travel for adventure, for work, for family and for many
					other reasons. That’s why we work tirelessly to make your experience
					of planning & booking flights, hotels and trips as seamless as
					possible. TourX is more than just an app, a website or a company.
					TourX is an idea and belief that everyone has an innate desire and
					yearning to travel — to experience, to live and to grow. So ingrained
					is this idea of the human need to travel that we’ve woven this
					emotional and eternal question of “why we go?” into the name of our
					organisation — TourX.
				</p>
			</div>
			<Row>
				<Col>
					<div className='about-us border-start '>
						<h3 className='heading fw-bold my-3 px-2'>Our Mission</h3>
						<p className='px-3'>
							We firmly believe that by helping people travel more, explore the
							world and experience diversity, we create a meaningful
							socio-economic impact.
						</p>
						<blockquote className='fst-italic w-75 mx-auto '>
							Travel is fatal to prejudice, bigotry, and narrow-mindedness, and
							many of our people need it sorely on these accounts. Broad,
							wholesome, charitable views of men and things cannot be acquired
							by vegetating in one little corner of the earth all one’s
							lifetime.
						</blockquote>
					</div>
				</Col>
				<Col>
					<img src={img1} className='img-fluid  mx-4' alt='' srcset='' />
				</Col>
			</Row>

			{/* Wego’s Core Values

Embrace diversity
We are 25 nationalities (out of about 200 employees!)


Love travel and technology
We pride ourselves on being both explorers and geeks


Promote meritocracy
Advancement based on achievement and attitude not tenure or pedigree


Use global benchmarks
We want to be the world’s best at what we do, not just local champions */}
		</div>
	);
};

export default About;
