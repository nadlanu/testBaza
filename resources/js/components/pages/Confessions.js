import React, { Component } from 'react'
import axios from 'axios';
import SingleConfession from './SingleConfession';

export class Confessions extends Component {
    constructor(props){
        super(props);
        this.state = {
            confessions: []
        }
    }



    render() {
        return (
            <div>
                {
                    this.props.confessions.map(confession => (
                        <SingleConfession confession={confession} key={confession.id}/>
                    // <div key={confession.id}>
                    //     <p>{confession.text}</p>
                    //     <div>
                    //         add comments here
                    //     </div>
                    //     <p>{confession.likes}</p>
                    //     <button onClick={() => this.interactPost(confession.id, 'like')}>like</button>
                    //     <p>{confession.dislikes}</p>
                    //     <button>dislike</button>
                    // </div>
                    ))
                }
            </div>
        )
    }
}

export default Confessions
