import React, { useState, useRef, useEffect } from "react";
import "./style.css";

// Photos
import fire from "../../public/Assets/gallery/fire.png";
import mountains from "../../public/Assets/gallery/mountians.jpg";
import smoke from "../../public/Assets/gallery/smoke.jpg";

const FrontPage = () => {
	const fadeItem = useRef();

	// States for each modal to handle CSS classes
	const [modalOne, setModalOne] = useState("modalContainer fixed");
	const [modalTwo, setModalTwo] = useState("modalContainer fixed");
	const [modalThree, setModalThree] = useState("modalContainer fixed");
	const [modalImg, setImgClass] = useState("fullImg");

	// State for fading in text at bottom of page
	const [isVisible, setVisibility] = useState(false);
	const [fadeClass, setFadeClass] = useState("fadeGone");

	// State for H1 to switch from Fixed to Sticky
	const [h1Class, setH1Class] = useState("h1 fixed");

	// Function that triggers modal activation by setting class state to include "active" class
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
	};

	// Class that resets modal classes to default when user clicks outside of image
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

	// Event Listeners to trigger modal closure
	document.addEventListener("mousedown", closeModal);
	document.addEventListener("scroll", closeModal);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "300px 0px 0px 0px",
			threshold: 1.0,
		};

		const observer = new IntersectionObserver((entries, observer) => {
			const [entry] = entries;
			if (entry.isIntersecting) {
				setVisibility(true);
			}
			// console.log(entry);
		}, options);

		console.log("Observer", observer);

		if (fadeItem.current) {
			observer.observe(fadeItem.current);
		}
		if (isVisible) {
			setFadeClass("fadeIn");
		}

		return () => {
			if (fadeItem.current) observer.unobserve(fadeItem.current);
		};
	}, [fadeItem, isVisible]);

	return (
		<main>
			<div className="relative">
				<section className="row">
					<h1 className={h1Class}>
						Carlos <br></br> Perez <br></br> Photo<br></br>Graphy
					</h1>
					<div className="col s6 offset-s6 absolute imgCenter">
						<a onClick={modal} data-modal-target="#modal1" href="#modal1">
							<img
								id="modal1trigger"
								className="materialboxed sqrImg"
								src={fire}
								alt="fire"
								loading="lazy"
							></img>
						</a>
					</div>

					<div id="modal1" className={modalOne}>
						<img
							id="modalImgOne"
							className={modalImg}
							src={fire}
							alt="fire"
							loading="lazy"
						></img>
					</div>
				</section>
				<section className="row">
					<div className="col s6 offset-s6 absolute imgCenter">
						<a onClick={modal} data-modal-target="#modal2" href="#modal2">
							<img
								id="modal2trigger"
								className="materialboxed sqrImg"
								src={mountains}
								alt="fire"
								loading="lazy"
							></img>
						</a>
					</div>

					<div id="modal2" className={modalTwo}>
						<img
							id="modalImgTwo"
							className={modalImg}
							src={mountains}
							alt="fire"
							loading="lazy"
						></img>
					</div>
				</section>
				<section className="row">
					<div className="col s6 offset-s6 absolute imgCenter">
						<a onClick={modal} data-modal-target="#modal3" href="#modal3">
							<img
								id="modal3trigger"
								className="materialboxed sqrImg"
								src={smoke}
								alt="fire"
								loading="lazy"
							></img>
						</a>
					</div>

					<div id="modal3" className={modalThree}>
						<img
							id="modalImgThree"
							className={modalImg}
							src={smoke}
							alt="fire"
							loading="lazy"
						></img>
					</div>
				</section>
				<section className="row">
					<div ref={fadeItem} id="intro" className="col s6 offset-s6">
						<h1 className={fadeClass}>
							<b>Thank you for visiting</b>
						</h1>
						<p id="introBody" className={fadeClass}>
							Here you will find the culmination of my love for photography,
							beauty, and design, with my talent and passion as a developer.
							<br></br>
							<br></br>I hope you enjoy yourself and find my work just as
							beautiful I as have
						</p>
					</div>
				</section>
			</div>
		</main>
	);
};

export default FrontPage;
