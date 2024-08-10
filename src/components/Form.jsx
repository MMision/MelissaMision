import styles from "./Form.module.css";

export default function Form() {
	return (
		<div className={styles.formContainer}>
			<form className="add-form">
				<h3>Project form</h3>
				<p>
					Filling out multiple fields in a form is tiresome. Share whatever
					information you want concerning your project in the single field
					below, and I&apos;ll review the details and get back in touch with
					follow up questions concerning your project.
					<br></br>
					<br></br>
					Not sure what info to include? Here are some keywords (although not
					required) for inspiration:<br></br>
					Project timeline, description, budget, purpose, project needs, etc.
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
