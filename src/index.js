import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import learnSymbol from './data.js'
import Matrix from './Matrix.js'

// Render the matrix by taking the value of the learnSymbol, which 
// points to ./data.js an array of arrays of HTML color codes
ReactDOM.render(<Matrix values={learnSymbol} />, document.getElementById('root'));
