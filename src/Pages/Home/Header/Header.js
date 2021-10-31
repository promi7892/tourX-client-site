import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png';
import './Header.css';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
	const { user, logout } = useAuth();

	return (
		<div>
			<Navbar bg='dark' variant='dark' expand='lg'>
				<Container>
					<Navbar.Brand href='#home'>
						<img className='logo' src={logo} alt='' srcset='' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							{user?.email && (
								<span className='text-white'>
									<small>Howdy,{user.displayName}</small>{' '}
								</span>
							)}
							&nbsp;
							<Link className='mx-2 navigation' to='/home' href='#home'>
								Home
							</Link>
							{/* <Link className='mx-2 navigation' to='/tour' href='#tour'>
								Tour Packages
							</Link> */}
							<Link className='mx-2 navigation' to='/manage' href='#manage'>
								My Booking
							</Link>
							<Link className='mx-2 navigation' to='/about' href='#link'>
								About Us
							</Link>
							<Link className='mx-2 navigation' to='/contact' href='#link'>
								Contact Us
							</Link>
							{user.email ? (
								<Button className='logout' variant='light' onClick={logout}>
									Log Out
								</Button>
							) : (
								<Link className='mx-2 navigation' to='/login'>
									Login
								</Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
