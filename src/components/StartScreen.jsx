import styled from 'styled-components';
import { Button } from '../UI';
import { useQuizzContext } from '../context/QuizzContext';
import { useNavigate } from 'react-router-dom';

const StartScreenContainer = styled.div`
	height: calc(100dvh - 7rem);
	display: grid;
	place-content: center;
`;

const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

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

const ButtonBack = styled.button`
	align-self: start;
	background: none;
	border: none;
	color: var(--color-accent);
	font-weight: 600;
	letter-spacing: 1px;
	cursor: pointer;
	transition: scale 0.3s ease-in;

	&:hover {
		scale: 1.05;
	}
`;

function StartScreen() {
	const navigate = useNavigate();
	const { questions, dispatch } = useQuizzContext();
	const totalQuestions = questions.length;

	return (
		<StartScreenContainer>
			<TextBox>
				<ButtonBack onClick={() => navigate('/chooseQuizz')}>
					&larr; Choose Different Quizz
				</ButtonBack>
				<h2>
					Welcome to the <span>TOPIC_NAME</span> Quizz!
				</h2>
				<p>
					{totalQuestions} questions to test your knowledge, have a fun
					quizzing.
				</p>
				<Button onClick={() => dispatch({ type: 'start' })}>Start Quizz</Button>
			</TextBox>
		</StartScreenContainer>
	);
}

export default StartScreen;
