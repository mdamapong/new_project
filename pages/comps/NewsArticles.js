import React from 'react';

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

export default NewsArticle;
