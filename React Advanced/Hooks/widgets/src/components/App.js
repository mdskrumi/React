import React, { useState } from "react";

import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Route from "./route";
import Header from "./Header";

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
      <Header />
      <Route route="/">
        <Accordion items={items} />
      </Route>
      <Route route="/l">
        <Search />
      </Route>
      <Route route="/d">
        <Dropdown
          options={options}
          selected={selected}
          onSetSelected={setSelected}
        />
      </Route>
    </div>
  );
};

export default App;
