import { useEffect } from 'react';
import styled from 'styled-components';
import { useQuizzContext } from '../context/QuizzContext';

const Timely = styled.span`
	display: inline-block;
	border: 1px solid #303033;
	padding: 0.5rem 3rem;
	border-radius: 1rem;
	font-weight: 600;
	margin-left: 12rem;
`;

function Timer() {
	const { secondsRemained, dispatch } = useQuizzContext();
	const mins = Math.floor(secondsRemained / 60);
	const seconds = secondsRemained % 60;

	useEffect(() => {
		const timerId = setInterval(function () {
			dispatch({ type: 'tick' });
		}, 1000);

		return () => clearInterval(timerId);
	}, [dispatch]);
	return (
		<Timely>
			{mins < 10 && '0'}
			{mins}:{seconds < 10 && '0'}
			{seconds}
		</Timely>
	);
}

export default Timer;
