import { GlobalStyles } from './GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ChooseYourQuizz, QuizzApp } from './pages';
import { Header } from './components';

export default function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chooseQuizz" element={<ChooseYourQuizz />} />
					<Route path="/quizzapp" element={<QuizzApp />} />
				</Routes>
			</Router>
			<GlobalStyles />
		</>
	);
}
