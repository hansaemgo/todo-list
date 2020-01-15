import React, { useReducer, createContext, useContext, useRef }  from 'react';


//초기상태 [배열 만들어주기]
const initialTodos = [
    {
        id : 1,
        text : '프로젝트 생성하기-1',
        done : true,
    },
    {
        id : 2,
        text : '컴포넌트 스타일링하기',
        done : true,
    },
    {
        id : 3,
        text : '프로젝트 생성하기-3',
        done : false,
    },
    {
        id : 4,
        text : '프로젝트 생성하기-4',
        done : false,
    }
    
];

/* create, toggle, remove 3가지 액션 만들기 */

function todoReducer (state, action) {
    switch (action.type) {
        case 'CREATE' :
            return state.concat(action.todo);
        case 'TOGGLE' :
            return state.map(
                todo => todo.id === action.id ? {...todo, done: !todo.done } : todo
            );
        case 'REMOVE' :
            return state.filter(todo => todo.id !== action.id);
        default :
            throw new Error (`unhandled action type: ${action.type}`);
    }

}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();


export function TodoProvider({ children }) {

    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.provider value={nextId}>
                    {children}
                </TodoNextIdContext.provider>
            </TodoDispatchContext.Provider>}
        </TodoStateContext.Provider>
    );
}


export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error ('Cannot find TodoProvider');
        }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error ('Cannot find TodoProvider');
        }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error ('Cannot find TodoProvider');
        }
    return context;
}