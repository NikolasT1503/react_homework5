import React from 'react';
import './Task7.css'

class Task7 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            class: 'off',
            label: 'Press'
        }

        this.press = this.press.bind(this);
        console.log('Task7 - constructor');
    }

    componentDidMount(){
        console.log('Task7 - componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('Task7 - shouldComponentUpdate')
        return true
    }

    componentDidUpdate(){
        console.log('Task7 - componentDidUpdate')
    }

    press = ()=>this.setState({
        class: (this.state.class==='off') ? 'on' : 'off'
    })

    render(){
        console.log('Task7 - render')
        return(
            <button onClick={this.press} className={this.state.class}>{this.state.label}</button>

        )
    }
}

export default Task7;