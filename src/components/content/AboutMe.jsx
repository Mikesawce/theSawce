import AboutMeHeader from './AboutMeComponents/AboutMeHeader';
import AboutMeContent from './AboutMeComponents/AboutMeContent';

const AboutMe = () => {
	return (
		<div id='AboutMeContainer' className='bg-zinc-100 shadow-2xl rounded'>
			<AboutMeHeader />
			<div className='border border-zinc-300'></div>
			<AboutMeContent />
		</div>
	);
};

export default AboutMe;
