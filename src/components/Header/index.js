import classes from "./index.module.css";

function Header({ topic }) {
  return (
    <div className={classes.container}>
      <h1>Related topics to {topic}</h1>
      <p>Click any item to view its related topics</p>
    </div>
  );
}

export default Header;
