import React, { useState } from 'react';

const Header = () => {
	const [isToggled, setIsToggled] = useState(false);

	const toggle = () => setIsToggled(!isToggled);

	return (
		<div className=' bg-zinc-100 min-h-20 flex shadow-2xl rounded'>
			<div className='flex-1'>
				<a className='font-calligraffitti text-black text-8xl ml-10 select-none'>
					mikesawce
				</a>
			</div>
		</div>
	);
};

export default Header;
