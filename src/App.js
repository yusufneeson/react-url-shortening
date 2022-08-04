import About from "./components/about";
import Cta from "./components/cta";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Main from "./components/main";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Hero />
				<Main />
				<Cta />
				<Footer />
				<About />
			</main>
		</div>
	);
}

export default App;
