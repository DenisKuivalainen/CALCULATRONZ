import React from 'react';
import './Calc.css';

class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      eq: '',
      ch: '8',
      mem: '',
      load: false,
      dis1: '',
    }
  }

  render() {
      return(
        <div id="calculator">
        <div class="top">
            <span class="clear">C</span>
            <div class="screen"></div>
        </div>
        
        <div class="keys">
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span class="operator">+</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span class="operator">-</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span class="operator">÷</span>
            <span>0</span>
            <span>.</span>
            <span class="eval">=</span>
            <span class="operator">x</span>
        </div>
    </div>
      )
  }
} 

export default Calculator;