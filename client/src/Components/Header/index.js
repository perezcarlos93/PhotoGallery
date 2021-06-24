import React, { useEffect, useState } from 'react';
import './style.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import fire from '../../public/Assets/gallery/fire.png';
import stars from '../../public/Assets/gallery/stars.JPG';
import mountains from '../../public/Assets/gallery/mountians.jpg';
import smoke from '../../public/Assets/gallery/smoke.jpg';

const Header = () => {
	const options = {
		inDuration: 1000,
	};

	useEffect(() => {
		var materialbox = document.querySelectorAll('.materialboxed');
		M.Materialbox.init(materialbox, options);
	});

	const [popImg, setPopImg] = useState('materialboxed sqrImg');

	return (
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
					<h1>Thank you For visiting</h1>
				</div>
			</section>
		</div>
	);
};

export default Header;
