import { FaBookOpenReader, FaFilm, FaFlask, FaBowlFood } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const quizzOptions = [
	{ id: 'QO1', option: 'General Knowledge', icon: FaBookOpenReader },
	{ id: 'QO2', option: 'Movie Buff Trivia', icon: FaFilm },
	{ id: 'QO3', option: 'Science Whiz Quiz', icon: FaFlask },
	{ id: 'QO4', option: 'Foodie Fun Facts', icon: FaBowlFood },
];

const QuizzOptionContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	@media (min-width: 31.25em) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const QuizzOptionBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	padding: 1.6rem 3.2rem;
	border-radius: 1rem;
	background-color: var(--color-accent);
	color: var(--color-neutral-2);
	font-size: 2rem;
	cursor: pointer;

	.quizz-icon {
		font-size: 4rem;
	}
`;

function QuizzOptions() {
	const navigate = useNavigate();
	return (
		<QuizzOptionContainer>
			{quizzOptions.map(({ id, option, icon: Icon }) => (
				<QuizzOptionBox key={id} onClick={() => navigate('/quizzapp')}>
					<Icon className="quizz-icon" />
					<span>{option}</span>
				</QuizzOptionBox>
			))}
		</QuizzOptionContainer>
	);
}

export default QuizzOptions;
