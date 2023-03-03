import './styles/App.scss';
import DesktopNav from './components/DesktopNav';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Contact from './components/Contact';

function App() {
	const [pickNav, setPickNav] = useState(window.innerWidth);
	const handleNav = () => {
		setPickNav(() => window.innerWidth);
	};
	window.addEventListener('resize', handleNav);
	return (
		<Router>
			<nav>{pickNav <= '768' ? <MobileNav /> : <DesktopNav />}</nav>
			<header>{<Header />}</header>
			<main>
				<section>{<AboutMe />}</section>
				<section>{<Skills />}</section>
				<section>{<Projects />}</section>
				<section>{<Contact />}</section>
			</main>
			<footer>{<Footer />}</footer>
		</Router>
	);
}

export default App;
