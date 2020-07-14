import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../actions/Articles";
import ArticlesList from "./ArticlesList";

function Articles() {
  const { articlesList } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div>
      <ArticlesList articles={articlesList} />
    </div>
  );
}

export default React.memo(Articles);
