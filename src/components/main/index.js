import Feature from "../feature";
import Shorter from "../shorter";
import style from "./main.module.css";

function Main() {
	return (
		<section className={style.main}>
			<Shorter />
			<Feature />
		</section>
	);
}

export default Main;
