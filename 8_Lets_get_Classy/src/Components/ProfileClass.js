import React from 'react';
// or I can use import {React.Component} from 'react'; // name import


class ProfileClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            location:"",
            name : "",
        }
    }

    componentDidMount(){
        this.setState({
            location: this.props.location,
            name: this.props.name
        });
    }

    componentWillmount(){
        console.log("this will be called after my first render");
    }

    render() {
        return (
            <div className='profile-card'>
                <ul>
                    <li>Profile Name</li>
                    <li>Profile Location</li>
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