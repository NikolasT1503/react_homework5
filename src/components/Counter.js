import React from 'react';

const ErrorComponent = () => <div>{/* props.ignore */}</div>

class Counter extends React.Component{
    constructor(props){
        console.log('Counter constructor')
        super(props);
        this.state = {
            counter : 0,
            seed: 0,
            initializing: true
        }

        this.increment = () => {this.setState({counter: this.state.counter+1})};
        this.decrement = () => {this.setState({counter: this.state.counter-1})};
    }

    static getDerivedStateFromProps(props, state){
        console.log('Counter getDerivedStateFromProps');
        if (props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
    }
    componentDidMount(){
        console.log('Counter mount');
        setTimeout(() => {
            this.setState({initializing: false})
        }, 500);
        console.log('*********************')
    }

    shouldComponentUpdate(nextProps, nextState){        //позволяет указать должен ли компонент обновляться, можно принудительно выключить обновление

        if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log('Counter shouldComponentUpdate - do not render', nextProps.ignoreProp, this.props.ignoreProp);
            console.log('*********************')
            return false
        }
        console.log('Counter shouldComponentUpdate(nextProps, nextState) - render');       
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Counter getSnapshotBeforeUpdate');
        return null
    }

    render(){
        console.log('Counter render');
        if (this.state.initializing){
            return <div>Initializing ...</div>
        }

        if (this.props.showErrorComponent && this.state.error){
            return <div>We have encountered error! {this.state.error.message}</div>
        }

        return (
            <div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <p><strong>Counter:</strong> {this.state.counter}</p>
                {this.props.showErrorComponent ? <ErrorComponent/> : null}
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Counter DidUpdate');
        console.log('*********************')
    }

    componentWillUnmount(){
        console.log('Counter Unmount');
        console.log('*********************')
    }

    componentDidCatch(error, info){
        console.log('Counter componentDidCatch');
        this.setState({error, info})        
    }
}

export default Counter;