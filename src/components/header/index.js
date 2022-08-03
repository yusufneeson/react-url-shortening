import Menu from "../menu";
import style from "./header.module.css";

function Header() {
	return (
		<header className={style.header}>
			<nav className={style.navbar}>
				<a href="/" className={style.brand}>
					<img src="/images/logo.svg" alt="Logo" />
				</a>

				<Menu />
			</nav>
		</header>
	);
}

export default Header;
