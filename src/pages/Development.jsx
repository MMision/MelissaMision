import styles from "./Work.module.css";
import PageNav from "../components/PageNav";
import GalleryList from "../components/GalleryList";

export default function FineArts() {
	return (
		<main className={styles.workPageGrid}>
			<PageNav />
			<div className={styles.workContainer}>
				<section>
					<div className={styles.workAboutGrid}>
						<h1>
							<span className={styles.workPageh1Color}>Development </span>
							pieces
						</h1>
						<p>
							I wrote the site you&apos;re currently reading this on in react.js
							with vite as the data management tool. I&apos;ve also created
							custom wordpress templates with javaScript and PHP.
						</p>
					</div>
					<GalleryList />
				</section>
			</div>
		</main>
	);
}
