import React, { Component } from 'react';

export default class Cell extends Component {
  
  // Because we need props in this component we cant use 
  // the new state setting structure.

  constructor(props) {
    // access and call functions from an objects parents
    // using the super keyword.  By passing the (props)
    // to super() we can use "this.props" inside of the
    // constructor.  If you don't add (props) to super()
    // then you can still access this.props in other places
    // without needing to do anything else. 
    // reference: https://stackoverflow.com/questions/39822941/what-does-super-do-without-any-arguments
    super(props)
    this.state = {                // set a state for this instance
      color: this.props.color     // set the state value of "color" 
                                  // with the value passed in through
                                  // props.color coming from matrix.js
                                  // as matrix's key of 'color' which is
                                  // coming from a .map() of the (vals)
                                  // argument, being passed in from the
                                  // genMatrix function, which is from 
                                  // the .map() of the rows of the 
                                  // Matrix.defaultProps named "values"
                                  // and having data named "learnSymbol"
                                  // which is imported at the top of the
                                  // file from './data.js'
    }
  }
  
  // the code below DOES NOT WORK when props are required, 
  // props is not found without the constructor. 
  // is there a fix?

  // state = {
  //   color: this.props.color
  // }


  // create an Arrow function to handle our click
  // handler and set the state and rerender the page through
  // setState()
  // (aka "fat arrow" function...read that name here: 
  // https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/
  clickHandler = () => {
    this.setState({
      color: this.props.selectedColor     // this is passed in under the name of
                                          // "selectedColor" in props from Matrix.js
                                          // and it comes from state in Matrix,
                                          // but can also be changed in the 
                                          // ColorSelector.js and passed up to 
                                          // Matrix.
    })
  }

  render() {
    // console.log(props)
    return (
      <div 
          onClick={this.clickHandler}       // add onClick handler and set the 
          className="cell"                  // callback function to clickHandler()
          style={{                          // note the use of "this." because it
            backgroundColor:                // (the callback) is not defined in the
            this.state.color                // same function (e.g. "render()")
          }}                                // If you look at colorSelector.js where
      >                                     
      </div>                                // we create the callback within its
    )                                       // caller's execution context(?)(scope?)
  }                                         // there is no need for "this"
}                                           // in fact, removing or placing "this."
                                            // breaks the code in either place