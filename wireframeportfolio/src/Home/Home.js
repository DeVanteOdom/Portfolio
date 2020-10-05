import React, {Component} from "react";
import "./Home.css"
export default class Home extends Component {
    constructor (props) {
        super (props)
        this.state = {header: 2}
    }
    render () {
    return (<div className='Home'>
        <h1>{this.state.header}</h1>
            <btn onClick={()=> this.setState({header:this.state.header*this.state.header})}>Submit</btn>
    </div>)
    }
}  