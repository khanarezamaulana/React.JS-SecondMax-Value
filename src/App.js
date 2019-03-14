import React from 'react';

class App extends React.Component {

  // example function which takes an array of an integer as argument 
  // and returns second max value from the input array. If there is no second max return -1.
  secondMax = function (){ 

    // use int arrays
    var arr = [16, 10, 13, 10, 12, 17]; 

    // example if array don't have secondMax
    // var arr = [11, 11, 11]; 

    // example if array don't have value
    // var arr = [];

    // get the max of the array
    var max = Math.max.apply(null, arr); 

    // remove max integer from the array
    arr.splice(arr.indexOf(max), 1);
    
    // if array have secondMax value return secondMax Value
    if (arr[0] < max) {
      return Math.max.apply(null, arr); // get the 2nd max
    }
    // if array don't have secondMax return -1
    else if(arr[0] === max) {
      return (-1)
    }

    // if array don't have Value return -1
    else {
      return (-1)
    }
  };

  render(){
    return(
      <div style={{marginTop: "10%", textAlign: "center"}}>
        <h4>Pasar Polis Front-End Test</h4>
        <h2>{this.secondMax()}</h2>
      </div>
    )
  }
}

export default App;