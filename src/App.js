import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      eq: '',
      ch: '8',
      mem: '',
    }
    this.rem = this.rem.bind(this);
    this.backk = this.backk.bind(this);
    this.summm = this.summm.bind(this);
    this.msf = this.msf.bind(this);
  }

  handleUserInput = (e) => {
    let sub =this.state.ch.substring(this.state.ch.length-1)+e.target.id
    if (sub==='80' || sub==='00' || sub==='10' || sub==='20' || sub==='30' || sub==='40' ||
        sub==='83' || sub==='03' || sub==='13' ||  sub==='43' || sub==='93' ||
        sub==='01' || sub==='41' || sub==='91' ||
        sub==='04' || sub==='14' || sub==='24' || sub==='34' ||
        sub==='82' || sub==='02' || sub==='12' || sub==='42' || sub==='92')
    {
      const value = this.state.eq + e.target.value;
      const nch =this.state.ch + e.target.id;
      this.setState({eq: value, ch: nch});
    }
    if(sub==='22'){
      const value = this.state.eq.substring(0, this.state.eq.length-1) + '+';
      const nch =this.state.ch.substring(0, this.state.ch.length-1) + '3'
      this.setState({eq: value, ch: nch});
    }
    if(sub==='90' || sub==='94'){
      const value = e.target.value;
      const nch =this.state.ch + e.target.id
      this.setState({eq: value, ch: nch});
    }

    if(sub==='11' || sub==='21' || sub==='31' || sub==='32'){
      const value = this.state.eq.substring(0, this.state.eq.length-1) + e.target.value;
      const nch =this.state.ch.substring(0, this.state.ch.length-1) + e.target.id;
      this.setState({eq: value, ch: nch});
    }
  }

  summm() {
    var summ = this.state.eq;
    let sub =this.state.ch.substring(this.state.ch.length-1);
    if(this.state.ch!=='9' && this.state.ch!=='8' && summ!=='' && sub!=='1' && sub!=='2' && sub!=='3') {
      summ=eval(summ);
      this.setState({eq: summ, ch: '9'});
    }
  }

  rem() {
    this.setState({eq: '', ch: '8'});
  }

  backk = (e) => {
    let sub =this.state.ch.substring(this.state.ch.length-1)
    if(sub!=='8') {
      if(sub==='9') {
        this.setState({eq: '', ch: '8'});
      }
      else {
        const back = this.state.eq.substring(0, this.state.eq.length - 1);
        const nch = this.state.ch.substring(0, this.state.ch.length - 1);
        this.setState({eq: back, ch: nch}); 
      }
    }
  }

  msf() {
    const ms = this.state.eq;
    this.setState({mem: ms});
  }

  dis1() {
    var cc = this.state.ch;
    cc = cc.substring(cc.length-1, cc.length-1)
    var res;
    let a = ''
    for (var i=0; i<cc.length; i++) {
      a = a+cc.charAt(i)+'+'
    }

    if(this.state.ch!=='9'
     || eval(a+'0')!=='8'
     ){res = 'false'}
    else {res = 'true'}
    return(res)

    // if(this.state.ch === "9") {return('true')}
    // else {return('false')}
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
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button">MC</button>
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button">MR</button>
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button">M+</button>
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button">M-</button>
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={this.msf} disabled={this.dis1()}>MS</button>
          <input name="result" type="text" class="col-sm-7 col-7 form-control" placeholder="Memory"
            value={this.state.mem}
          />
        </div>
        <div class="row">
          <button class="col-sm-6 col-6 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} onClick={this.rem}>C</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} onClick={this.backk}>&larr;</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="/" id="1">/</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="7" id="0">7</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="8" id="0">8</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="9" id="0">9</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="*" id="1">*</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
           onClick={this.handleUserInput} value="4" id="0">4</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="5" id="0">5</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="6" id="0">6</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="-" id="2">-</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
           onClick={this.handleUserInput} value="1" id="0">1</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="2" id="0">2</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="3" id="0">3</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="+" id="3">+</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
           onClick={this.handleUserInput} value="." id="4">.</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="0" id="0">0</button>
          <button class="col-sm-6 col-6 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} onClick={this.summm} id="9">=</button>
        </div>
      </div>
    );
  }
}

export default App;
