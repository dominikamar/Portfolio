import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/MobileNav.scss';

const NavLinks = (props) => {
	return (
		<div className='mobile-nav'>
			<ul className='mobile-nav__links'>
				<li onClick={props.closeNav} className='mobile-nav__link'>
					<Link to='#home'>home</Link>
				</li>
				<li className='mobile-nav__link' onClick={props.closeNav}>
					<Link to='#aboutme'>about me</Link>
				</li>
				<li className='mobile-nav__link' onClick={props.closeNav}>
					<Link to='#skills'>skills</Link>
				</li>
				<li className='mobile-nav__link' onClick={props.closeNav}>
					<Link to='#projects'>projects</Link>
				</li>
				<li className='mobile-nav__link' onClick={props.closeNav}>
					<Link to='#contact'>contact</Link>
				</li>
			</ul>
		</div>
	);
};

const MobileNav = () => {
	const [visibility, setVisibility] = useState(false);
	const handleClick = () => {
		setVisibility(() => !visibility);
	};
	const closeNav = () => {
		setVisibility(() => setVisibility(false));
	};
	return (
		<>
			<button className='mobile-nav__burger-btn' onClick={handleClick}>
				<i className='fa-solid fa-bars'></i>
			</button>
			{visibility && <NavLinks onClick={handleClick} closeNav={closeNav} />}
		</>
	);
};

export default MobileNav;
