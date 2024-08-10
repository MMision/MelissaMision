// import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
// import ClassRegister from "../components/ClassRegister";
import styles from "./Work.module.css";

export default function Artclasses() {
	return (
		<main className={styles.contactPage}>
			<PageNav />
			<div className={styles.contactMasterContainer}>
				<section>
					<div className={styles.contact}>
						<div className={styles.contactTextBlock}>
							<h1>
								Want to take some <br></br>
								<span className={styles.workPageh1Color}>
									live virtual art classes?
								</span>
							</h1>
							<p>
								I love to draw, and I&apos;m a firm believer that anyone can
								draw and that all it takes is practice, patience (with yourself
								most importantly), and an understanding of some starting art
								principles (things like form, shapes, contrast, etc). There is
								no &quot;end point&quot; with art; artist&apos;s skills and form
								of expression continue to grow and change throughout their
								lifetime.
								<br></br>
								<br></br>
								The thing that is so beautiful about art is that it&apos;s an
								unique expression of someone&apos;s story and experience. I
								would love to help support and guide anyone on their artistic
								journey and growth.
							</p>
						</div>
					</div>
				</section>
				<section className={styles.classSection}>
					<div className={styles.classDetails}>
						<div className={styles.classGroup}>
							<div className={styles.webicon1}></div>

							<h3>Art subjects</h3>
							<p className={styles.classParagraph}>
								1. Traditional drawing <br></br>
								2. Traditional painting <br></br>
								3. Digital drawing <br></br>
								4. Digital painting
							</p>
						</div>
						<div className={styles.classGroup}>
							<div className={styles.webicon2}></div>

							<h3>Class sizes</h3>
							<p className={styles.classParagraph}>
								1. One-to-one live instruction <br></br>
								Duration: 1 hour <br></br>Cost: $10
								<br></br>
								<br></br>2. Five-to-one live instruction
								<br></br>
								Duration: 1 hour <br></br>Cost: $8 per person<br></br>
								<br></br>
								3. Eight-to-one live instruction
								<br></br>
								Duration: 1 hour<br></br>
								Cost: $5 per person
							</p>
						</div>
					</div>
				</section>
				<section className={styles.materialSection}>
					<div className={styles.materialDetails}>
						<div className={styles.webicon3}></div>

						<div className={styles.classGroupMaterials}>
							<h3>Materials</h3>
							<p className={styles.classParagraph}>
								I went through a lot of sketchbooks drawing as a kid. I also
								went through a ton of printer paper and ruled paper when I
								didn&apos;t have sketchbooks to draw in. I drew a lot with
								standard pencils, mechanical pencils and whatever pens I found
								lying around.
								<br></br>
								<br></br>Growing up, I always wondered what kind of art supplies
								artists I looked up to were using, and wondered if I
								wouldn&apos;t be able to create something as beautiful if I
								didn&apos;t have the same supplies.
								<br></br>
								<br></br>I have gotten to use a variety of art brands since
								then. While some brands perform differently in a variety of
								ways, you can use any brand that you have on hand to create
								meaningful art. You alone are enough to create beautiful art.
								<br></br>
								<br></br>
								The person is what makes the art, not the material. Please
								don&apos;t feel nervous or apprehensive to sign up for an art
								class because of whatever art supplies you may or may not have
								on hand.
							</p>
						</div>
					</div>
				</section>
				<section className={styles.welcomeSection}>
					<div className={styles.welcomeDetails}>
						<div className={styles.welcomeGroup}>
							<h3>Welcoming Art Classes</h3>
							<p className={styles.welcomeParagraph}>
								I want to foster an environment that is kind, comfortable and
								welcoming for anyone who signs up. Bullying, racism and
								harassment of any kind are not welcome.<br></br>
								<br></br> If anyone engages in any of these behaviors, I will
								take a moment to pause the class to address the behavior. I want
								to make sure the individual(s) know that the behavior is not
								allowed, and so that they can take a moment to pause and
								understand how deep of an impact their words or actions could
								have on someone&apos;s wellbeing.
								<br></br>
								<br></br>
								Once they have acknowledged and apologized for their actions we
								can resume class.
								<br></br>
								<br></br>
								Mistakes happen to all of us, the most important thing is
								addressing these situations when they happen so that we can
								learn and grow from them. If the behavior continues to happen
								after acknowledging it, the student will be removed from the
								class.
							</p>
						</div>
						<div className={styles.webicon4}></div>
					</div>
				</section>
			</div>
			{/* <ClassRegister /> */}
		</main>
	);
}
