import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
	return (
		<nav className={styles.nav}>
			<Logo />

			<ul>
				<li>
					<NavLink to="/work">work</NavLink>
				</li>
				<li>
					<NavLink to="/about">about</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default PageNav;
