import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddConfession from './pages/AddConfession';
import Confessions from './pages/Confessions';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            confessions: []
        }
        this.addConfession = this.addConfession.bind(this);
    }

    componentDidMount() {
        axios.get("/api/getConfessions").then(res => this.setState({ confessions: res.data }))
    }

    addConfession(confession) {
        this.setState({
            confessions: [confession, ...this.state.confessions]
        })
        axios.post('/api/addConfession', confession).then(response => console.log(response)).catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <AddConfession addConfession={this.addConfession}/>
                <Confessions confessions={this.state.confessions}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))