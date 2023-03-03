import React from 'react';
import '../styles/Skills.scss';
import sql from '../images/sql.png';
import ts from '../images/ts.png';
import redux from '../images/redux.png';

const Skills = () => {
	return (
		<div className='wrapper'>
			<div id='skills' className='skills-section'>
				<h2 className='skills-section__title'>skills</h2>
				<div className='skills-section__icons'>
					<i className='fa-brands fa-html5'></i>
					<i className='fa-brands fa-css3-alt'></i>
					<i className='fa-brands fa-js'></i>
					<i className='fa-brands fa-react'></i>
					<i className='fa-brands fa-sass'></i>
					<i className='fa-brands fa-bootstrap'></i>
					<i className='fa-brands fa-gulp'></i>
					<i className='fa-brands fa-node-js'></i>
					<i className='fa-brands fa-git'></i>
					<img src={sql} alt='Ikona MySQL' />
				</div>
				<div className='skills-section__icons skills-section__icons--in-progress'>
					<p>in progress:</p>
					<img src={ts} alt='Ikona Typescript' />
					<img src={redux} alt='Ikona Redux' />
				</div>
			</div>
		</div>
	);
};
export default Skills;
