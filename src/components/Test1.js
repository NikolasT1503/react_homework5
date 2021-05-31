import React from 'react';

class Test1 extends React.Component {
    
    constructor(props){
        console.clear();
        console.log('Test1 constructor');
        console.log(props);
        super(props);
        this.state = {
            s1: 0
        }
        console.log(this.state);
    }

    static getDerivedStateFromProps(props,state){           //этот метод ЖЦ может использоваться для обновления state из props
        console.log('Test1 static getDerivedStateFromProps(props,state)',props,state);
        return null
        //return { s1: props.arg }
    }

    componentDidMount(){                    //этот метод ЖЦ может использоваться после отрисовки компонента в первый раз
        console.log('Test1 componentDidMount()')
    }

    componentDidUpdate(){                   //этот метод ЖЦ может использоваться после отрисовки компонента при обнолвении 
        console.log('Test1 componentDidUpdate()')

    }

    handlerButton = () => {
        console.log('Test1 handlerButton')
        let val = this.state.s1;
        val++;
        this.setState({s1: val});
    }

    render(){
        console.log('Test1 render 1')
        return (
            <>
                {console.log('Test1 render 2')}
                <div><button onClick={this.handlerButton} >push</button></div>
                <div>{this.state.s1}</div>
            </>
        )
    }

    componentWillUnmount(){
        console.log('Test1 Unmount');
        console.log('*********************')
    }
}

export default Test1;