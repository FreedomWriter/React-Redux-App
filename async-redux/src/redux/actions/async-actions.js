export const GET = "GET";
export const ARTICLE_LOAD_START = "ARTICLE_LOAD_START";
export const ARTICLE_LOAD_SUCCESS = "ARTICLE_LOAD_SUCCESS";
export const ARTICLE_LOAD_FAILURE = "ARTICLE_LOAD_FAILURE";

export function getArticleData(dispatch) {
  /* flesh out later */
  // transition to LOADING state by isLoading = true
  // update monster date is successful
  // update error state if failure
  //console.log("bk: actions/ getArticleData: dispatch: ", dispatch);
  dispatch({ type: ARTICLE_LOAD_START });

  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then(res =>
      dispatch({
        type: ARTICLE_LOAD_SUCCESS,
        payload: res.data.value
      })
    )
    .catch(err => {
      console.log(err);
      dispatch({
        type: ARTICLE_LOAD_FAILURE,
        payload: "error loading data"
      });
    });