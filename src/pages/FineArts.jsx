import styles from "./Work.module.css";
import PageNav from "../components/PageNav";
import GalleryList from "../components/GalleryList";

export default function FineArts() {
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
								<span className={styles.workPageh1Color}>Fine Arts </span>
								pieces
							</h1>
							<p>
								Since I was little, I&apos;ve loved illustrating and painting.
								In particular I love to create landscapes, character designs and
								environments. When I should have been taking notes in class
								growing up, I was busy filling the paper with sketches of worlds
								where my creativity could run free.
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
