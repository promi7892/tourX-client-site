import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import useAuth from '../../Hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
	const { signInWithGoogle, setIsLoading } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_url = location.state?.from || '/home';

	const handleGoogleLogin = () => {
		signInWithGoogle()
			.then((result) => {
				setIsLoading(true);
				history.push(redirect_url);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div>
			<div className='heading text-center mt-5'>
				<h1 className='fw-bold'>Login</h1>
				<p className=''>Please login to proceed</p>
			</div>
			<div className='container w-50'>
				<Form.Group className='mb-3' controlId='formGroupEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formGroupPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group>
				<Form.Text id='passwordHelpBlock' muted>
					Your password must be 8-20 characters long, contain letters and
					numbers, and must not contain spaces, special characters, or emoji.
				</Form.Text>
				<Form.Check
					className='mt-3'
					type='checkbox'
					id='customControlAutosizing'
					label='Remember my preference'
				/>
				<Button
					className='mt-3 text-white mx-auto '
					variant='info'
					type='submit'
				>
					Submit
				</Button>
				<br />
				<hr className=' mx-auto' /> <br />
				<button
					onClick={handleGoogleLogin}
					className='login bg-light shadow-sm border text-center w-100'
				>
					<FcGoogle className='fs-3' /> Log In using Google
				</button>
			</div>
		</div>
	);
};

export default Login;
