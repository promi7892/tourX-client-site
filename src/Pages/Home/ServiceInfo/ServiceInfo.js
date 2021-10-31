import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceInfo = (props) => {
	const { _id, name, img, price, days, packageType, detail, description } =
		props.service;

	return (
		<div className='col-lg-4 col-md-12 mx-auto container my-2 '>
			<Card style={{ width: '25rem' }} className='h-100 '>
				<Card.Img variant='top' src={img} className='h-100 w-100 p-3' />
				<Card.Body>
					<Card.Title className='text-center'>
						<h4 className='heading'>{name}</h4>
					</Card.Title>
					<Card.Text>
						<div className='d-flex justify-content-between mt-3 '>
							<p>{price}</p>
							<p>{days}</p>
						</div>
						<h5 className='text-start '>{packageType}</h5>
						<p>
							<small>{detail}</small>
						</p>
					</Card.Text>

					<Link
						to={`/booking/${description}
					 `}
					>
						<Button className='border-0 w-100 rounded px-4 py-2 btn btn-info text-white fw-bold'>
							Book Now
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ServiceInfo;
