import React from 'react';
import './Search.css';
import {
	FaCalendarCheck,
	FaSearch,
	FaMapMarkedAlt,
	FaUserAlt,
} from 'react-icons/fa';

const Search = () => {
	return (
		<div>
			<section id='search'>
				<div className='container'>
					<div className='search-option'>
						<div className='item d-flex'>
							<div>
								<h5 className='color-primary'>Where</h5>
								<input
									type='text'
									className='form-control'
									placeholder='Your Destination'
								/>
							</div>
							<FaMapMarkedAlt className='fs-1 fw-light opacity-50' />
							{/* <i className='fas fa-map-marker-alt'></i> */}
						</div>

						<div className='item d-flex'>
							<div>
								<h5>Date</h5>
								<input
									type='date'
									className='form-control'
									placeholder='Select Date'
								/>
							</div>
							<FaCalendarCheck className='fs-1 fw-light opacity-50' />
							{/* <i className='fas fa-calendar-day'></i> */}
						</div>

						<div className='item d-flex'>
							<div>
								<h5>Guest</h5>
								<input
									type='text'
									className='form-control'
									placeholder='Total Person'
								/>
							</div>
							<FaUserAlt className='fs-1 fw-light opacity-50' />
							{/* <i className='fas fa-users'></i> */}
						</div>

						<div className='item'>
							<button className='mx-2 btn btn-light border'>
								Check Availability
							</button>{' '}
							<FaSearch className='fs-1 fw-light opacity-50 ' />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Search;
