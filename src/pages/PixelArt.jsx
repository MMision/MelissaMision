import styles from "./Work.module.css";
import PageNav from "../components/PageNav";
import GalleryList from "../components/GalleryList";

//under return
/* <GalleryList /> */

export default function PixelArt() {
	return (
		<main className={styles.workPageGrid}>
			<PageNav />
			<div className={styles.toTop}>
				<div className={styles.workPageBanner}>
					<div className={styles.workAboutGrid}>
						<div className={styles.bannerShadow}></div>
						<img src="./workpage-banner.JPG" alt="Image Banner" height="500" />
						<div className={styles.textContent}>
							<h1>
								<span className={styles.workPageh1Color}>Illustration </span>
								work
							</h1>
							<p>
								I was born in 1993, and I fondly remember growing up playing
								video games on the Super Nintendo with my family and friends. I
								remember feeling completley immersed in the beautiful worlds and
								stories these games created, and have carried an affinity for
								illustrating and 2-d pixel games since.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.workPageGrid}>
					<GalleryList />
				</div>
			</div>
		</main>
	);
}
