import React, { Component, PropTypes } from 'react';
import TextItem from './TextItem';
import Footer from './Footer';

class NoteSection extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { notes, actions } = this.props;

        const selectedNote = notes[0];

        return (
            <section className="main">
                <h2>{selectedNote.title}</h2>
                <ul className="todo-list">
                    {selectedNote.list.map(textItem =>
                        <TextItem key={textItem.id} noteId={selectedNote.id} textItem={textItem} {...actions} />
                    )}
                </ul>
            </section>
        );
    }
}

NoteSection.propTypes = {
    notes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default NoteSection;
