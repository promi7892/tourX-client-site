import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Booking = () => {
	const { register, handleSubmit, reset } = useForm();
	const { serviceId } = useParams();
	const onSubmit = (data) => {
		console.log(data);

		axios
			.post(
				'https://bloodcurdling-scarecrow-07685.herokuapp.com/services',
				data,
			)
			.then((res) => {
				if (res.data.insertedId) {
					alert('Booking Added Sucessfully');
					reset();
				}
			});
	};

	return (
		<div className='add-service'>
			<Container>
				<Row className='mt-5'>
					<Col className='w-25 px-5 mt-4'>
						<h4 className='heading text-center my-3'>
							Book Your Destination Place Now <br />
						</h4>
						<p>{serviceId}</p>
					</Col>
					<Col>
						<h4 className='heading text-center my-3'>
							Add Your Booking Details
						</h4>

						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								{...register('name', { required: true, maxLength: 20 })}
								placeholder='Name'
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

							<input type='number' {...register('price')} placeholder='Price' />

							<input
								className='mt-2 py-2 bg-info text-white fw-bold f4 w-100'
								type='submit'
								value='Confrim Booking'
							/>
						</form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Booking;
