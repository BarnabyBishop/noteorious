import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TextInput from './TextInput';

class TextItem extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleSave(id, noteId, text, createNext, height) {
        this.props.editText(id, noteId, text, createNext, height);
    }

    render() {
        const {textItem, noteId, completeText, deleteText} = this.props;

        return (
            <li className={classnames({
                completed: textItem.completed
            })}>
                <div className="view">
                    <input className="toggle"
                                 type="checkbox"
                                 checked={textItem.completed}
                                 onChange={() => completeText(textItem.id, noteId)} />
                    <TextInput
                        text={textItem.text}
                        height={textItem.height}
                        multiline={textItem.multiline}
                        autoFocus={textItem.autoFocus}
                        onSave={(text, createNext, height) => this.handleSave(textItem.id, noteId, text, createNext, height)}
                        setMultiline={(multiline) => this.props.setMultiline(textItem.id, noteId, multiline)} />
                    <button className="destroy" onClick={() => deleteText(textItem.id, noteId)} />
                </div>
            </li>
        );
    }
}

TextItem.propTypes = {
    textItem: PropTypes.object.isRequired,
    noteId: PropTypes.number.isRequired,
    addText: PropTypes.func.isRequired,
    editText: PropTypes.func.isRequired,
    deleteText: PropTypes.func.isRequired,
    completeText: PropTypes.func.isRequired
};

export default TextItem;
