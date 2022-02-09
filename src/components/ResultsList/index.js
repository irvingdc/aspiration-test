import React from "react";
import classes from "./index.module.css";
import TopicWithStars from "../TopicWithStars";
import Skeleton from "../Skeleton";
import { useQuery } from "@apollo/react-hooks";
import { GET_RELATED_TOPICS } from "../../utils/queries";

function ResultsList({ topic, onSelect }) {
  const { loading, error, data } = useQuery(GET_RELATED_TOPICS, {
    variables: { topic },
  });
  if (loading) {
    return <Skeleton />;
  } else if (error) {
    return <p>{error.message}</p>;
  } else {
    return (
      <div className={classes.container} data-id="results">
        {data.topic.relatedTopics.map(({ id, name, stargazers }) => (
          <TopicWithStars
            key={id}
            name={name}
            count={stargazers.totalCount}
            onSelect={onSelect}
          />
        ))}
      </div>
    );
  }
}

export default ResultsList;
