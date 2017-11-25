import React, {Component} from 'react';


export default class AddPost extends Component {
    render() {
        return (
            <div>
                <p>Title</p>
                <input 
                    onChange={(event) => this.setState({title: event.target.value})}
                />
                <button onClick={() => this.props.onAdd(this.state)}>Add Post </button>
            </div>
        )
    }
}