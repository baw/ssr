import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { v1 } from 'uuid';

import AddItem from './Components/AddItem';
import TodoList from './Components/TodoList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items || {},
        };

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    render() {
        return (
            <div className='App'>
                <div>
                    <NavLink to='/'>Items</NavLink>
                    <NavLink to='/add'>Add</NavLink>
                </div>

                <Route path='/' exact component={ () => {
                        return <TodoList items={ this.state.items } onRemove={ this.removeItem } />;
                    }
                } />
                <Route path='/add' component={ ({ history }) => {
                        return <AddItem onAdd={ this.addItem.bind(this, history) } />;
                    }
                } />
            <Route />
          </div>
        );
    }

    addItem(history, text) {
        const uuid = v1();
        const newItems = {
            ...this.state.items,
            [uuid]: text,
        };

        this.setState({
            items: newItems,
        });

        history.push('/');

        fetch('/api/add_item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: uuid,
                text,
            })
        });
    }

    removeItem(id) {
        const { [id]: removed, ...rest } = this.state.items;

        this.setState({
            items: rest,
        });

        fetch(`/api/remove_item?id=${ id }`, {
            method: 'DELETE',
        });
    }
}

export default App;
