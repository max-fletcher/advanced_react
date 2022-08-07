import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('Error...');
	const [user, setUser] = useState('default user');

	// fetch API works in a weird way. Don't ask. Better to use axios...
	useEffect(() => {
		fetch(url)
			.then((response) => { 
				if (response.status >= 200 && response.status <= 299) {
					return response.json();
				}
				else {
					setIsLoading(false);
					setIsError(true);
					throw new Error(response.statusText);
				}
			})
			.then((some_user) => {
				const { login } = some_user;
				setUser(login);
				setIsError(false);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			})
	}, []);

	if (isLoading) {
		return (
			<div>
				<h1> Loading... </h1>
			</div>
		)
	} 
	if(isError){
		return (
			<div>
				<h1>{errorMessage}</h1>
			</div>
		)
	}
	return (
		<div>
			<h1>{user}</h1>
		</div>
	)
};

export default MultipleReturns;
