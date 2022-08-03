import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import style from "./result.module.css";

function Result({ ...props }) {
	const { link, value } = props;
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		if (clicked) {
			try {
				navigator.clipboard.writeText(value);
			} catch (e) {
				toast.error("Error copying to clipboard", {
					theme: "colored",
				});
			}
		}

		return () => {
			setTimeout(() => {
				setClicked(false);
			}, 1500);
		};
	}, [clicked, value]);

	return (
		<>
			<div className={style.result}>
				<div className={style.link}>{link}</div>
				<div className={style.value}>{value}</div>
				<button
					onClick={() => setClicked(true)}
					type="button"
					className={clicked ? style.button_clicked : style.button}
				>
					{clicked ? "Copied!" : "Copy"}
				</button>
			</div>
			<ToastContainer />
		</>
	);
}

export default Result;
