import styled from 'styled-components';
import { Button } from '../UI';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
	height: calc(100dvh - 7rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	color: var(--color-neutral);
	text-align: center;

	h1 {
		font-size: 5rem;
		letter-spacing: 0.5px;

		span {
			color: var(--color-accent);
		}
	}

	p {
		font-size: 2rem;
		line-height: 1.7;
	}
`;

function Home() {
	const navigate = useNavigate();
	return (
		<HomeContainer>
			<h1>
				Engage Your <span>Mind</span>, Have <span>Fun</span>, and Test Your{' '}
				<span>Knowledge!</span>
			</h1>
			<p>
				Challenge yourself with exciting quizzes on various topics. Dive in and
				explore!
			</p>
			<Button onClick={() => navigate('/chooseQuizz')}>Start Quizzing</Button>
		</HomeContainer>
	);
}

export default Home;
