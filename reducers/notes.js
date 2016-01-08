import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, ADD_TEXT, DELETE_TEXT, EDIT_TEXT, SET_TEXT_MULTILINE, COMPLETE_TEXT, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes';

const initialState = [{
    id: 0,
    notebookId: 0,
    title: 'Todos',
    list: [
        {
            text: 'Update actions to take required params',
            completed: false,
            id: 45,
            height: 36
        },
        {
            text: 'Update components to pass required params\n\rParticularly the noteId!',
            completed: false,
            id: 5,
            height: 70
        },
        {
            text: 'autosize',
            completed: true,
            id: 0
        },
        {
            text: 'Create next note after in multiline',
            completed: true,
            id: 1,
            multiline: true,
            height: 36
        },
        {
            text: 'Create new list',
            completed: false,
            id: 2
        },
        {
            text: 'Give me some CSS',
            completed: true,
            id: 3
        }]
},
{
    id: 1,
    notebookId: 2,
    title: 'Second list',
    list: [{
        text: 'something here',
        id: 4
    }]
}]



export default function notes(state = initialState, action) {
    switch (action.type) {
    case ADD_TEXT:
        return state.map((note, index) => {
            if (note.id === action.noteId) {
                return Object.assign({},
                    note,
                    {
                        list: [{
                            id: note.list.reduce((maxId, text) => Math.max(text.id, maxId), -1) + 1,
                            completed: false,
                            multiline: false,
                            text: action.text
                        },
                        ...note.list]
                    });
            }
            else {
                return note;
            }
        });

    case DELETE_TEXT:
        return state.map((note, index) => {
            if (note.id === action.noteId) {
                return Object.assign({},
                    note,
                    {
                        list: note.list.filter(text => text.id !== action.id)
                    });
            }
            else {
                return note;
            }
        });

    case EDIT_TEXT:
        return state.map((note, index) => {
            if (note.id === action.noteId) {
                const editedNote = Object.assign({},
                    note,
                    {
                        list: note.list.map(text => {
                            if (text.id === action.id) {
                                return Object.assign({}, text, { text: action.text, height: action.height, autoFocus: false });
                            }
                            else {
                                return text;
                            }
                        })
                    });
                if (action.createNext && index > -1) {
                    editedNote.list.splice(index + 1, 0, {
                        id: note.list.reduce((maxId, text) => Math.max(text.id, maxId), -1) + 1,
                        completed: false,
                        multiline: false,
                        text: '',
                        autoFocus: true
                    });
                }
                return editedNote;
            }
            else {
                return note;
            }
        });

    case SET_TEXT_MULTILINE:
        return state.map((note, index) => {
            if (note.id === action.noteId) {
                return Object.assign({},
                    note,
                    {
                        list: note.list.map(text => {
                            if (text.id === action.id) {
                                return Object.assign({}, text, { multiline: action.multiline });
                            }
                            else {
                                return text;
                            }
                        })
                    });
            }
            else {
                return note;
            }
        });

    case COMPLETE_TEXT:
        return state.map((note, index) => {
            if (note.id === action.noteId) {
                return Object.assign({},
                    note,
                    {
                        list: note.list.map(text => {
                            if (text.id === action.id) {
                                return Object.assign({}, text, { completed: !text.completed });
                            }
                            else {
                                return text;
                            }
                        })
                    });
            }
            else {
                return note;
            }
        });

    // case COMPLETE_ALL:
    //     const areAllMarked = state.every(todo => todo.completed);
    //     return state.map(todo => Object.assign({}, todo, {
    //         completed: !areAllMarked
    //     }));
    //
    // case CLEAR_COMPLETED:
    //     return state.filter(todo => todo.completed === false);

    default:
        return state;
    }
}
