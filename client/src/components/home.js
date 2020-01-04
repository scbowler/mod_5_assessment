import React from 'react';
import { Link } from 'react-router-dom';

// This component should display a list of all the to do items
// When a to do item is clicked it should redirect you to the update to do page
class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>To Do List</h1>

                <p>List of to do items should be displayed here</p>

                {/* This link should be deleted, it is here for demo purposes only */}
                <Link to="/example">View Example Component</Link>
            </div>
        );
    }
}

export default Home;
