import React from 'react';

class Item extends React.Component {
    render() {
        const { text, onRemoveClick } = this.props;

        return (
            <li>
                <span>{ text }</span>
                <button onClick={ onRemoveClick }>Remove</button>
            </li>
        );
    }
}

export default Item;
