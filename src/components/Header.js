import React, { useState } from 'react';
import '../styles/Header.scss';
import { HashLink as Link } from 'react-router-hash-link';
let root = document.documentElement;

const ColourModal = () => {
	return (
		<div className='colour__modal'>
			<p>Choose your favourite colour scheme!</p>
		</div>
	);
};

const ColourCircles = () => {
	const [visibility, setVisibility] = useState(false);
	const handleClick = () => {
		setVisibility(() => !visibility);
	};

	const changeToOrange = () => {
		root.style.setProperty('--main-color', 'rgb(251, 101, 66)');
		root.style.setProperty('--main-color-light', 'rgba(251, 100, 66, 0.09)');
		root.style.setProperty('--main-color-hover', 'rgb(176, 74, 51)');
		root.style.setProperty('--header-color', 'rgb(74, 74, 158)');
	};
	const changeToBlue = () => {
		root.style.setProperty('--main-color', 'rgb(4, 92, 174)');
		root.style.setProperty('--main-color-light', 'rgba(4, 92, 174, 0.205)');
		root.style.setProperty('--main-color-hover', 'rgb(4, 60, 113)');
		root.style.setProperty('--header-color', 'rgb(4, 92, 174)');
	};
	const changeToPurple = () => {
		root.style.setProperty('--main-color', 'rgb(104, 104, 172)');
		root.style.setProperty('--main-color-light', 'rgba(104, 104, 172, 0.150)');
		root.style.setProperty('--main-color-hover', 'rgb(80, 80, 156)');
		root.style.setProperty('--header-color', 'rgb(74, 74, 158)');
	};

	return (
		<div className='colour__circles'>
			<div
				onClick={changeToOrange}
				className='colour__circle colour__circle--orange'></div>
			<div
				onClick={changeToBlue}
				className='colour__circle colour__circle--blue'></div>
			<div
				onClick={changeToPurple}
				className='colour__circle colour__circle--purple'></div>
			<button onClick={handleClick} className='question-mark'>
				<i className='fa-regular fa-question' />
			</button>
			{visibility && <ColourModal />}
		</div>
	);
};

const Arrow = () => {
	return (
		<Link className='hello-section__arrow' to='#aboutme'>
			<i className='fas fa-chevron-down'></i>
		</Link>
	);
};

const MainGraphic = () => {
	return (
		<>
			<h2 className='hello-section__header'>Hi!</h2>
			<p className='hello-section__description'>
				Welcome to my website - scroll down to learn more about me!
			</p>
			<button className='hello-section__button'>
				<Link to='#aboutme'>Find out more!</Link>
			</button>
		</>
	);
};
const Header = () => {
	return (
		<div id='home' className='hello-section'>
			<MainGraphic />
			<ColourCircles />
			<Arrow />
		</div>
	);
};
export default Header;
