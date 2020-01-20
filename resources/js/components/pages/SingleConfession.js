import React, { Component } from 'react'

class SingleConfession extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            confession: "",
            likes: "",
            dislikes: "",
            name: "",
            userId: "",
            interactStatus: ""
        }

        this.interactPost = this.interactPost.bind(this);
    }    

    componentDidMount() {
        this.setState({
            id: this.props.confession.id,
            confession: this.props.confession.text,
            likes: this.props.confession.likes,
            dislikes: this.props.confession.dislikes,
            name: this.props.confession.name,
            userId: this.props.confession.userId
        })
    }

    interactPost(id, type) {
        
        if ( type === "like" && this.state.interactStatus === "") {
            this.setState({
                likes: this.state.likes+1,
                interactStatus: "liked"
            })
        } else if ( type === "dislike" && this.state.interactStatus === "" ) {
            this.setState({
                dislikes: this.state.dislikes+1,
                interactStatus: "disliked"
            })
        } else if ( type == "like" && this.state.interactStatus === "disliked" ) {
            this.setState({
                likes: this.state.likes+1,
                dislikes: this.state.dislikes-1,
                interactStatus: "liked"
            })
        } else if ( type == "dislike" && this.state.interactStatus === "liked" ) {
            this.setState({
                dislikes: this.state.dislikes+1,
                likes: this.state.likes-1,
                interactStatus: "disliked"
            })
        }
        axios.put(`/api/confessionsInteract/${id}`, { id: id, type: type }, id).then(res => console.log(res.data))
    }

    
    render() {
        return (
            <div>
                <p>{this.state.confession}</p>
                <p>{this.state.name}</p>
                 {/* <p>{this.state.confession.text}</p>
                 <div>
                     add comments here
                 </div> */}
                 <p>{this.state.likes}</p>
                 <button onClick={() => this.interactPost(this.state.id, 'like')}>like</button>
                 <p>{this.state.dislikes}</p>
                 <button onClick={() => this.interactPost(this.state.id, 'dislike')}>dislike</button>
            </div>
        )
    }
}

export default SingleConfession
