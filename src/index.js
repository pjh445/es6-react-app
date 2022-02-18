/*import React from 'react';
import ReactDOM from 'react-dom';

const myArray = ['사과', 'banana', 'orange','포도'];

const myList = myArray.map((item) => <p>{item}</p>);

ReactDOM.render(myList, document.getElementById('root'));*/

import React from "react";
import ReactDOM from "react-dom";

function Hello(props) {
  return <h1>Hello World!</h1>;
}

ReactDOM.render(<Hello />, document.getElementById("root"));