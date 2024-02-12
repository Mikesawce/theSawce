import './App.css';

// import background from './assets/images/background.jpg'

import Header from './components/header/Header';
import Picture from './components/content/Picture';
import ContactMe from './components/content/ContactMe';
import Projects from './components/content/Projects';
import Blog from './components/content/Blog';

function App() {
	return (
		<div
			id='yo'
			className='w-screen h-screen flex flex-col items-center justify-items-center justify-center p-25'
		>
			<div id='header-container' className='w-[90%]'>
				<Header />
			</div>

			<div id='content-container' className='flex w-[90%] h-[60%]'>
				<div className='flex flex-col'>
					<div className='flex h-full mt-10'>
						<Picture />
						<ContactMe />
					</div>
					<div className='flex h-full mr-10'>
						<Blog />
					</div>
				</div>
				<div className='flex w-[100%] mt-10'>
					<Projects />
				</div>
			</div>
		</div>
	);
}

export default App;
