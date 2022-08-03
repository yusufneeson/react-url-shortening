import style from "./hero.module.css";

function Hero() {
	return (
		<section className={style.hero}>
			<div className={style.illustration}>
				<img
					src={`${process.env.PUBLIC_URL}/images/illustration-working.svg`}
					alt="Illustration"
				/>
			</div>
			<div className={style.content}>
				<div className={style.text}>
					<h1 className={style.title}>
						More than just shorter links
					</h1>
					<p className={style.description}>
						Build your brand’s recognition and get detailed insights
						on how your links are performing.
					</p>
					<a href="/" className={style.button}>
						Get Started
					</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;
