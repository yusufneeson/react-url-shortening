import Card from "./card";
import style from "./feature.module.css";

function Feature() {
	return (
		<div className={style.feature}>
			<h2>Advanced Statistics</h2>
			<p className={style.featureDesc}>
				Track how your links are performing across the web with our
				advanced statistics dashboard.
			</p>
			<div className={style.group}>
				<div></div>
				<Card
					title="Brand Recognition"
					body="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
				/>
				<Card
					title="Detailed Records"
					body="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
				/>
				<Card
					title="Fully Customizable"
					body="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
				/>
			</div>
		</div>
	);
}

export default Feature;
