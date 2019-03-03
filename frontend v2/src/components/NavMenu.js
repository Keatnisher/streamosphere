import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li> <button> New </button></li>
					<li> <button> Upload </button>/li>
					<li> <button> Download </button></li>
				</ul>
			</nav>
		);
	}
}