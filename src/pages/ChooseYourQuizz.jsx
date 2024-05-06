import { QuizzOptions } from '../components';
import styled from 'styled-components';

const QuizzContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: calc(100dvh - 7rem);
	gap: 4rem;

	h2 {
		text-align: center;
		font-size: 4rem;
		font-weight: 400;
	}
`;

function ChooseYourQuizz() {
	return (
		<QuizzContainer>
			<h2>From general knowledge to niche interests, Test your knowledge!</h2>
			<QuizzOptions />
		</QuizzContainer>
	);
}

export default ChooseYourQuizz;
