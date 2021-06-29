import React, { useEffect, useState, useRef } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './style.css';

// Photos
import logo from '../../public/Assets/black_logo.png';
import fire from '../../public/Assets/gallery/fire.png';
import stars from '../../public/Assets/gallery/stars.JPG';
import mountains from '../../public/Assets/gallery/mountians.jpg';
import smoke from '../../public/Assets/gallery/smoke.jpg';

const FrontPage = () => {
	useEffect(() => {
		var materialbox = document.querySelectorAll('.materialboxed');
		M.Materialbox.init(materialbox);
	});

	const fadeItem = useRef();

	const [popImg, setPopImg] = useState('materialboxed sqrImg');

	return (
		<main>
			<div className="relative">
				<section className="row">
					<h1 className="h1 fixed">
						Carlos <br></br> Perez <br></br> Photo<br></br>Graphy
					</h1>
					<div className="col s6 offset-s6 absolute imgCenter">
						<img class={popImg} src={fire} alt="fire"></img>
					</div>
				</section>
				<section className="row">
					<div className="col s6 offset-s6 absolute imgCenter">
						<img class={popImg} src={mountains} alt="fire"></img>
					</div>
				</section>
				<section className="row">
					<div className="col s6 offset-s6 absolute imgCenter">
						<img class={popImg} src={smoke} alt="fire"></img>
					</div>
				</section>
				<section className="row">
					<div className="col s6 offset-s6">
						<h1 ref={fadeItem} className="fadeIn fadeIn-head">
							<b>Thank you For visiting</b>
						</h1>
						<p ref={fadeItem} className="fadeIn fadeIn-body">
							Here you will find the culmination of my love for photography, for
							beauty, and for design, with my talent and passion as a developer.
						</p>
					</div>
				</section>
			</div>
		</main>
	);
};

export default FrontPage;
