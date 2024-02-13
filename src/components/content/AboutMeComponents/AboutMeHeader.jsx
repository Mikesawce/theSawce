import BlogLink from './BlogLink';

const AboutMeHeader = () => {
	return (
		<div className='w-full px-4 py-2 font-titillium text-black flex items-end justify-between'>
			<h1 className='text-3xl font-bold'>About Me</h1>
			<BlogLink />
		</div>
	);
};

export default AboutMeHeader;
