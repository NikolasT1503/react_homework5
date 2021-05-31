import React from 'react';

class Clock extends React.Component{
    
    constructor(props){
        console.log('Clock contructor');
        super(props);

        this.intervalFlag = null;

        this.state = {
            title: 'Текущее время',
            date: new Date(),
            counter: 0,
        }
    }

    componentDidMount(){
        console.log('Clock componentDidMount');
        this.intervalFlag = setInterval(()=>{
            this.setState((state,props) => ({
                date: new Date(),
                counter: state.counter + 1
            }))
        }, 1000)
    }

    componentDidUpdate(){
        console.log('Clock componentDidUpdate', this.state);

    }

    componentWillUnmount(){
        console.log('Clock componentWillUnmount');
        clearInterval(this.intervalFlag);
    }

    render(){
        console.log('Clock render');
        return (
            <div>
                <p>{this.state.title}</p>
                <p>{this.state.counter}</p>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }

}

export default Clock;