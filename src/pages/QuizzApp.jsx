import { QuizzOptions } from '../components';
import styled from 'styled-components';

const QuizzAppContainer = styled.div`
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

function QuizzApp() {
	return (
		<QuizzAppContainer>
			<h2>From general knowledge to niche interests, Test your knowledge!</h2>
			<QuizzOptions />
		</QuizzAppContainer>
	);
}

export default QuizzApp;
