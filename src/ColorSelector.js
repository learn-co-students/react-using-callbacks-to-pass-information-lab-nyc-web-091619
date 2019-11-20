import React, { Component } from 'react';

export default class ColorSelector extends Component {

  // this arrow function creates an array of <div> elements that has a 
  // key of {idx} and a style with background color of {str} from the 
  // provided array of hex color codes
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let clickHandler = () => {
        this.props.setSelectedColor(str)       // this is a props whose value points to a function 
      }                                        // in the Matrix.js component above (parent).  When
      return <div                              // it is called it sends the "str" of HTML color code
                  key={idx}                    // back up to Matrix.js
                  className="color-swatch" 
                  style={{backgroundColor: str}}
                  onClick={clickHandler}            // note there is no need for "this." on the
              />                                    // callback function.  Its because we defined
    })                                              // it above inside the same local scope(?) or
  )                                                 // maybe the term is execution context?

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
