import { React, useEffect } from 'react';
import logo from '../../public/Assets/black_logo.png';
import M from 'materialize-css/dist/js/materialize.min.js';
import './style.css';

const NavBar = () => {
	useEffect(() => {
		M.AutoInit();
		// document.addEventListener('DOMContentLoaded', function () {
		// 	var elems = document.querySelectorAll('.sidenav');
		// 	var instances = M.Sidenav.init(elems);
		// });
	});

	var anchorOne = '';
	var anchorOneText = '';
	var anchorTwo = '';
	var anchorTwoText = '';
	var anchorThree = '';
	var anchorThreeText = '';

	const location = window.location.pathname;

	console.log(location);

	const pagination = () => {
		switch (window.location.pathname) {
			case '/aboutme':
				anchorOne = '/';
				anchorOneText = 'Home';
				anchorTwo = '/galleries';
				anchorTwoText = 'Galleries';
				anchorThree = '/contactme';
				anchorThreeText = 'Contact Me';
				break;
			case '/galleries':
				anchorOne = '/';
				anchorOneText = 'Home';
				anchorTwo = '/aboutme';
				anchorTwoText = 'About Me';
				anchorThree = '/contactme';
				anchorThreeText = 'Contact Me';
				break;
			case '/contactme':
				anchorOne = '/';
				anchorOneText = 'Home';
				anchorTwo = '/aboutme';
				anchorTwoText = 'About Me';
				anchorThree = '/galleries';
				anchorThreeText = 'Galleries';
				break;
			case '/':
				anchorOne = '/aboutme';
				anchorOneText = 'About Me';
				anchorTwo = '/galleries';
				anchorTwoText = 'Galleries';
				anchorThree = '/contactme';
				anchorThreeText = 'Contact Me';
				break;
			default:
				anchorOne = '/aboutme';
				anchorOneText = 'About Me';
				anchorTwo = '/galleries';
				anchorTwoText = 'Galleries';
				anchorThree = '/contactme';
				anchorThreeText = 'Contact Me';
				break;
		}
	};

	pagination();

	return (
		<div>
			<nav>
				<div class="nav-wrapper white">
					<a className="brand-logo logo" href="/">
						<img
							className="responsive-img logoImg absolute"
							src={logo}
							alt="Cp"
						></img>
					</a>
					<a href="/" data-target="mobile-demo" class="sidenav-trigger">
						<i class="material-icons black-text">menu</i>
					</a>
					<ul class="right hide-on-med-and-down">
						<li className="link">
							<a className="black-text" href="/aboutme">
								About Me
							</a>
						</li>
						<li className="link">
							<a className="black-text" href="/galleries">
								Galleries
							</a>
						</li>
						<li className="link">
							<a className="black-text" href="/contactme">
								Contact Me
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<ul class="sidenav" id="mobile-demo">
				<li className="link">
					<a href={anchorOne}>{anchorOneText}</a>
				</li>
				<li className="link">
					<a href={anchorTwo}>{anchorTwoText}</a>
				</li>
				<li className="link">
					<a href={anchorThree}>{anchorThreeText}</a>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
