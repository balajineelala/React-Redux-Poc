import React from "react";
import ArticleDetails from "./ArticleDetails";
import { useRouteMatch, Link, Route } from "react-router-dom";
import PropTypes from "prop-types";

function ArticlesList({ articles }) {
  let { url } = useRouteMatch();

  if (articles.length < 1) {
    return null;
  }

  return (
    <div>
      {articles.map((article) => {
        return (
          <li key={article.id}>
            <Link to={`${url}/${article.id}`}>{article.title}</Link>
            <Route path={`${url}/${article.id}`} component={ArticleDetails} />
          </li>
        );
      })}
    </div>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.array,
};

export default React.memo(ArticlesList);
