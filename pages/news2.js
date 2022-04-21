import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';

function News(props) {
	const { data } = useContext(NewsContext);
	console.log(data);

	return (
		<div>
			<h1 className='head__text'>News App 👋</h1>
			<div className='all__news'>
				{data
					? data.results.map((news) => (
							<NewsArticle data={news} key={news.url} />
					  ))
					: 'Loading'}
			</div>
		</div>
	);
}

function NewsArticle({ data }) {
	return (
		<div className='news'>
			<h1 className='news__title'>{data.title}</h1>
			<p className='news__desc'>{data.abstract}</p>
			<span className='news__author'>{data.subsection}</span> <br />
			<span className='news__published'>{data.published_date}</span>
			<br></br>
			<span className='news__source'>{data.source}</span>
		</div>
	);
}

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

export default function news() {
	return (
		<NewsContextProvider>
			<News />
		</NewsContextProvider>
	);
}
