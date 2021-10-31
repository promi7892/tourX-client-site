import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = (props) => {
	const { children, ...rest } = props;
	const { user, isLoading } = useAuth();

	if (isLoading) {
		<div class='spinner-border text-info' role='status'>
			<span class='sr-only'>Loading...</span>
		</div>;
	}

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					></Redirect>
				)
			}
		></Route>
	);
};

export default PrivateRoute;
