import axios from "axios";
import { bindActionCreators } from "../../../../../../../../Library/Caches/typescript/3.6/node_modules/redux";

export const GET = "GET";
export const ARTICLE_LOAD_START = "ARTICLE_LOAD_START";
export const ARTICLE_LOAD_SUCCESS = "ARTICLE_LOAD_SUCCESS";
export const ARTICLE_LOAD_FAILURE = "ARTICLE_LOAD_FAILURE";

export const getArticleData = () => dispatch => {
  /* flesh out later */
  // transition to LOADING state by isLoading = true
  // update monster date is successful
  // update error state if failure
  //console.log("bk: actions/ getArticleData: dispatch: ", dispatch);
  dispatch({ type: ARTICLE_LOAD_START });
  console.log(`hello`);
  axios
    .get(
      `https://content.guardianapis.com/search?q=%22harlem%20renaissance%22&api-key=696c05ac-79f2-49ae-b5a8-24562cf3969e`
    )
    .then(res => {
      console.log(
        `redux: async-actions: axios: res.data.response.results: `,
        res.data.response.results
      );
      dispatch({
        type: ARTICLE_LOAD_SUCCESS,
        payload: res.data.response.results
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ARTICLE_LOAD_FAILURE,
        payload: "error loading data"
      });
    });
};
