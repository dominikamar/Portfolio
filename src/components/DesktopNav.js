import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/DesktopNav.scss';
import Scrollspy from 'react-scrollspy';

const DesktopNav = () => {
	return (
		<div className='wrapper'>
			<div className='desktop-nav'>
				<p className='desktop-nav__logo'>D.M.</p>
				<ul className='desktop-nav__links'>
					<Scrollspy
						items={['home', 'aboutme', 'skills', 'projects', 'contact']}
						currentClassName='is-current'>
						<li className='desktop-nav__link'>
							<Link data-to-scrollspy-id='home' to='#home'>
								home
							</Link>
						</li>
						<li className='desktop-nav__link'>
							<Link data-to-scrollspy-id='aboutme' to='#aboutme'>
								about me
							</Link>
						</li>
						<li className='desktop-nav__link'>
							<Link data-to-scrollspy-id='skills' to='#skills'>
								skills
							</Link>
						</li>
						<li className='desktop-nav__link'>
							<Link data-to-scrollspy-id='projects' to='#projects'>
								projects
							</Link>
						</li>
						<li className='desktop-nav__link'>
							<Link data-to-scrollspy-id='contact' to='#contact'>
								contact
							</Link>
						</li>
					</Scrollspy>
				</ul>
			</div>
		</div>
	);
};
export default DesktopNav;
