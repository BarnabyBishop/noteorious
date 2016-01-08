import * as types from '../constants/ActionTypes';

export function addNote() {
    return { type: types.ADD_NOTE };
}
export function editNote() {
    return { type: types.EDIT_NOTE };
}
export function deleteNote() {
    return { type: types.DELETE_NOTE };
}
export function addText(text, noteId) {
    return { type: types.ADD_TEXT, text, noteId };
}
export function deleteText(id, noteId) {
    return { type: types.DELETE_TEXT, id, noteId };
}
export function editText(id, noteId, text, createNext, height) {
    return { type: types.EDIT_TEXT, id, noteId, text, createNext, height };
}
export function setMultiline(id, noteId, multiline) {
    return { type: types.SET_MULTILINE, id, noteId, multiline };
}
export function completeText(id, noteId) {
    return { type: types.COMPLETE_TEXT, id, noteId };
}
export function completeAll() {
    return { type: types.COMPLETE_ALL };
}
export function clearCompleted() {
    return { type: types.CLEAR_COMPLETED };
}
