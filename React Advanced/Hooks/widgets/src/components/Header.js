import React from "react";

import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        <strong>Accordion</strong>
      </Link>
      <Link href="/l" className="item">
        <strong>Search Wiki</strong>
      </Link>
      <Link href="/d" className="item">
        <strong>Dropdown</strong>
      </Link>
    </div>
  );
};

export default Header;
