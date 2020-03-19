import {
  NEXT_ARTICLE,
  PREVIOUS_ARTICLE,
  FIRST_ARTICLE,
  LAST_ARTICLE
} from "../actions";

import {
  ARTICLE_LOAD_START,
  ARTICLE_LOAD_SUCCESS,
  ARTICLE_LOAD_FAILURE
} from "../actions/async-actions";

const initialState = {
  articles: [],
  isLoading: false
};

const reducer = (state = initialState, action) => {
  console.log(`redux: reducers: index.js`, state);
  console.log(`redux: reducers: index.js`, state);
  switch (action.type) {
    case ARTICLE_LOAD_START:
      return {
        ...state,
        isLoading: true,
        articles: [action.payload]
      };
    case ARTICLE_LOAD_SUCCESS:
      console.log(
        `redux: reducers: index,js: ARTICLE_LOAD_SUCCESS: action.payload: `,
        action.payload
      );
      return {
        ...state,
        articles: action.payload,

        isLoading: false
      };
    case ARTICLE_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case NEXT_ARTICLE:
      return {
        ...state
      };
    case PREVIOUS_ARTICLE:
      return {
        ...state
      };
    case FIRST_ARTICLE:
      return {
        ...state
      };
    case LAST_ARTICLE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
