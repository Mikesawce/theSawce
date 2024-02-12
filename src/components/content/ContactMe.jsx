import githubIcon from '../../assets/svgs/githubIcon.svg';
import linkedinIcon from '../../assets/svgs/linkedinIcon.svg';
import twitterIcon from '../../assets/svgs/twitterIcon.svg';

const ContactMe = () => {
	return (
		<div
			id='contactContainer'
			className='w-[275px] h-[275px] rounded mx-10 flex flex-col gap-5 p-10'
		>
			<a href='https://www.linkedin.com/in/michael-t-mote/' className='flex items-end font-titillium text-xl text-black'>
				<img src={linkedinIcon} alt='linkedin' className='w-10 mr-5' /> Michael Mote
			</a>

			<a href='https://github.com/Mikesawce' className='flex items-end font-titillium text-xl text-black'>
				<img src={githubIcon} alt='github' className='w-10 mr-5' /> Mikesawce
			</a>

			<a href='https://twitter.com/Mikesawce73' className='flex items-end font-titillium text-xl text-black'>
				<img src={twitterIcon} alt='twitter' className='w-10 mr-5' /> @Mikesawce73
			</a>
		</div> 
	);
};

export default ContactMe;
