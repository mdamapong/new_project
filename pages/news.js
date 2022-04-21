import React from 'react';
import News from './comps/News';
import { NewsContextProvider } from './comps/NewsContext';

export default function news() {
	return (
		<NewsContextProvider>
			<News />
		</NewsContextProvider>
	);
}
