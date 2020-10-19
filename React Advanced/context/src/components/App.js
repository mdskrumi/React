import React, { useState } from 'react';


import LanguageContext from './contexts/LanguageContext';
import UserCreate from './UserCreate';

const App = () => {

    const [language, setLanguage] = useState("English");

    return (
        <div className="ui container">
            <div className="ui menu">
                <div className="item"> Change Language({" " + language + " "}) </div>
                <div className="item" onClick={() => { setLanguage("English") }}> <i className="flag us"></i></div>
                <div className="item" onClick={() => { setLanguage("Bangla") }}> <i className="flag bd"></i></div>
            </div>
            <LanguageContext.Provider value={language}>
                <UserCreate />
            </LanguageContext.Provider>

        </div >
    )
}

export default App;