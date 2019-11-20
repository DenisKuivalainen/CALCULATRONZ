import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      eq: '',
    }
    this.rem = this.rem.bind(this);
    this.backk = this.backk.bind(this);
    this.summm = this.summm.bind(this);
  }

  handleUserInput = (e) => {
    const value = this.state.eq + e.target.value;
    this.setState({eq: value});
  }

  summm() {
    var summ = this.state.eq;
    if(summ!=='') {summ=eval(summ)};
    this.setState({eq: summ});
  }

  rem () {
    this.setState({eq: ''});
  }

  backk () {
    const back = this.state.eq.substring(0, this.state.eq.length - 1);
    this.setState({eq: back});
  }

  render() {
    return (
      <div className="App">
        <div class="row">
          <input name="result" type="text" class="col-sm-12 col-12 form-control" placeholder=""
            value={this.state.eq}
          />
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} onClick={this.rem}>C</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} onClick={this.backk}>&larr;</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="9">9</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="/">/</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="7">7</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="8">8</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="9">9</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="*">*</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
           onClick={this.handleUserInput} value="4">4</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="5">5</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="6">6</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="-">-</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
           onClick={this.handleUserInput} value="1">1</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="2">2</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="3">3</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="+">+</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
           onClick={this.handleUserInput} value=".">.</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="0">0</button>
          <button class="col-sm-6 col-6 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} onClick={this.summm}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
