import PageNav from "../components/PageNav";
import styles from "./About.module.css";

export default function About() {
	return (
		<main className={styles.aboutPage}>
			<PageNav />
			<div className={styles.aboutContainer}>
				<section>
					<div className={styles.aboutSelf}>
						<h1>
							Hello, world!<br></br> I&apos;m
							<span className={styles.aboutPageh1Color}> Melissa.</span>
						</h1>
						<p>
							Nice to meet you! I&apos;m a front-end developer, my strengths are
							in javaScript, React.js, Node.js, PHP and Wordpress development.{" "}
							<br></br>
							<br></br> In my free-time I can be found where the cats and dogs
							are. I also love to illustrate, go on trails and get lost in
							nature&apos;s beauty. When I&apos;m not outdoors, I enjoy
							immersing myself in 2d video games.
						</p>
						<button className="aboutBtn">
							<a href="https://drive.google.com/file/d/1J9NBKfd0l9L5oNzQA9wq514zQ0_s-6nL/view?usp=drive_link">
								resume
							</a>
						</button>
					</div>
				</section>
			</div>
		</main>
	);
}
