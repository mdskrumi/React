import { useState, useEffect } from "react";

const Route = ({ route, children }) => {
  const [r, setR] = useState(window.location.pathname);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      setR(window.location.pathname);
    });

    return () => {
      window.removeEventListener("popstate");
    };
  }, []);

  if (r === route) {
    return children;
  } else return null;
};

export default Route;
