import React from 'react';
import Article from '../Article';
import './style.css';

export default class ArticleList extends React.PureComponent {
    state = {
        openArticleId: null
    }

    handleClick = newOpenArticleId => this.setState({
        openArticleId: this.state.openArticleId === newOpenArticleId ? null : newOpenArticleId
    })

    render(){
        console.log('--- ArticleList');
        const articleElements = this.props.articles.map((article, index) => 
            <li key = {article.id} className="article-list__li">
                <Article 
                    article={article} 
                    isOpen ={ this.state.openArticleId === article.id }
                    onButtonClick = {this.handleClick.bind(this, article.id)}
                />
        </li>)
        console.log(articleElements);
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}
