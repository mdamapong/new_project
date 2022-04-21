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
	const [like, setLike] = useState(0),
		[isLike, setIsLike] = useState(false),
		onLikeButtonClick = () => {
			setLike(like + (isLike ? -1 : 1));
			setIsLike(!isLike);
		};
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
			<br />
			<>
				<button
					className={'like-button ' + (isLike ? 'liked' : '')}
					onClick={onLikeButtonClick}>
					{'Like'} | {like}
				</button>
				<style>{`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
        }
        .liked {
            font-weight: bold;
            color: #1565c0;
          }
      `}</style>
			</>
		</div>
	);
}

const NewsContext = createContext();

const NewsContextProvider = (props) => {
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
				<FacebookShareButton
					url={'https://new-project-bnmsze951-mdamapong.vercel.app/'}>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
				<PinterestShareButton
					url={'https://new-project-bnmsze951-mdamapong.vercel.app/'}>
					<PinterestIcon size={32} round />
				</PinterestShareButton>
				<RedditShareButton
					url={'https://new-project-bnmsze951-mdamapong.vercel.app/'}>
					<RedditIcon size={32} round />
				</RedditShareButton>
				<WhatsappShareButton
					url={'https://new-project-bnmsze951-mdamapong.vercel.app/'}>
					<WhatsappIcon size={32} round />
				</WhatsappShareButton>
				<LinkedinShareButton
					url={'https://new-project-bnmsze951-mdamapong.vercel.app/'}>
					<LinkedinIcon size={32} round />
				</LinkedinShareButton>
			</div>
			<NewsContextProvider>
				<News />
			</NewsContextProvider>
		</>
	);
}
