import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { NewsContextProvider } from './comps/NewsContext';
import Link from 'next/link';
import News from './comps/News';

export default function Home() {
	return (
		<>
			<NewsContextProvider>
				<News />
			</NewsContextProvider>
			<div>
				<Head>
					<title>Next | Home</title>
				</Head>
				<h1 className={styles.title}>Hello World</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
					impedit suscipit architecto, odio inventore nostrum non neque dicta.
					Quam magni accusantium culpa distinctio tempore iure accusamus,
					dolorem nobis odit.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
					impedit suscipit architecto, odio inventore nostrum non neque dicta.
					Quam magni accusantium culpa distinctio tempore iure accusamus,
					dolorem nobis odit.
				</p>
			</div>

			<Link href='https://find-git-user.vercel.app/'>
				<a className={styles.btn}>Dev Search</a>
			</Link>
		</>
	);
}
