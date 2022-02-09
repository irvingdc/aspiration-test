import classes from "./index.module.css";

function TopicWithStars({ name, count, onSelect }) {
  return (
    <button className={classes.container} onClick={() => onSelect(name)}>
      <span>{name}</span>
      <span>
        {count} <b>★</b>
      </span>
    </button>
  );
}

export default TopicWithStars;
