import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<div>
				<Head>
					<title>Next | Home</title>
				</Head>
				<h1 className={styles.title}>
					Welcome to NewYork Times News collection page
				</h1>
				<p className={styles.text}></p>
				<p className={styles.text}></p>
			</div>

			<Link href='/news'>
				<a className={styles.btn}>Go to news</a>
			</Link>
		</>
	);
}
