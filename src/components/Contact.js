import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.scss';
const Contact = () => {
	return (
		<div className='wrapper'>
			<div id='contact' className='contact-section'>
				<h2 className='contact-section__title'>contact</h2>
				<div className='contact-section__info'>
					<p className='contact-section__info--name'>Dominika Marczyńska</p>
					<p>
						<i className='fa-solid fa-phone'></i> +48 608 361 678
					</p>
					<p>
						<i className='fa-solid fa-envelope'></i> dominikamar@gmail.com
					</p>
					<p>
						<Link
							to='https://www.linkedin.com/in/dominikamar/'
							target='_blank'
							rel='noopener'>
							<i className='fa-brands fa-linkedin'></i> LinkedIn
						</Link>
					</p>
					<p>
						<Link
							to='https://github.com/dominikamar'
							target='_blank'
							rel='noopener'>
							<i className='fa-brands fa-square-github'></i> GitHub
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Contact;
