import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED, SET_MULTILINE } from '../constants/ActionTypes';

const initialState = [{
    text: 'Use Redux',
    completed: false,
    id: 0
}];

export default function todos(state = initialState, action) {
    switch (action.type) {
    case ADD_TODO:
        return [{
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            multiline: false,
            text: action.text
        }, ...state];

    case DELETE_TODO:
        return state.filter(todo =>
            todo.id !== action.id
        );

    case EDIT_TODO:
        let currentIndex = -1;
        const editedState = state.map((todo, index) => {
                if (todo.id === action.id) {
                        currentIndex = index;
                        return Object.assign({}, todo, { text: action.text, height: action.height });
                }
                else {
                        return todo;
                }
        });

        if (action.createNext && currentIndex > -1) {
            editedState.splice(currentIndex + 1, 0, {
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                completed: false,
                multiline: false,
                text: ''
            });
        }
        return editedState;

    case SET_MULTILINE:
        return state.map(todo =>
            todo.id === action.id ?
                Object.assign({}, todo, { multiline: action.multiline }) :
                todo
        );

    case COMPLETE_TODO:
        return state.map(todo =>
            todo.id === action.id ?
                Object.assign({}, todo, { completed: !todo.completed }) :
                todo
        );

    case COMPLETE_ALL:
        const areAllMarked = state.every(todo => todo.completed);
        return state.map(todo => Object.assign({}, todo, {
            completed: !areAllMarked
        }));

    case CLEAR_COMPLETED:
        return state.filter(todo => todo.completed === false);

    default:
        return state;
    }
}
