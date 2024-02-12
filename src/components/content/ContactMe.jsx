import githubIcon from '../../assets/svgs/githubIcon.svg';
import linkedinIcon from '../../assets/svgs/linkedinIcon.svg';
import twitterIcon from '../../assets/svgs/twitterIcon.svg';


const ContactMe = () => {
	return (
		<div
			id='contactContainer'
			className='w-[300px] h-[300px] rounded mx-10 flex flex-col items-center justify-between'
		>
			<div id="linkedin"><img src={linkedinIcon} alt="linkedin" /></div>
			<div id="github"><img src={githubIcon} alt="github" /></div>
			<div id="twitter"><img src={twitterIcon} alt="twitter" /></div>
			<div id="email"></div>
		</div>
	);
};

export default ContactMe;
