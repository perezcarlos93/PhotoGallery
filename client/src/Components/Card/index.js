import React, { useEffect } from "react";
// import M from 'materialize-css';

const Card = () => {
	useEffect(() => {});

	return (
		<div className="row">
			<div className="col s12 m7">
				<div className="card">
					<div className="card-image">
						<img
							src="https://s.hdnux.com/photos/01/11/47/50/19298838/3/rawImage.jpg"
							alt="n/a"
						></img>
						<span className="card-title">Card Title</span>
					</div>
					<div className="card-content">
						<p>
							I am a very simple card. I am good at containing small bits of
							information. I am convenient because I require little markup to
							use effectively.
						</p>
					</div>
					<div className="card-action">
						<a href="/">This is a link</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
