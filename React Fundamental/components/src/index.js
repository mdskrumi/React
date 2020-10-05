import React from 'react';
import ReactDOM from 'react-dom';


import ApprovalComment from './components/ApprovalComment';

const App = ()=>{
    return (
        <div className="ui container comments" style={{margin : "20px"}}>
            <ApprovalComment />
            <ApprovalComment />
            <ApprovalComment />
            <ApprovalComment />
        </div>
    ); 
};


ReactDOM.render(
    <App />, 
    document.getElementById("root")
);