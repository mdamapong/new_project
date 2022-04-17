import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
	return (
		<nav>
			<div className='logo'>
				<Image src='/Nextjs-logos_black.png' width={128} height={80} />
			</div>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/about'>
				<a>About</a>
			</Link>
			<Link href='/list'>
				<a>My Listing</a>
			</Link>
		</nav>
	);
};

export default Navbar;
