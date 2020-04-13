import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<header className="head">
			<h1 id="title">Dream's of Ayame</h1>
			<h1 id="subtitle"> Translation </h1>
			<nav className="navigation">
				<Link to="/">Home</Link>
			</nav>
		</header>
	);
}

export default Navbar;
