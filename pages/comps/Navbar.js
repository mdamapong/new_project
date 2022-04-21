import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
	return (
		<nav>
			<div className='logo'>
				<Image
					src='/Nextjs-logos_black.png'
					alt='Log'
					width={128}
					height={80}
				/>
			</div>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/news'>
				<a>News</a>
			</Link>
			<Link href='/about'>
				<a>About</a>
			</Link>
			<Link href='/list'>
				<a>My Listing</a>
			</Link>
			<Link href='/comment'>
				<a>Comment</a>
			</Link>
		</nav>
	);
};

export default Navbar;
