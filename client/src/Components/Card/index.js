import React, { useEffect } from 'react';
import M from 'materialize-css';

const Card = () => {
	useEffect(() => {
		M.AutoInit();
	});

	return (
		<div class="row">
			<div class="col s12 m7">
				<div class="card">
					<div class="card-image">
						<img src="https://s.hdnux.com/photos/01/11/47/50/19298838/3/rawImage.jpg"></img>
						<span class="card-title">Card Title</span>
					</div>
					<div class="card-content">
						<p>
							I am a very simple card. I am good at containing small bits of
							information. I am convenient because I require little markup to
							use effectively.
						</p>
					</div>
					<div class="card-action">
						<a href="#">This is a link</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
