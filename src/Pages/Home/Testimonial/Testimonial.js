import React from 'react';
import { Card } from 'react-bootstrap';
import './Testimonial.css';
import img1 from '../../../Images/p1.jpg';
import img2 from '../../../Images/p2.jpg';
import img3 from '../../../Images/p3.jpg';

const Testimonial = () => {
	return (
		<div>
			<h1 className='heading text-center my-5 container'>
				What Our Traveller Say About Us
			</h1>
			<div className='d-flex justify-content-evenly text-center mb-5'>
				<Card style={{ width: '25rem' }} className='shadow'>
					<Card.Img
						variant='top'
						src={img1}
						className='testimonial-img w-50 '
					/>
					<Card.Body>
						<Card.Title>
							<h5>John Deo</h5>
							<p>
								<small>Traveller</small>
							</p>
						</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
				{/* ----------- */}
				<Card style={{ width: '25rem' }} className='shadow'>
					<Card.Img variant='top' src={img2} className='testimonial-img w-50' />
					<Card.Body>
						<Card.Title>
							<h5>John Deo</h5>
							<p>
								<small>Traveller</small>
							</p>
						</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>

				<Card style={{ width: '25rem' }} className='shadow'>
					<Card.Img className='testimonial-img w-50' variant='top' src={img3} />
					<Card.Body>
						<Card.Title>
							<h5>John Deo</h5>
							<p>
								<small>Traveller</small>
							</p>
						</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default Testimonial;
