import { useQuizzContext } from '../context/QuizzContext';
import { Question, StartScreen, FinishedScreen } from '../components';

export default function QuizzApp() {
	const { status } = useQuizzContext();

	return (
		<>
			{status === 'ready' && <StartScreen />}
			{status === 'active' && <Question />}
			{status === 'finished' && <FinishedScreen />}
		</>
	);
}
