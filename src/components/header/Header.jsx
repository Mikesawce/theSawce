
import NavCons from './langsNframes/navCons';

const Header = () => {

	return (
		<div className='bg-zinc-100 min-h-20 flex shadow-2xl rounded'>
			<a className='font-calligraffitti text-black text-8xl ml-10 select-none drop-shadow-md'>
				mikesawce
			</a>
			<div className='flex items-center mx-40'>
				<NavCons />
			</div>
			
		</div>
	);
};

export default Header;
