import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.scss';
import ost from '../images/ost-bg.png';
import intermed from '../images/intermed-bg.png';
import worldmap from '../images/worldmap-bg.png';
import cookbook from '../images/cookbook-bg.png';
import uroki from '../images/uroki-bg.png';

const UrokiProject = () => {
	return (
		<div className='projects-section__box projects-section__box--right'>
			<img src={uroki} alt='Uroki Studio website' />
			<div className='projects-section__text'>
				<h3>Uroki Studio website</h3>
				<p>
					Uroki Studio is an interior design studio based in Warsaw. It was set
					up in the end of 2022 by 4 architects, who were very focused on
					marketing and promotion. They needed a website which will attract new
					customers and introduce them to the type of work that the studio does.
					Mostly, they wanted to present their portfolio and their offer, so
					that potential clients are more likely to contact them due to the new
					project. Website includes a contact form which is linked to the main
					mail address of Uroki Studio.
				</p>
				<p className='projects-section__text projects-section__text--technologies'>
					used technologies:
					<span>
						<i className='fa-brands fa-react'></i>
						<i className='fa-brands fa-css3-alt'></i>
						<i className='fa-brands fa-sass'></i>
					</span>
				</p>
				<Link to='https://uroki-studio.pl/#/' target='_blank' rel='noopener'>
					<button>Go to website</button>
				</Link>
			</div>
		</div>
	);
};
const OSTProject = () => {
	return (
		<div className='projects-section__box'>
			<img src={ost} alt='OST website' />
			<div className='projects-section__text'>
				<h3>OST website</h3>
				<p>
					OST is a tennis association from Ostroleka, Poland. It was originally
					founded in 2007 and to this day it attracts a lot of local tennis
					players representing different skill levels. This website is a project
					we have been working on since they wanted their website to be more
					readable and intuitive. It includes a few essential functionalities
					like trainers descriptions and pricing offers.
				</p>
				<p className='projects-section__text projects-section__text--technologies'>
					used technologies:
					<span>
						<i className='fa-brands fa-react'></i>
						<i className='fa-brands fa-css3-alt'></i>
						<i className='fa-brands fa-sass'></i>
						<i className='fa-brands fa-bootstrap'></i>
					</span>
				</p>
				<Link to='https://ost-ostroleka.pl/' target='_blank' rel='noopener'>
					<button>Go to website</button>
				</Link>
			</div>
		</div>
	);
};
const IntermedProject = () => {
	return (
		<div className='projects-section__box projects-section__box--right'>
			<img src={intermed} alt='Intermed website' />
			<div className='projects-section__text'>
				<h3>Intermed Medical Center website</h3>
				<p>
					Intermed Medical Center is a private medical center in Lodz, where you
					can visit doctors with different specializations. The main goal of the
					website was to attract new patients and expand the brand. The owner
					wanted to make it more clear, since the previous website caused a lot
					of trouble especially for the elderly. It features all the most
					important information about the center itself and doctors that are
					working there.
				</p>
				<p className='projects-section__text projects-section__text--technologies'>
					used technologies:
					<span>
						<i className='fa-brands fa-react'></i>
						<i className='fa-brands fa-css3-alt'></i>
						<i className='fa-brands fa-sass'></i>
					</span>
				</p>
				<Link to='https://cm-intermed.pl/' target='_blank' rel='noopener'>
					<button>Go to website</button>
				</Link>
			</div>
		</div>
	);
};
const WorldmapProject = () => {
	return (
		<div className='projects-section__box'>
			<img src={worldmap} alt='Worldmap website' />
			<div className='projects-section__text'>
				<h3>Worldmap</h3>
				<p>
					WorldMap is a website which allows you to keep track of all the
					countries you have ever visited. Have you ever been wondering what
					percentage of each continent you have already seen? Or maybe you have
					been missing a platform where you can save all of your future travel
					goals? This website is the answer to all of the above. You can
					gradually check the visited countries from your wishlist and they will
					automatically be added to the overall percentage value.
				</p>
				<p className='projects-section__text projects-section__text--technologies'>
					used technologies:
					<span>
						<i className='fa-brands fa-html5'></i>
						<i className='fa-brands fa-css3-alt'></i>
						<i className='fa-brands fa-js'></i>
						<i className='fa-brands fa-sass'></i>
						<i className='fa-brands fa-gulp'></i>
						<i className='fa-brands fa-node-js'></i>
					</span>
				</p>
				<Link
					to='https://dominikamar.github.io/WorldMap/'
					target='_blank'
					rel='noopener'>
					<button>Go to website</button>
				</Link>
			</div>
		</div>
	);
};
const CookbookProject = () => {
	return (
		<div className='projects-section__box projects-section__box--right'>
			<img src={cookbook} alt='MyCookbook website' />
			<div className='projects-section__text'>
				<h3>My CookBook</h3>
				<p>
					My CookBook is a website application designed to save recipes whether
					you have created them yourself or just copied them from a website or a
					magazine. We all remember notebooks that belonged to our grandmothers,
					where they used to keep all of their secret recipes that they
					collected over the years. I decided to create a website which allows
					you to do the same thing, in a digital, more up-to-date way. Each
					recipe can be rated, so that you know which of them still need some
					improvements. What's more, you can easily find your favourite recipe
					using a search bar.
				</p>
				<p className='projects-section__text projects-section__text--technologies'>
					used technologies:
					<span>
						<i className='fa-brands fa-html5'></i>
						<i className='fa-brands fa-css3-alt'></i>
						<i className='fa-brands fa-js'></i>
						<i className='fa-brands fa-sass'></i>
						<i className='fa-brands fa-gulp'></i>
						<i className='fa-brands fa-node-js'></i>
					</span>
				</p>
				<Link
					to='https://dominikamar.github.io/MyCookBook/'
					target='_blank'
					rel='noopener'>
					<button>Go to website</button>
				</Link>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<div className='wrapper'>
			<div id='projects' className='projects-section'>
				<h2 className='projects-section__title'>commerical projects</h2>
				<div className='projects-section__boxes'>
					<UrokiProject />
					<OSTProject />
					<IntermedProject />
				</div>
				<h2 className='projects-section__title'>non-commercial projects</h2>
				<div className='projects-section__boxes'>
					<WorldmapProject />
					<CookbookProject />
				</div>
			</div>
		</div>
	);
};
export default Projects;
