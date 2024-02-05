import { useState, useRef } from "react";
import { PropTypes } from "prop-types";
import GalleryData from "/data/GalleryData";
import styles from "../components/GalleryList.module.css";

function GalleryList() {
	return (
		<div className={styles.gallery}>
			<div className={styles.overlayNone}>
				{GalleryData.map((gallery) => (
					<Gallery galleryObj={gallery} key={gallery.name} />
				))}
			</div>
		</div>
	);
}

function Gallery({ galleryObj }) {
	const [isOpenModal, setIsOpenModal] = useState(null);

	Gallery.propTypes = {
		galleryObj: PropTypes.shape({
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			imagePath: PropTypes.bool.isRequired,
		}),
	};
	const myRef = useRef(null);

	const executeScroll = () => myRef.current.scrollIntoView();

	return (
		<div
			onClick={() => setIsOpenModal(!isOpenModal)}
			className={`${isOpenModal ? styles["overlay"] : styles["overlayNone"]}`}
		>
			<div
				onClick={() => setIsOpenModal(!isOpenModal)}
				className={`${
					isOpenModal
						? styles["modalBackground"]
						: styles["modalBackgroundNone"]
				}`}
			>
				<img
					src={galleryObj.imagePath}
					alt={galleryObj.name}
					className={`${
						isOpenModal ? styles["galleryPrevModal"] : styles["galleryPrev"]
					}`}
					ref={myRef}
					onClick={executeScroll}
				/>
				<div
					className={`${isOpenModal ? styles["modalText"] : styles["none"]}`}
				>
					<h2 className={`${isOpenModal ? styles["modalh2"] : styles["none"]}`}>
						{galleryObj.name}
					</h2>
					<p className={`${isOpenModal ? styles["modalp"] : styles["none"]}`}>
						{galleryObj.description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default GalleryList;
