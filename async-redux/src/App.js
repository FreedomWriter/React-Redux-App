import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { getArticleData } from "./redux/actions/async-actions";
import ArticleList from "./components/Article/ArticleList";

function App(props) {
  console.log(`App.js: props: `, props);

  useEffect(() => {
    props.getArticleData();
  }, []);

  const [articlesFetched, setArticlesFetched] = useState(false);
  return (
    <div className="App">
      <p>
        `
        https://content.guardianapis.com/search?q=%22harlem%20renaissance%22&api-key=696c05ac-79f2-49ae-b5a8-24562cf3969e`
      </p>
      {/* <button
        onClick={() => {
          props.getArticleData();
          setArticlesFetched(true);
        }}
      >
        Start Exploring
      </button>
      {articlesFetched && <ArticleList />} */}
      <ArticleList />
    </div>
  );
}

const mapStateToProps = state => {
  console.log(`App.js: mapStateToProps: state: `, state);
  return {
    id: state.articles.id,
    type: state.articles.type,
    sectionId: state.articles.sectionId,
    sectionName: state.articles.sectionName,
    webPublicationDate: state.articles.webPublicationDate,
    webTitle: state.articles.webTitle,
    webUrl: state.articles.webUrl,
    apiUrl: state.articles.apiUrl,
    isHosted: state.articles.isHosted,
    pillarId: state.articles.pillarId,
    pillarName: state.articles.pillarName,
    isLoading: state.articles.isLoading
  };
};

export default connect(mapStateToProps, { getArticleData })(App);
