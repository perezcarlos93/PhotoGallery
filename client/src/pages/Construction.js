import React from "react";

import whiteIcon from "../public/Assets/circled-right-white.png";

import HomeBtn from "../Components/HomeBtn";

const Construction = () => {
	const style = {
		sectionText: {
			color: "white",
			fontSize: "3vw",
			top: "40%",
			left: "50%",
			transform: "translate(-50%, -50%)",
		},
		icon: {
			top: "60%",
			left: "50%",
			transform: "translate(-50%, -50%) rotate(90deg)",
		},
		anchor: {
			transitionDuration: "1s",
			webkitTransition: "all 0.5s ease",
		},
	};

	return (
		<main>
			<section className="row relative">
				<span className="absolute mbm-d" style={style.sectionText}>
					This area is currently <br></br> under development
				</span>
				<a href="#section" style={style.anchor}>
					<img
						style={style.icon}
						className="absolute"
						src={whiteIcon}
						alt="white circle with arrow"
					></img>
				</a>
			</section>
			<section className="row relative" id="section">
				<span className="absolute mbm-d" style={style.sectionText}>
					Please check back soon for more content
				</span>
				<HomeBtn />
			</section>
		</main>
	);
};

export default Construction;
