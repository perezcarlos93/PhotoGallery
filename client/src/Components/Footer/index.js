import React from "react";
import "./style.css";

const Footer = () => {
	return (
		<footer className="page-footer white">
			<div className="container">
				<div className="row footerLinks">
					<div className="col l6 s12">
						<h5 className="black-text">
							<b>For More Information...</b>
						</h5>
						<p className="grey-text text-darken-4">
							...you can visit any of my links. Thank you for visiting my
							gallery. If you like what you saw please feel free to contact me
							for business inquires
						</p>
					</div>
					<div className="col l4 offset-l1 s11 ">
						<h5 className="black-text">
							<b>Links</b>
						</h5>
						<ul>
							<li>
								<a
									className="grey-text text-darken-3"
									href="https://github.com/perezcarlos93"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									className="grey-text text-darken-3"
									href="https://www.linkedin.com/in/carlos-perez-a21145178/"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									className="grey-text text-darken-3"
									href="https://cperez-portfolio.herokuapp.com/"
								>
									Portfolio
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-copyright grey darken-4">
				<div className="container">
					© 2014 Copyright Text
					<a className="grey-text text-lighten-4 right" href="#!">
						More Links
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
