import React from "react";
import ArticleList from './ArticleList';
import articles from '../data/fixtures';


class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reverted: false,
    };
  }

  revert = () => {
    this.setState({
      reverted: !this.state.reverted,
    });
    console.log("reverted: ", this.state.reverted);
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">App name</h1>
          <button className="btn" onClick={this.revert}>
            Revert
          </button>
        </div>

        <ArticleList
          articles={this.state.reverted ? articles.reverse() : articles}
        />
      </div>
    );
  }
}

export default Articles;
