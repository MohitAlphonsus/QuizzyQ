import { useQuizzContext } from '../context/QuizzContext';
import { Question, StartScreen, FinishedScreen } from '../components';

import { ChooseYourQuizz } from '../pages';

export default function QuizzApp() {
	const { status } = useQuizzContext();

	return (
		<>
			{status === 'initial' && <ChooseYourQuizz />}
			{status === 'ready' && <StartScreen />}
			{status === 'active' && <Question />}
			{status === 'finished' && <FinishedScreen />}
		</>
	);
}
