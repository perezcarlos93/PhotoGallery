import React from "react";
import "./style.css";

import icon from "../../public/Assets/circled-right.png";

const HomeBtn = () => {
	return (
		<div>
			<a className="homeBtn absolute" href="/">
				<img
					className="homeBtnImg"
					src={icon}
					alt="black circle with arrow. click to go back home"
				></img>
			</a>
		</div>
	);
};

export default HomeBtn;
