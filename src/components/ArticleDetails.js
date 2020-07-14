import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticleDetails } from "../actions/ArticleDetails";

function ArticleDetails(props) {
  const { articleDetails } = useSelector((state) => state.articleDetails);
  const dispatch = useDispatch();

  const { path } = props.match;

  useEffect(() => {
    dispatch(getArticleDetails(path));
  }, [dispatch, path]);

  return (
    <div className="artilce-details">
      <h3>{articleDetails.title}</h3>
      <p>{articleDetails.body}</p>
    </div>
  );
}

export default React.memo(ArticleDetails);
