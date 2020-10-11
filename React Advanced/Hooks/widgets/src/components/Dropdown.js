import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSetSelected }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const onBodyClicked = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClicked);

    return () => {
      document.body.removeEventListener("click", onBodyClicked);
    };
  }, []);

  const renderedOptions = options.map((op) => {
    if (op === selected) {
      return null;
    }
    return (
      <div
        className="item"
        key={op.value}
        onClick={() => {
          onSetSelected(op);
        }}
        style={{ color: op.value }}
      >
        {" "}
        {op.label}
        <hr />
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text" style={{ color: selected.value }}>
            {selected.label}
          </div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
