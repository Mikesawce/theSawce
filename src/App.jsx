import './App.css';

// import background from './assets/images/background.jpg'

import Header from './components/header/Header';
import Picture from './components/content/Picture';
import Social from './components/content/Social';
import Projects from './components/content/Projects';
import AboutMe from './components/content/AboutMe';

function App() {
	return (
		<div
			id='yo'
			className='w-screen h-screen flex flex-col items-center justify-items-center justify-center p-25 select-none'
		>
			<div id='header-container' className='w-[90%]'>
				<Header />
			</div>

			<div id='content-container' className='flex w-[90%] h-[60%]'>
				<div id='content-left' className='flex flex-col w-2/5'>
					<div className='flex h-full mt-10'>
						<Picture />
						<Social />
					</div>
					<div className='flex mr-10 overflow-y-scroll'>
						<AboutMe />
					</div>
				</div>
				<div id='content-right' className='flex w-[100%] mt-10'>
					<Projects />
				</div>
			</div>
		</div>
	);
}

export default App;
