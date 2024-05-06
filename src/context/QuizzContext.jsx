import { useReducer, createContext, useContext, useEffect } from 'react';
import { questionsData } from '../../data/questions';

const initialState = {
	questions: [],

	// 'loading', 'error', 'ready', 'active', 'finished'
	status: 'loading',
	index: 0,
	amswer: null,
	points: 0,
};

function reducer(state, action) {
	switch (action.type) {
		case 'dataRecieved':
			return {
				...state,
				questions: action.payload,
				status: 'ready',
			};
		case 'dataFailed':
			return {
				...state,
				status: 'error',
			};
		case 'start':
			return { ...state, status: 'active' };
		case 'newAnswer': {
			const question = state.questions.at[state.index];

			return {
				...state,
				answer: action.payload,
				points:
					action.payload === question.correctOption
						? state.points + question.points
						: state.points,
			};
		}
		default:
			throw new Error('Unknown Action');
	}
}

const QuizzContext = createContext();

function QuizzProvider({ children }) {
	const [{ status, questions, index, answer }, dispatch] = useReducer(
		reducer,
		initialState,
	);

	useEffect(function () {
		dispatch({ type: 'dataRecieved', payload: questionsData });
	}, []);

	return (
		<QuizzContext.Provider
			value={{ status, questions, index, answer, dispatch }}
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
