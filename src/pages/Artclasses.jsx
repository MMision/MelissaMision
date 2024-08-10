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
								would love to help support and encourage anyone on their
								artistic journey and growth.
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
								Duration: 1 hour <br></br>Cost: Tbd
								<br></br>
								<br></br>2. Five-to-one live instruction
								<br></br>
								Duration: 1 hour <br></br>Cost: Tbd<br></br>
								<br></br>
								3. Eight-to-one live instruction
								<br></br>
								Duration: 1 hour<br></br>
								Cost: Tbd
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
								I went through a lot of sketchbooks growing up. I also went
								through a ton of printer paper and ruled paper when I
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
								then, and I can happily say you can use any brand that you have
								on hand to create meaningful art. Your materials and how
								expensive or inexpensive they are really do not matter.
								<br></br>
								<br></br>
								The person is what makes the art, not the material. Please
								don&apos;t feel nervous or apprehensive to sign up for any art
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
								Environments that are kind, comfortable and welcoming are
								incredibly important for anyone to feel comfortable and
								confident in expressing themselves while building their skills.
								Bullying, racism and harassment of any kind are not welcome.
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
