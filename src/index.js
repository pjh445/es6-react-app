import React from 'react';
import ReactDOM from 'react-dom';

const myArray = ['사과', 'banana', 'orange','포도'];

const myList = myArray.map((item) => <p>{item}</p>)

ReactDOM.render(myList, document.getElementById('root'));
