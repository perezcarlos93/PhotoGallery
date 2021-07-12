// Standard Imports
import React, { useState, useRef, useEffect } from "react";
import "./style.css";

// Components
import Modal from "../Modal";

// Photos
import fire from "../../public/Assets/gallery/fire.png";
import mountains from "../../public/Assets/gallery/mountians.jpg";
import smoke from "../../public/Assets/gallery/smoke.jpg";

const FrontPage = () => {
	// State for fading in text at bottom of page
	const [isVisible, setVisibility] = useState(false);
	const [fadeClass, setFadeClass] = useState("fadeGone");

	// Ref for fading in text
	const fadeItem = useRef();

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "10px 0px 0px 0px",
			threshold: 0.8,
		};

		// Observer to look out for Intro Section text
		const observer = new IntersectionObserver((entries, observer) => {
			const [entry] = entries;
			if (entry.isIntersecting) {
				setVisibility(true);
			}
		}, options);

		// Using Ref to check if text is visible to trigger observer
		if (fadeItem.current) {
			observer.observe(fadeItem.current);
		}

		/* 
		If observer is triggered, "isVisible" object is switched to true and
		class is set to "fadeIn" to trigger text fade in animation
		*/
		if (isVisible) {
			setFadeClass("fadeIn");
		}

		return () => {
			if (fadeItem.current) observer.unobserve(fadeItem.current);
		};
	}, [fadeItem, isVisible]);

	const images = [
		{
			src: fire,
			modalSrc: fire,
			alt: "Smoldering Campfire close up",
		},
		{
			src: mountains,
			modalSrc: mountains,
			alt: "Cloudy sunset over Coachella Valley, California",
		},
		{
			src: smoke,
			modalSrc: smoke,
			alt: "Campfire smoke caught in a sunbeam",
		},
	];

	return (
		<main>
			<div className="relative">
				<section className="row">
					<h1 className="h1 fixed">
						Carlos <br></br> Perez <br></br> Photo<br></br>Graphy
					</h1>
					<Modal
						src={images[0].src}
						modalSrc={images[0].modalSrc}
						alt={images[0].alt}
					/>
				</section>
				<section className="row">
					<Modal
						src={images[1].src}
						modalSrc={images[1].modalSrc}
						alt={images[1].alt}
					/>
				</section>
				<section className="row">
					<Modal
						src={images[2].src}
						modalSrc={images[2].modalSrc}
						alt={images[2].alt}
					/>
				</section>
				{/* INTRO SECTION */}
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
							<br></br>Visit the{" "}
							<a href="/galleries" className="link">
								galleries tab
							</a>{" "}
							to see more
						</p>
					</div>
				</section>
			</div>
		</main>
	);
};

export default FrontPage;
