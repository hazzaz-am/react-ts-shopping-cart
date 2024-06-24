import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import ShoppingCartProvider from "./context/ShoppingCartContext";

const App = () => {
	return (
		<ShoppingCartProvider>
			<Navbar/>
			<Container className="mb-4">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/store" element={<Store />} />
			</Routes>
		</Container>
		</ShoppingCartProvider>
	);
};

export default App;
