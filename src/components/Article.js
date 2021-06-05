import React from 'react';

class Article extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            count: 0,
        }
    }

/*     shouldComponentUpdate(nextProps, nextState){
        return this.state.isOpen !== nextState.isOpen
    }
 *//*     UNSAFE_componentWillMount(){
        console.log('---mounting')
    }
 */
    componentDidMount(){

    }

/*     shouldComponentUpdate(nextProps, nextState){
        console.log('--- should component update', nextProps.defaultOpen, this.state.isOpen);
        let flag = nextProps.defaultOpen !== this.state.isOpen; 
        console.log(flag);
        if (flag) this.setState({
            isOpen: nextProps.defaultOpen
        })

        return nextProps.defaultOpen !== this.props.defaultOpen

    } */

    componentDidUpdate(){

    }

/*     UNSAFE_componentWillReceiveProps(nextProps){
        console.log('--- willREceiveProps');
    }
 */
/*     UNSAFE_componentWillUpdate(){
        console.log('--- component will update');
    }
 */
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        const {article, isOpen, onButtonClick } = this.props
        const style = {width: '50%'}
        const body = isOpen && <section className="card-text"> {article.text} </section>
        if (isOpen && <section className="card-text"> {article.text} </section>) console.log(body);
        return (
            <div className="card mx-auto" style = {style}>
                <div className="card-header">
                    <h2 onClick = {this.incrementCounter}>
                        {article.title}
                        clicked {this.state.count}
                        <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default Article;