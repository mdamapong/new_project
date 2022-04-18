import styles from '../../styles/List.module.css';
import Link from 'next/link';
import React, { useState } from 'react';

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		props: { list: data },
	};
};

const Lists = ({ list }) => {
	return (
		<>
			<div className='App'>
				<div style={{ margin: '0 auto', marginTop: '10%' }}>
					<label>Search:</label>
					<input type='text' onChange={(event) => handleSearch(event)} />
				</div>
			</div>
			<h1>All lists</h1>
			{list.map((list) => (
				<Link href={'/list/' + list.id} key={list.id}>
					<a className={styles.single}>
						<h3>{list.name}</h3>
					</a>
				</Link>
			))}
		</>
	);
};

export default Lists;
