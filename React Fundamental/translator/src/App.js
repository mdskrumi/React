import React from 'react';
import logo from './logo.svg';
import './App.css';
import Field from "./component/field";
import Languages from "./component/languages";
import Translate from "./component/translate";

function App() {
  return (
    <div>
      <Field />
      <Languages />
      <hr />
      <Translate />
    </div>
  );
}

export default App;
