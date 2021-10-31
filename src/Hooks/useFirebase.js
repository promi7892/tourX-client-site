import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	// const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	// GOOGLE AUTHETICATION
	const signInWithGoogle = () => {
		setIsLoading(true);
		return (
			signInWithPopup(auth, googleProvider)
				// .then((result) => {
				// 	setUser(result.user);
				// })
				.finally(() => setIsLoading(false))
		);
	};

	const logout = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			console.log(user);
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribe();
	}, []);

	return {
		user,
		signInWithGoogle,
		logout,
		isLoading,
		setIsLoading,
	};
};

export default useFirebase;
