import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const AllService = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch('https://bloodcurdling-scarecrow-07685.herokuapp.com/products')
			.then((response) => response.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<div>
			<h1 className='heading text-center'>
				Select Your Best Package For Your Travel
			</h1>
			<div className='row my-5 container mx-auto'>
				{services.map((service) => (
					<ServiceInfo key={service.id} service={service}></ServiceInfo>
				))}
			</div>
		</div>
	);
};

export default AllService;
