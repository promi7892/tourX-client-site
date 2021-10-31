import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About us/About';
import Contact from './Pages/ContactUs/Contact';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home';
import Service from './Pages/Home/Service/Service';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import ManageBooking from './Pages/ManageBooking/ManageBooking';

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<Router>
					<Header></Header>
					<Switch>
						<Route exact path='/'>
							<Home></Home>
						</Route>
						<Route path='/home'>
							<Home></Home>
						</Route>
						<PrivateRoute exact path='/booking/:serviceId'>
							<Booking></Booking>
						</PrivateRoute>
						<PrivateRoute exact path='/manage'>
							<ManageBooking></ManageBooking>
						</PrivateRoute>
						<Route path='/about'>
							<About></About>
						</Route>
						<Route path='/contact'>
							<Contact></Contact>
						</Route>

						<Route exact path='/login'>
							<Login></Login>
						</Route>

						<Route path='*'>
							<NotFound></NotFound>
						</Route>
					</Switch>
					<Footer></Footer>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
