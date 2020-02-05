import React, { useReducer } from 'react';

// 1. 프로젝트에서 사용할 초기상태 배열 만들기
const initialTodos = [
	{
		id: 1,
		text: '프로젝트 생성하기',
		done: true
	},
	{
		id: 2,
		text: '컴포넌트 스타일링하기',
		done: true
	},
	{
		id: 3,
		text: 'Context 만들기',
		done: true
	},
	{
		id: 4,
		text: '기능구현하기',
		done: false
	}
];

// 2. todoReducer 함수 - useReducer에서 사용할 함수 state와 action 가져와서 다음상태를 리턴해주는 함수
function todoReducer(state, action) {
	switch (action.type) {
		case 'CREATE':
			return state.concat(action.todo);
		case 'TOGGLE':
			return state.map((todo) =>
				todo.id === action.id ? { ...todo, done: !todo.done } : todo
			);
		case 'REMOVE':
			return state.filter((todo) => todo.id !== action.id);
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

// 상태 관리 컴포넌트
export function TodoProvider({ children }) {
	const [state, dispatch] = useReducer(useReducer, initialTodos);
	return (
		<TodoStateContext.Provider value={state}>
			<TodoDispatchContext.Provider value={dispatch}>
				{children}
			</TodoDispatchContext.Provider>
		</TodoStateContext.Provider>
	);
}

export function useTodoState() {
	return useContext(TodoStateContext);
}

export function useTodoDispatch() {
	return useContext(TodoDispatchContext);
}
