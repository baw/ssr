import React from 'react';
import { StaticRouter } from 'react-router-dom';

import App from './App';

class ServerIndex extends React.Component {
    render() {
        return (
            <StaticRouter location={ this.props.location } context={{}}>
                <App items={ this.props.items } />
            </StaticRouter>
        );
    }
}

export default ServerIndex;
