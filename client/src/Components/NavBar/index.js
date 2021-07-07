import { React, useEffect } from "react";
import icon from "../../public/Assets/black_icon.ico";
import M from "materialize-css/dist/js/materialize.min.js";
import "./style.css";

const NavBar = () => {
	useEffect(() => {
		var elems = document.querySelectorAll(".sidenav");
		M.Sidenav.init(elems);
	});

	var anchorOne = "";
	var anchorOneText = "";
	var anchorTwo = "";
	var anchorTwoText = "";
	var anchorThree = "";
	var anchorThreeText = "";

	const pagination = () => {
		switch (window.location.pathname) {
			case "/aboutme":
				anchorOne = "/";
				anchorOneText = "Home";
				anchorTwo = "/galleries";
				anchorTwoText = "Galleries";
				anchorThree = "/contactme";
				anchorThreeText = "Contact Me";
				break;
			case "/galleries":
				anchorOne = "/";
				anchorOneText = "Home";
				anchorTwo = "/aboutme";
				anchorTwoText = "About Me";
				anchorThree = "/contactme";
				anchorThreeText = "Contact Me";
				break;
			case "/contactme":
				anchorOne = "/";
				anchorOneText = "Home";
				anchorTwo = "/aboutme";
				anchorTwoText = "About Me";
				anchorThree = "/galleries";
				anchorThreeText = "Galleries";
				break;
			case "/":
				anchorOne = "/aboutme";
				anchorOneText = "About Me";
				anchorTwo = "/galleries";
				anchorTwoText = "Galleries";
				anchorThree = "/contactme";
				anchorThreeText = "Contact Me";
				break;
			default:
				anchorOne = "/aboutme";
				anchorOneText = "About Me";
				anchorTwo = "/galleries";
				anchorTwoText = "Galleries";
				anchorThree = "/contactme";
				anchorThreeText = "Contact Me";
				break;
		}
	};

	pagination();

	return (
		<div className="navbar-fixed nav transparent">
			<nav className="transparent z-depth-0">
				<div className="nav-wrapper nav">
					<a className="brand-logo logo" href="/">
						<i class="material-icons"></i>
					</a>
					<a
						href="/"
						data-target="mobile-demo"
						className="sidenav-trigger sideLogo"
					>
						<i className="material-icons">menu</i>
					</a>
					<ul className="right hide-on-med-and-down">
						<li className="link blend">
							<a className="white-text blend" href="/aboutme">
								About Me
							</a>
						</li>
						<li className="link">
							<a className="white-text blend" href="/galleries">
								Galleries
							</a>
						</li>
						<li className="link">
							<a className="white-text blend" href="/contactme">
								Contact Me
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<ul className="sidenav" id="mobile-demo">
				<li className="">
					<a href={anchorOne}>{anchorOneText}</a>
				</li>
				<li className="">
					<a href={anchorTwo}>{anchorTwoText}</a>
				</li>
				<li className="">
					<a href={anchorThree}>{anchorThreeText}</a>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
