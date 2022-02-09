import ResultsList from "../ResultsList";
import Header from "../Header";
import classes from "./index.module.css";
import { useState } from "react";

function App() {
  let [topic, setTopic] = useState("react");

  let changeTopic = (newTopic) => {
    setTopic(newTopic);
  };

  return (
    <div className={classes.container}>
      <Header topic={topic} />
      <ResultsList topic={topic} onSelect={changeTopic} />
    </div>
  );
}

export default App;
