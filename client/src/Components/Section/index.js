// import React from "react";

// const Section = () => {
// 	const modal = (event) => {
// 		console.log(event);

// 		if (event.target.id === "modal1trigger") {
// 			setModalOne("modalContainer fixed active");
// 		} else if (event.target.id === "modal2trigger") {
// 			setModalTwo("modalContainer fixed active");
// 		} else if (event.target.id === "modal3trigger") {
// 			setModalThree("modalContainer fixed active");
// 		}

// 		setImgClass("fullImg activeImg");
// 	};

// 	const closeModal = (event) => {
// 		if (
// 			!event.target.id === "modalImgOne" ||
// 			"modalImgTwo" ||
// 			"modalImgThree"
// 		) {
// 			setModalOne("modalContainer fixed");
// 			setModalTwo("modalContainer fixed");
// 			setModalThree("modalContainer fixed");

// 			setImgClass("fullImg inactive");
// 		} else {
// 			return;
// 		}
// 	};

// 	// Event Listeners to trigger modal closure - Either clicking outside the modal, or scrolling away
// 	document.addEventListener("mousedown", closeModal);
// 	document.addEventListener("scroll", closeModal);

// 	return (
// 		<section className="row">
// 			<div className="col s6 offset-s6 absolute imgCenter">
// 				<a onClick={modal} data-modal-target="#modal2" href="#modal2">
// 					<img
// 						id="modal2trigger"
// 						className="materialboxed sqrImg"
// 						src={mountains}
// 						alt="fire"
// 						loading="lazy"
// 					></img>
// 				</a>
// 			</div>

// 			<div id="modal2" className={modalTwo}>
// 				<img
// 					id="modalImgTwo"
// 					className={modalImg}
// 					src={mountains}
// 					alt="fire"
// 					loading="lazy"
// 				></img>
// 			</div>
// 		</section>
// 	);
// };

// export default Section;
