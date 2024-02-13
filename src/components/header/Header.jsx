import Name from './Name';
import NavCons from './NavCons';
import ContactButton from './ContactButton';

const Header = () => {
	return (
		<div className='bg-zinc-100 min-h-20 flex shadow-2xl rounded justify-between'>
			<Name />
			<NavCons />
			<ContactButton />
		</div>
	);
};

export default Header;