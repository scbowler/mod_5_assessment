import React from 'react';
import axios from 'axios';

// This component is as an example of getting data from the server, you can choose to follow this pattern or do it in a way you are familiar with

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        }
    }

    async componentDidMount() {
        const { data: { message } } = await axios.get('/api/example');

        this.setState({ message });
    }

    render() {
        const { message } = this.state;

        return (
            <div>
                <h1>This is an example of getting data from the backend server</h1>

                <p>Message from server:</p>
                <h2>{message}</h2>
            </div>
        );
    }
}

export default Example;
