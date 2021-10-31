import axios from 'axios';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './service.css';
const Service = () => {
	const { register, handleSubmit } = useForm();
	// const onSubmit = (data) => console.log(data);

	const onSubmit = (data) => {
		console.log(data);
		axios
			.post(
				'https://bloodcurdling-scarecrow-07685.herokuapp.com/services',
				data,
			)
			.then((res) => {
				console.log(res);
			});
	};

	return (
		<div>
			{/* // add service form */}
			<Container>
				<Row>
					<Col>
						<h2>destination description</h2>
					</Col>
					<Col>
						<div className='add-service'>
							<h1 className='heading text-center my-3'>
								Add Your Booking Details
							</h1>

							<form onSubmit={handleSubmit(onSubmit)}>
								<input
									{...register('name', { required: true, maxLength: 20 })}
									placeholder='Your Name'
								/>
								<input
									{...register('destination', {
										required: true,
										maxLength: 20,
									})}
									placeholder='Destination place'
								/>
								<input
									type='number'
									{...register('person')}
									placeholder='Total Person '
								/>
								<textarea
									{...register('description')}
									placeholder='Description'
								/>
								{/* <input
									className='mt-4 py-2 bg-info text-white fw-bold f4'
									type='submit'
									value='Book Now'
								/> */}
								<Button className='mt-2 py-2 bg-info text-white fw-bold f4 w-100'>
									Book Now
								</Button>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Service;
