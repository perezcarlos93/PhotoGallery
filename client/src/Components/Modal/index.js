// Standard Imports
import React, { useState, useEffect } from "react";
import "./style.css";

const Modal = (props) => {
	// States for each modal to handle CSS classes
	const [modalClass, setModalClass] = useState("modalContainer fixed");
	const [modalImg, setImgClass] = useState("fullImg inactive");

	useEffect(() => {
		// Event Listeners to trigger modal closure - Either clicking outside the modal, or scrolling away
		if (modalClass === "modalContainer fixed active") {
			document.addEventListener("mousedown", closeModal);
			document.addEventListener("scroll", closeModal, { passive: true });
		}
	});

	// Function that triggers modal activation by setting class state to include "active" class
	const modal = (event) => {
		if (event.target.id === "modalTrigger") {
			setModalClass("modalContainer fixed active");
		}
		setImgClass("fullImg activeImg");
	};

	// Class that resets modal classes to default when user clicks outside of image
	const closeModal = (event) => {
		if (event.target.id !== "modalImg") {
			setModalClass("modalContainer fixed");
			setImgClass("fullImg inactive");
		} else {
			return;
		}
	};

	return (
		<div className={props.classes} key={props.key}>
			<a onClick={modal} data-modal-target="#modal" href="#modal">
				<img
					id="modalTrigger"
					className="materialboxed sqrImg"
					src={props.src}
					alt="fire"
					loading="lazy"
				></img>
			</a>

			<div id="modal" className={modalClass}>
				<img
					id="modalImg"
					className={modalImg}
					src={props.modalSrc}
					alt={props.alt}
					loading="lazy"
				></img>
			</div>
		</div>
	);
};

export default Modal;
