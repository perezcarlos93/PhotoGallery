import { React, useEffect } from 'react';
import logo from '../../public/Assets/black_logo.png';
import M from 'materialize-css/dist/js/materialize.min.js';
import './style.css';

const NavBar = () => {
	useEffect(() => {
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.sidenav');
			var instances = M.Sidenav.init(elems);
		});
	});

	return (
		<div>
			<nav>
				<div class="nav-wrapper">
					<a className="brand-logo logo" href="/">
						<img className="logoImg" src={logo} alt="Cp"></img>
					</a>
					<a href="/" data-target="mobile-demo" class="sidenav-trigger">
						<i class="material-icons">menu</i>
					</a>
					<ul class="right hide-on-med-and-down">
						<li className="link">
							<a className="black-text" href="/aboutme">
								About Me
							</a>
						</li>
						<li className="link">
							<a className="black-text" href="galleries">
								Galleries
							</a>
						</li>
						<li className="link">
							<a className="black-text" href="contactme">
								Contact Me
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<ul class="sidenav" id="mobile-demo">
				<li className="link">
					<a href="/aboutme">About Me</a>
				</li>
				<li className="link">
					<a href="galleries">Galleries</a>
				</li>
				<li className="link">
					<a href="contactme">Contact Me</a>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;

<div className="flex-column justify-space-around" id="navDiv">
	<nav className="customNav row fixed">
		<div className="col-4">
			<a className="logo" href="/">
				<img className="logoImg" src={logo} alt="Cp"></img>
			</a>
		</div>
		<ul className="nav justify-content-end col-8" id="bootstrapNav">
			<li className="nav-item link">
				<a className="nav-link active link" href="/#">
					About Me
				</a>
			</li>
			<li className="nav-item link">
				<a className="nav-link link" href="/#">
					Projects
				</a>
			</li>
			<li className="nav-item link">
				<a className="nav-link link" href="/#">
					Contact Me
				</a>
			</li>
		</ul>
	</nav>
</div>;
