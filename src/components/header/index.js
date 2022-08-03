import { useEffect, useRef, useState } from "react";
import Menu from "../menu";
import style from "./header.module.css";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		if (!isOpen) return;
		const checkIfClickedOutside = (e) => {
			if (isOpen && ref.current && !ref.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", checkIfClickedOutside);
		return () => {
			document.removeEventListener("mousedown", checkIfClickedOutside);
		};
	}, [isOpen]);

	return (
		<header className={style.header}>
			<nav className={style.navbar} ref={ref}>
				<a href="/" className={style.brand}>
					<img src="/images/logo.svg" alt="Logo" />
				</a>

				{isOpen && (
					<div className={style.mobile}>
						<div className={style.container}>
							<Menu style={style} />
						</div>
					</div>
				)}

				<Menu style={style} />
				<div
					onClick={() => setIsOpen(!isOpen)}
					className={style.burger}
				>
					<div className={style.line}></div>
					<div className={style.line}></div>
					<div className={style.line}></div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
