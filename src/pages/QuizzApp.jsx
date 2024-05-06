import styled from 'styled-components';
import { useQuizzContext } from '../context/QuizzContext';
import { Question, StartScreen } from '../components';

const QuizzAppContainer = styled.div`
	height: calc(100dvh - 7rem);
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 2rem;
`;

const QuestionHeader = styled.header`
	padding: 4rem 0;
	border-bottom: 1px solid #111;

	span {
		display: inline-block;
		margin-bottom: 2rem;
		border: 1px solid #303033;
		padding: 0.5rem 3rem;
		border-radius: 1rem;
	}

	h3 {
		font-size: 2.6rem;
		letter-spacing: 0.5px;
	}
`;

const OptionsContainer = styled.div`
	padding: 4rem 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const OptionBox = styled.div`
	padding: 1.6rem;
	border: 1px solid currentColor;
	width: calc(100% - 10%);
	margin: 0 auto;
	border-radius: 1rem;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: translateX(2rem);
	}

	&.active {
		transform: translateX(2rem);
	}

	@media (min-width: 43.75em) {
		width: calc(100% - 40%);
	}
	@media (min-width: 65em) {
		width: calc(100% - 65%);
	}
`;

export default function QuizzApp() {
	const { status } = useQuizzContext();

	return (
		<>
			{status === 'ready' && <StartScreen />}
			{status === 'active' && <Question />}
		</>
	);
}
