import styled from 'styled-components';
import { useQuizzContext } from '../context/QuizzContext';
import { Button } from '../UI';

const FinishScreen = styled.div`
	height: calc(100dvh - 7rem);
	display: grid;
	place-content: center;
	gap: 2rem;
`;

const FinishMessage = styled.div`
	background-color: var(--color-accent);
	color: var(--color-primary);
	font-weight: 700;
	width: 90vw;
	border-radius: 1rem;
	display: grid;
	place-content: center;
	gap: 2rem;
	text-align: center;
	padding: 2rem;

	@media (min-width: 37.5em) {
		width: 45rem;
	}

	header {
		font-size: 3rem;
	}

	p {
		font-size: 1.8rem;
		font-weight: 400;
	}

	span {
		font-size: 2rem;
		font-weight: 500;
	}

	footer {
		letter-spacing: 1px;
	}
`;

function FinishedScreen() {
	const { points, maxPoints, highscore, dispatch } = useQuizzContext();
	const percent = Math.ceil((points / maxPoints) * 100);

	return (
		<FinishScreen>
			<FinishMessage>
				<header>🎉 Congratulations! 🎉</header>
				<p>You have completed the quizz</p>
				<span>
					You scored <strong>{points}</strong> out of {maxPoints} (
					<strong>{percent}%</strong>)
				</span>
				<footer>
					<strong>Highscore : {highscore}</strong>
				</footer>
			</FinishMessage>
			<Button $type="secondary" onClick={() => dispatch({ type: 'restart' })}>
				Restart
			</Button>
		</FinishScreen>
	);
}

export default FinishedScreen;
