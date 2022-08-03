import style from "./menu.module.css";

function Menu() {
	return (
		<>
			<ul className={style.menu}>
				<li>
					<a href="/">Features</a>
				</li>
				<li>
					<a href="/">Pricing</a>
				</li>
				<li>
					<a href="/">Resources</a>
				</li>
			</ul>
			<div className={style.auth}>
				<a href="/">Login</a>
				<a className={style.button} href="/">
					Sign Up
				</a>
			</div>
		</>
	);
}

export default Menu;
