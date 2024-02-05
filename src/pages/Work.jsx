import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Work.module.css";

export default function Work() {
	return (
		<main className={styles.workPage}>
			<PageNav />
			<div className={styles.workContainer}>
				<section>
					<div className={styles.workAbout}>
						<h1>
							You&apos;re
							<span className={styles.workPageh1Color}>
								{" "}
								welcome to wander.
							</span>
						</h1>
						<p>
							There are three paths to explore. Development is largely websites
							and applications. Pixel art has illustrated pixel
							drawings/concepts and animations. Fine arts has an assortment of
							paintings, sketches and illustrations.<br></br>
							<br></br>
							Relax, take your time among what path(s) you choose.
						</p>
					</div>
					<div className={styles.bannerContainer}>
						<NavLink reloadDocument to={"assets/development"}>
							<div className={styles.dev}>
								<h2>Development</h2>
							</div>
						</NavLink>
						<NavLink reloadDocument to={"assets/pixelArt"}>
							<div className={styles.pixelArt}>
								<h2>Pixel Art</h2>
							</div>
						</NavLink>
						<NavLink reloadDocument to={"assets/fineArts"}>
							<div className={styles.fineArts}>
								<h2>Fine Arts</h2>
							</div>
						</NavLink>
					</div>
				</section>
			</div>
		</main>
	);
}
