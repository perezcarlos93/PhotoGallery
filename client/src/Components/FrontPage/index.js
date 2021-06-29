import React, { useEffect, useState, useRef } from "react";
// import M from "materialize-css/dist/js/materialize.min.js";
import "./style.css";

// Photos
// import logo from "../../public/Assets/black_logo.png";
import fire from "../../public/Assets/gallery/fire.png";
// import stars from "../../public/Assets/gallery/stars.JPG";
import mountains from "../../public/Assets/gallery/mountians.jpg";
import smoke from "../../public/Assets/gallery/smoke.jpg";

const FrontPage = () => {
	const ref = useRef();

	const fadeItem = useRef();

	const [popImg, setPopImg] = useState("materialboxed sqrImg");
	const [modalOne, setModalOne] = useState("modalContainer fixed");
	const [modalTwo, setModalTwo] = useState("modalContainer fixed");
	const [modalThree, setModalThree] = useState("modalContainer fixed");
	const [modalImg, setImgClass] = useState("fullImg");

	const modal = (event) => {
		console.log(event);

		if (event.target.id === "modal1trigger") {
			setModalOne("modalContainer fixed active");
		} else if (event.target.id === "modal2trigger") {
			setModalTwo("modalContainer fixed active");
		} else if (event.target.id === "modal3trigger") {
			setModalThree("modalContainer fixed active");
		}

		setImgClass("fullImg activeImg");

		// if (ref.current && !ref.current.contains(event.target)) {
		// 	alert("You clicked outside of me!");
		// }
	};

	const closeModal = (event) => {
		if (
			!event.target.id === "modalImgOne" ||
			"modalImgTwo" ||
			"modalImgThree"
		) {
			setModalOne("modalContainer fixed");
			setModalTwo("modalContainer fixed");
			setModalThree("modalContainer fixed");
		} else {
			return;
		}
	};

	document.addEventListener("mousedown", closeModal);
	document.addEventListener("scroll", closeModal);

	return (
		<main>
			<div className="relative">
				<section className="row">
					<h1 className="h1 fixed">
						Carlos <br></br> Perez <br></br> Photo<br></br>Graphy
					</h1>
					<div className="col s6 offset-s6 absolute imgCenter">
						<a onClick={modal} data-modal-target="#modal1" href="#modal1">
							<img
								id="modal1trigger"
								className={popImg}
								src={fire}
								alt="fire"
							></img>
						</a>
					</div>

					<div id="modal1" className={modalOne}>
						<img
							id="modalImgOne"
							className={modalImg}
							src={fire}
							alt="fire"
						></img>
					</div>
				</section>
				<section className="row">
					<div className="col s6 offset-s6 absolute imgCenter">
						<a onClick={modal} data-modal-target="#modal2" href="#modal2">
							<img
								id="modal2trigger"
								className={popImg}
								src={mountains}
								alt="fire"
							></img>
						</a>
					</div>

					<div id="modal2" className={modalTwo}>
						<img
							id="modalImgTwo"
							className={modalImg}
							src={mountains}
							alt="fire"
						></img>
					</div>
				</section>
				<section className="row">
					<div className="col s6 offset-s6 absolute imgCenter">
						<a onClick={modal} data-modal-target="#modal3" href="#modal3">
							<img
								id="modal3trigger"
								className={popImg}
								src={smoke}
								alt="fire"
							></img>
						</a>
					</div>

					<div id="modal3" className={modalThree}>
						<img
							id="modalImgThree"
							className={modalImg}
							src={smoke}
							alt="fire"
						></img>
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
