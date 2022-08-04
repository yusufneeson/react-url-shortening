import style from "./cta.module.css";

function Cta() {
	return (
		<section className={style.cta}>
			<h2 className={style.ctaTitle}>Boost your links today</h2>
			<a href="/" className={style.button}>
				Get Started
			</a>
		</section>
	);
}

export default Cta;
