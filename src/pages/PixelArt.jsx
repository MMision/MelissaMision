import styles from "./Work.module.css";
import PageNav from "../components/PageNav";
import GalleryList from "../components/GalleryList";

//under return
/* <GalleryList /> */

export default function PixelArt() {
	return (
		<main className={styles.workPageGrid}>
			<PageNav />
			<div className={styles.workContainer}>
				<section>
					<div className={styles.workAboutGrid}>
						<h1>
							<span className={styles.workPageh1Color}>Pixel Art </span>
							pieces
						</h1>
						<p>
							I was born in 1993, and I fondly remember growing up playing video
							games on the Super Nintendo with my family and friends. I remember
							feeling completley immersed in the beautiful worlds and stories
							these games created, and have carried an affinity for 2-d pixel
							games since. Most of these pieces were drawn in Aseprite.
						</p>
					</div>
					<GalleryList />
				</section>
			</div>
		</main>
	);
}
