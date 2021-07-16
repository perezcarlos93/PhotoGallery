import React from "react";
import Modal from "../Components/Modal";

const Galleries = () => {
	const photos = {
		palomar: [
			{
				key: "Photo Name",
				src: "http://lorempixel.com/1920/1080/",
				modalSrc: "http://lorempixel.com/1920/1080/",
				alt: "alt text",
				classes: "col s2 absolute imgCenter",
			},
			{
				key: "Photo Name 2",
				src: "http://lorempixel.com/1920/1080/",
				modalSrc: "http://lorempixel.com/1920/1080/",
				alt: "alt text",
				classes: "col s2 absolute imgCenter",
			},
			{
				key: "Photo Name 2",
				src: "http://lorempixel.com/1920/1080/",
				modalSrc: "http://lorempixel.com/1920/1080/",
				alt: "alt text",
				classes: "col s2 absolute imgCenter",
			},
			{
				key: "Photo Name 3",
				src: "http://lorempixel.com/1920/1080/",
				modalSrc: "http://lorempixel.com/1920/1080/",
				alt: "alt text",
				classes: "col s2 absolute imgCenter",
			},
		],
		bigBear: [
			{
				src: "http://lorempixel.com/1920/1080/",
				alt: "alt text",
			},
			{
				src: "http://lorempixel.com/1920/1080/",
				alt: "alt text",
			},
			{
				src: "http://lorempixel.com/1920/1080/",
				alt: "alt text",
			},
			{
				src: "http://lorempixel.com/1920/1080/",
				alt: "alt text",
			},
		],
	};

	return (
		<main>
			<div className="relative">
				<section className="row">
					{photos.palomar.map((photo) => {
						return (
							<Modal
								key={photo.key}
								src={photo.src}
								modalSrc={photo.modalSrc}
								alt={photo.alt}
								classes={photo.classes}
							/>
						);
					})}
				</section>
			</div>
		</main>
	);
};

export default Galleries;
