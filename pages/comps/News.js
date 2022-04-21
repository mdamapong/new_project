import React, { useContext } from 'react';
import NewsArticle from './NewsArticles';
import { NewsContext } from './NewsContext';

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

export default News;
