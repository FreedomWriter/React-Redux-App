import React from "react";
import Article from "./Article";
import { connect } from "react-redux";

function ArticleList(props) {
  console.log(`ArticleList.js: props: `, props);
  return (
    <>
      <Article />
    </>
  );
}

const mapStateToProps = state => {
  console.log(`ArticleList.js: mapStateToProps: state: `, state);
  return {
    article: state.articles
  };
};

export default connect(mapStateToProps)(ArticleList);
