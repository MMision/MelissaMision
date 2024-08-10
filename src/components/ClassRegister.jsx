import styles from "./ClassRegister.module.css";

export default function ClassRegister() {
	return (
		<div className={styles.formContainer}>
			<form className="add-form">
				<h3>Class registration</h3>
				<p>
					Art classes are led live online, and are accessible through a google
					meets link.
					<br></br>
					You can sign up for a single session or multiple as you desire!
				</p>
				{/* <select>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select> */}
				<input type="text" placeholder="What's your name?" />
				<br></br>
				<input type="text" placeholder="What's a good email to get in touch?" />
				<br></br>
				<input type="text" placeholder="Enter project details" />
				<br></br>
				<button className="btnStyle">Submit</button>
			</form>
		</div>
	);
}
