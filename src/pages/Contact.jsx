// import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Form from "../components/Form";
import styles from "./Work.module.css";

export default function Contact() {
	return (
		<section>
			<main className={styles.contactPage}>
				<PageNav />
				<div className={styles.contactMasterContainer}>
					<div className={styles.contact}>
						<h1>
							Want to work<br></br>
							<span className={styles.workPageh1Color}>together?</span>
						</h1>
						<p>
							I&apos;m all ears - I would love to connect with you and learn
							more about your project needs, and get to know what communication
							style you work best under.
						</p>
					</div>

					<Form />
				</div>
			</main>
		</section>
	);
}
