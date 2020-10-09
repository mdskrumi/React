import React, { useState } from "react";

import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";

const items = [
  {
    title: "1. What is react?",
    content: "React is a Javascript library.",
  },
  {
    title: "2. What is react?",
    content: "React is a Javascript library.",
  },
  {
    title: "3. What is react?",
    content: "React is a Javascript library.",
  },
  {
    title: "4. What is react?",
    content: "React is a Javascript library.",
  },
];

const options = [
  {
    label: "The Red Color",
    value: "red",
  },
  {
    label: "The Green Color",
    value: "green",
  },
  {
    label: "The Purple Color",
    value: "purple",
  },
  {
    label: "The Blue Color",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container" style={{ margin: "10px" }}>
      <Dropdown
        options={options}
        selected={selected}
        onSetSelected={setSelected}
      />
    </div>
  );
};

export default App;
