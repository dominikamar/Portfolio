import React from 'react';
import '../styles/AboutMe.scss';
import img from '../images/vectorImg.png';

const AboutMeText = () => {
	return (
		<div className='about-me-section__storyline'>
			<img
				src={img}
				alt='Programmer sitting in front of the computer'
			/>
			<div className='about-me-section__text'>
				<p>
					My name is <span>Dominika Marczyńska.</span> I am a{' '}
					<span>front-end developer</span> with a big passion for learning new
					skills and technologies. I am an{' '}
					<span>ambitious, goal-oriented </span>person that loves new challenges
					and always tries to think outside the box. My main qualities are great
					<span>
						{' '}
						problem-solving skills, good work organisation, attention to
						details, ability to collaborate and work with a client.{' '}
					</span>
					All od these assets help me a lot during creating web applications,
					which is my biggest passion. My tech stack is: HTML5, CSS3,
					JavaScript, React.js, Sass, Bootstrap, Gulp, Git, Node.js and MySQL. I
					also have wide knowledge of SEO as well as basic UX and UI design
					standards.
				</p>
			</div>
		</div>
	);
};

const AboutMe = () => {
	return (
		<div className='wrapper'>
			<div id='aboutme' className='about-me-section'>
				<h2 className='about-me-section__title'>about me</h2>
				<AboutMeText />
			</div>
		</div>
	);
};
export default AboutMe;
