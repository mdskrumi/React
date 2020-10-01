import React from 'react';
import ReactDOM from 'react-dom';


function getSomeText(){
    return "CLick me";
}


function getCurrentTime(){
    return (new Date().toUTCString());
}

const App = () => {

    const buttonText = "Click me";
    /*
        Expect Object all the other variable types are allowed to use in JSX
    */

    const myStyle = {backgroundColor: 'red', color: "white", margin:"10px"};

    return (
        <div>
            <h1> Hasbunallahu Wa Ni'mal Wakeel  </h1>
            <div>
                <label className="label" htmlFor="name" style={{margin: "10px"}}>
                    Enter Name:
                </label>
                <input id='name' type="text" />
                <button type="submit" style={myStyle}> Submit </button>
                <button type="submit" style={{backgroundColor: 'blue', color: "white", margin:"10px"}}> {buttonText} </button>
                <button type="submit" style={{backgroundColor: 'blue', color: "white", margin:"10px"}}> {getSomeText()} </button>
            </div>
            <div>
                <h5 style={{color: 'red'}}>{getCurrentTime()}</h5>
            </div>
        </div>

    );
}



setInterval( ()=>{
    render();
}, 1000 )


function render(){
    ReactDOM.render( <App />, document.getElementById("root") );
}

render();