import styled from 'styled-components';
import { Button } from '../UI';
import { useQuizzContext } from '../context/QuizzContext';

const StartScreenContainer = styled.div`
	height: calc(100dvh - 7rem);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 2rem;

	h2 {
		font-size: 4rem;

		span {
			color: var(--color-accent);
		}
	}

	p {
		font-size: 1.8rem;
	}
`;

function StartScreen() {
	const { questions, dispatch } = useQuizzContext();
	const totalQuestions = questions.length;

	return (
		<StartScreenContainer>
			<h2>
				Welcome to the <span>TOPIC_NAME</span> Quizz!
			</h2>
			<p>
				{totalQuestions} questions to test your knowledge, have a fun quizzing.
			</p>
			<Button onClick={() => dispatch({ type: 'start' })}>Start Quizz</Button>
		</StartScreenContainer>
	);
}

export default StartScreen;
