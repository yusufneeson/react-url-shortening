import style from "./card.module.css";

function Card({ ...props }) {
	const { title, body } = props;

	const kebab = (title) => title.replace(/\s+/g, "-").toLowerCase();

	return (
		<div className={style.card}>
			<div className={style.cardIcon}>
				<img
					src={`${process.env.PUBLIC_URL}/images/icon-${kebab(
						title
					)}.svg`}
					alt={title}
				/>
			</div>
			<div className={style.cardTitle}>
				<h3>{title}</h3>
			</div>
			<div className={style.cardBody}>
				<p>{body}</p>
			</div>
		</div>
	);
}

export default Card;
