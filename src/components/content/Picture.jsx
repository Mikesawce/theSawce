import profilePic from '../../assets/images/profilePic.png';

const Picture = () => {
	return (
		<div
			id='pictureContainer'
			className='bg-black w-[250px] h-[250px] shadow-2xl rounded-full flex items-center justify-center tooltip'
			data-tip='Hi!'
		>
			<img
				src={profilePic}
				alt='Profile'
				className='mask mask-circle select-none w-[225px] h-[275px] object-cover rounded-full'
			/>
		</div>
	);
};

export default Picture;
