import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Images/404.jpg';

const NotFound = () => {
	return (
		<div>
			<div className=' container fluid'>
				{/* <h1 className='text-dark mt-5 text-center'>Oh No! Page Not Found</h1> */}
				<img className='not-found mx-auto w-100' src={notfound} alt='' />
				<div className='justify-content-center'>
					<Link to='/'>
						<button className='btn btn-info mx-auto text-white  btn-lg '>
							Go back
						</button>{' '}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
