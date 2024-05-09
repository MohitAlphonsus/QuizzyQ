import {
	useReducer,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

import {
	foodieFunFacts,
	generalKnowledge,
	movieTrivia,
	scienceWhizQuiz,
} from '../../data';

const initialState = {
	questions: [],

	// 'loading', 'error', 'ready', 'active', 'finished'
	status: 'loading',
	index: 0,
	amswer: null,
	points: 0,
	highscore: 0,
	topic: '',
	secondsRemained: null,
};

const SECS_PER_QUESTION = 10;

function reducer(state, action) {
	switch (action.type) {
		case 'dataRecieved':
			return {
				...state,
				questions: action.payload.questionData,
				topic: action.payload.topicName,
				status: 'ready',
			};

		case 'dataFailed':
			return {
				...state,
				status: 'error',
			};
		case 'start':
			return {
				...state,
				status: 'active',
				secondsRemained: state.questions.length * SECS_PER_QUESTION,
			};
		case 'newAnswer': {
			const question = state.questions[state.index];

			return {
				...state,
				answer: action.payload,
				points:
					action.payload === question.correctOption
						? state.points + question.points
						: state.points,
			};
		}
		case 'nextQuestion':
			return {
				...state,
				index: state.index + 1,
				answer: null,
			};
		case 'finish':
			return {
				...state,
				status: 'finished',
				highscore:
					state.points > state.highscore ? state.points : state.highscore,
			};
		case 'restart':
			return { ...initialState, status: 'initial' };

		case 'tick':
			return {
				...state,
				secondsRemained: state.secondsRemained - 1,
				status: state.secondsRemained === 0 ? 'finished' : state.status,
			};
		default:
			throw new Error('Unknown Action');
	}
}

const QuizzContext = createContext();

function QuizzProvider({ children }) {
	const [quizzOptionCode, setQuizzOptionCode] = useState(null);

	const [
		{
			status,
			questions,
			index,
			points,
			highscore,
			answer,
			topic,
			secondsRemained,
		},
		dispatch,
	] = useReducer(reducer, initialState);

	useEffect(
		function () {
			let questionData;
			let topicName;
			if (quizzOptionCode === 'GK') {
				questionData = generalKnowledge;
				topicName = 'General Knowledge';
			} else if (quizzOptionCode === 'MBT') {
				questionData = movieTrivia;
				topicName = 'Movie Buff Trivia';
			} else if (quizzOptionCode === 'SWQ') {
				questionData = scienceWhizQuiz;
				topicName = 'Science Whiz Quiz';
			} else if (quizzOptionCode === 'FFF') {
				questionData = foodieFunFacts;
				topicName = 'Foodie Fun Facts';
			}
			if (questionData) {
				dispatch({
					type: 'dataRecieved',
					payload: { questionData, topicName },
				});
			}
		},
		[quizzOptionCode],
	);

	const maxPoints = questions?.reduce((prev, curr) => prev + curr.points, 0);

	return (
		<QuizzContext.Provider
			value={{
				status,
				questions,
				index,
				answer,
				points,
				maxPoints,
				highscore,
				setQuizzOptionCode,
				secondsRemained,
				topic,
				dispatch,
			}}
		>
			{children}
		</QuizzContext.Provider>
	);
}

function useQuizzContext() {
	const context = useContext(QuizzContext);
	if (context === undefined)
		throw new Error('context is used outside of QuizzProvider');
	return context;
}

export { QuizzProvider, useQuizzContext };
