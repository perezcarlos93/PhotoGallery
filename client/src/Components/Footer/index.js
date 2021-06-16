import React from 'react';
import './style.css';

const Footer = () => {
	return (
		<footer class="page-footer white">
			<div class="container">
				<div class="row footerLinks">
					<div class="col l6 s12">
						<h5 class="black-text">
							<b>For More Information...</b>
						</h5>
						<p class="grey-text text-darken-4">
							...you can visit any of my links. Thank you for visiting my
							gallery. If you like what you saw please feel free to contact me
							for business inquires
						</p>
					</div>
					<div class="col l4 offset-l1 s11 ">
						<h5 class="black-text">
							<b>Links</b>
						</h5>
						<ul>
							<li>
								<a
									class="grey-text text-darken-3"
									href="https://github.com/perezcarlos93"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									class="grey-text text-darken-3"
									href="https://www.linkedin.com/in/carlos-perez-a21145178/"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									class="grey-text text-darken-3"
									href="https://cperez-portfolio.herokuapp.com/"
								>
									Portfolio
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer-copyright grey darken-4">
				<div class="container">
					© 2014 Copyright Text
					<a class="grey-text text-lighten-4 right" href="#!">
						More Links
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
