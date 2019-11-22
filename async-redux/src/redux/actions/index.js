export const NEXT_ARTICLE = "NEXT_ARTICLE";
export const PREVIOUS_ARTICLE = "PREVIOUS_ARTICLE";
export const FIRST_ARTICLE = "FIRST_ARTICLE";
export const LAST_ARTICLE = "LAST_ARTICLE";

export function nextArticle(article) {
  console.log(`redux: actions: article: nextArticle: NEXT_ARTICLE:`, article);
  return {
    type: NEXT_ARTICLE,
    payload: article
  };
}

export function prevArticle(article) {
  console.log(
    `redux: actions: prevArticle: article: PREVIOUS_ARTICLE: `,
    article
  );
  return {
    type: PREVIOUS_ARTICLE,
    payload: article
  };
}

export function firstArticle(article) {
  console.log(`redux: actions: article: firstArticle: FIRST_ARTICLE:`, article);
  return {
    type: FIRST_ARTICLE,
    payload: article
  };
}

export function lastArticle(article) {
  console.log(`redux: actions: article: lastArticle: LAST_ARTICLE`, article);
  return {
    type: LAST_ARTICLE,
    payload: article
  };
}
