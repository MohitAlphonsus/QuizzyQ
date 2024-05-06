import styled from 'styled-components';
import { useQuizzContext } from '../context/QuizzContext';
import { Option } from '../components';

const QuizzQuestionContainer = styled.div`
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

	.btn {
		padding: 1.6rem;
		width: calc(100% - 10%);
		margin: 0 auto;
		border-radius: 1rem;
		font-weight: 600;
		border: 1px solid transparent;
		cursor: pointer;
		transition: background-color 0.3s ease-in-out;

		&:disabled {
			cursor: not-allowed;
		}

		.default {
			background-color: var(--color-bg-option-box);
			color: var(--color-white);
		}

		&:hover {
			background-color: transparent;
			border: 1px solid var(--color-bg-option-box);
		}

		&.active {
			transform: translateX(2rem);
			transition: transform 0.3s ease-in-out;
		}

		&.correct {
			background-color: #6ee7b7;
			color: #111;
		}

		&.wrong {
			background-color: #12251d;
			color: var(--color-white);
		}

		@media (min-width: 43.75em) {
			width: calc(100% - 40%);
		}

		@media (min-width: 65em) {
			width: calc(100% - 65%);
		}
	}
`;

function Question() {
	const { questions, index, answer, dispatch } = useQuizzContext();
	const question = questions[index];
	const numOfQuestions = questions.length;
	const questionNumber = index + 1;

	return (
		<QuizzQuestionContainer>
			<QuestionHeader>
				<span>
					{questionNumber} / {numOfQuestions}
				</span>
				<h3>{question.question}</h3>
			</QuestionHeader>
			<OptionsContainer>
				{question.options.map((option, optionIndex) => (
					<Option
						key={option}
						disabled={answer !== null}
						className={`btn default ${
							optionIndex === answer ? 'active' : ''
						} ${'some'}`}
						onClick={() =>
							dispatch({ type: 'newAnswer', payload: optionIndex })
						}
					>
						{option}
					</Option>
				))}
			</OptionsContainer>
		</QuizzQuestionContainer>
	);
}

export default Question;
