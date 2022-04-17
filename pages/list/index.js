export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		props: { list: data },
	};
};

const List = ({ list }) => {
	return (
		<>
			<h1>All lists</h1>
			{list.map((list) => (
				<div key={list.id}>
					<a>
						<h3>{list.name}</h3>
					</a>
				</div>
			))}
		</>
	);
};

export default List;
