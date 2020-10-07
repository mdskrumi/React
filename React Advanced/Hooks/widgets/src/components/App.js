import React from "react";

import Accordion from "./Accordion";

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

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
