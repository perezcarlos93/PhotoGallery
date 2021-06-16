import React, { useEffect, useState } from 'react';
import './style.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import fire from '../../public/Assets/gallery/fire.png';

const Header = () => {
	const options = {
		inDuration: 1000,
		onOpenEnd: () => {
			setPopImg('materialboxed sqrImg');
		},
		onCloseEnd: () => {
			setPopImg('materialboxed origImg');
		},
	};
	useEffect(() => {
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.materialboxed');
			var instance = M.Materialbox.init(elems, options);
		});
	});

	const [popImg, setPopImg] = useState('materialboxed sqrImg');

	return (
		<div className="relative">
			<div className="header-black">
				<div className="row">
					<h1 className="h1">
						Carlos <br></br> Perez <br></br> Photo<br></br>Graphy
					</h1>
					<div className="col s6 offset-s6 absolute imgCenter">
						<img class={popImg} src={fire} alt="fire"></img>
					</div>
				</div>
			</div>
			<div className="header-white row">
				<div className="col s6 offset-s6 absolute imgCenter">
					<img class={popImg} src={fire} alt="fire"></img>
				</div>
			</div>
			<div className="header-black row">
				<div className="col s6 offset-s6 absolute imgCenter">
					<img class={popImg} src={fire} alt="fire"></img>
				</div>
			</div>
			<div className="header-white row">
				<div className="col s6 offset-s6">
					<h1>Thank you For visiting</h1>
				</div>
			</div>
		</div>
	);
};

export default Header;
