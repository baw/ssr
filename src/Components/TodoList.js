import React from 'react';

import Item from './Item';

class TodoList extends React.Component {
    render() {
        const { items, onRemove } = this.props;

        return (
            <ul>
                {
                    Object.keys(items).map((id) => {
                        const text = items[id];
                        return (
                            <Item
                                key={ id }
                                onRemoveClick={ onRemove.bind(null, id) }
                                text={ text }
                            />
                        );
                    })
                }
            </ul>
        )
    }
}

export default TodoList;
