import React from 'react';
// or I can use import {React.Component} from 'react'; // name import


class ProfileClass extends React.Component {

    constructor(props){
        console.log("constructor is called");
        super(props);
        this.state = {
            location:"",
            name : "",
            avatar_url : "",
        }
    }

    async componentDidMount(){
        
        console.log("componentDidMount called");

        const data = await fetch("https://api.github.com/users/anoyash");
        const objData = await data.json();

        // this.setState({
        //     location: this.props.location,
        //     name: this.props.name
        // });
        console.log(objData);

        this.setState({
            location : objData.location,
            name: objData.name,
            avatar_url : objData.avatar_url
        });

    }

    componentWillmount(){
        console.log("this will be called after my first render");
    }

    render() {
        console.log("Inside rendering");
        return (
            <div className='profile-card'>
                <ul>
                    <img src={this.state.avatar_url} height="100px" width="100px"></img>
                    <li>{this.state.name}</li>
                    <li>{this.state.location}</li>
                </ul>
            </div>
        )
    }

}

export default ProfileClass;

/* 

1. We have render phase and commit phase in the life cycle
2. Constructor and render gets called in the render phase and componentDidMount gets called in commit phase
3. So, Let's say we have same component return mutiple times , first constructor and render gets called will be called for all the components 
 only then it will go for commit phase.
4. DOM manipulation happens in commit phase.
5. For accessing props we use : this.props.name / this.props.location
6. constructor() => render() => componentDidMount() => compoenetwillMount

*/