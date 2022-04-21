import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
	const [data, setData] = useState();
	const apiKey = 'EtGJB6q2wPSgGtt6fBC1yf7RUfjz6kd9';

	useEffect(() => {
		axios
			.get(
				`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`
			)
			.then((response) => setData(response.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<NewsContext.Provider value={{ data }}>
			{props.children}
		</NewsContext.Provider>
	);
};

export default () => {
	return 'Show page working ! ';
};
