import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
	return (
		<main className={styles.homepage}>
			<PageNav />
			<section>
				<h1>
					<span className="homePageHeaderh1Spacing">Let&apos;s create</span>
					<br />
					<span className="homePageHeaderh1">something </span>
					<span className="highlightWord">captivating.</span>
				</h1>
				<Link to="/work">
					<button className="btnStyle">projects</button>
				</Link>
			</section>
		</main>
	);
}
