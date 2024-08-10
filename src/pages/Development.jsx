import styles from "./Work.module.css";
import PageNav from "../components/PageNav";
import GalleryList from "../components/GalleryList";

export default function Development() {
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
								<span className={styles.workPageh1Color}>Development </span>
								pieces
							</h1>
							<p>
								I wrote the site you&apos;re currently reading this on in
								react.js with vite as the data management tool. I&apos;ve also
								created custom wordpress templates with javaScript and PHP.
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
