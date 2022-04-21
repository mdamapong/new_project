import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import styles from '../styles/News.module.css';
import Link from 'next/link';
import {
	FacebookShareButton,
	FacebookIcon,
	PinterestShareButton,
	PinterestIcon,
	RedditShareButton,
	RedditIcon,
	WhatsappShareButton,
	WhatsappIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from 'next-share';

function News(props) {
	const { data } = useContext(NewsContext);
	console.log(data);

	return (
		<div>
			<h1 className={styles.head__text}>Top News</h1>
			<div className={styles.all__news}>
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
		<div className={styles.news}>
			<a href={data.url}>
				<h1 className={styles.news__title}>{data.title}</h1>
			</a>
			<p className={styles.news__desc}>{data.abstract}</p>
			<span className={styles.news__author}>{data.subsection}</span> <br />
			<span className={styles.news__published}>{data.published_date}</span>
			<br></br>
			<span className={styles.news__source}>{data.source}</span>
			<br></br>
			<a className={styles.btn} href={data.url}>
				Read more
			</a>
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
		<>
			<div>
				<h1>Share</h1>
				<FacebookShareButton url={'http://localhost:3000'}>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
				<PinterestShareButton url={'http://localhost:3000'}>
					<PinterestIcon size={32} round />
				</PinterestShareButton>
				<RedditShareButton url={'http://localhost:3000'}>
					<RedditIcon size={32} round />
				</RedditShareButton>
				<WhatsappShareButton url={'http://localhost:3000'}>
					<WhatsappIcon size={32} round />
				</WhatsappShareButton>
				<LinkedinShareButton url={'http://localhost:3000'}>
					<LinkedinIcon size={32} round />
				</LinkedinShareButton>
			</div>
			<NewsContextProvider>
				<News />
			</NewsContextProvider>
		</>
	);
}
