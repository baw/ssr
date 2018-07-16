import React from 'react';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };

        this.onSubmitText = this.onSubmitText.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    render() {
        return (
            <div>
                <input value={ this.state.text } onChange={ this.onTextChange } />
                <button onClick={ this.onSubmitText }>Add</button>
            </div>
        );
    }

    onSubmitText() {
        this.props.onAdd(this.state.text);
    };

    onTextChange(event) {
        this.setState({
            text: event.target.value,
        });
    };
}

export default AddItem;
