import React, { Component } from 'react'
import uuid from 'uuid/v4';
import axios from 'axios';

export class AddConfession extends Component {
    constructor(props){
        super(props);
        this.state = {
            confession: "",
            name: "anonimno"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        let confession = {
            id: uuid(),
            text: this.state.confession,
            likes: 0,
            dislikes: 0,
            name: "anonimno",
            userId: uuid()
        }

        this.props.addConfession(confession);

    }

    handleInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea type="text" name="confession" id="confession" value={this.state.confession} onChange={this.handleInputChange}/>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default AddConfession
