import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClicked = (index) => {
    console.log("item Clicked: " + index);
    setActiveIndex(index);
  };

  const renderedItem = items.map((item, index) => {
    let act = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${act}`}
          onClick={() => {
            onTitleClicked(index);
          }}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${act}`}>
          <p> {item.content} </p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion"> {renderedItem} </div>;
};

export default Accordion;
