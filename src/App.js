import React from 'react';
import './App.css';

class App extends React.Component {
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

  request1(url, vl, id) {
    if (!this.state.load) {
      this.setState({ load: true });

      fetch("/" + url +"?eq=" + this.state.eq + "&vl=" + vl + "&ch=" + this.state.ch + "&id=" + id)
        .then(response => response.json())
        .then(data => this.setState({ eq: data.val, ch: data.nch, load: false }));
    }
  }

  request2(url) {
    if (!this.state.load) {
      this.setState({ load: true });

      fetch("/" + url +"?eq=" + this.state.eq + "&ch=" + this.state.ch + "&mm=" + this.state.mem)
        .then(response => response.json())
        .then(data => this.setState({ eq: data.val, ch: data.nch, mem: data.mem, load: false }));
    }
  }

  request3(url) {
    fetch("/" + url +"?mm=" + this.state.mem + "&ch=" + this.state.ch)
      .then(response => response.json())
      .then(data => {
        if(url === 'dis1') {this.setState({dis1: data.res})};
        return data.res;
      });
    
  }

  // Block save to memory
  disableMemorySave() {
    return this.request3('dis1');
  }

  // Block return from memory
  disableMemoryPaste() {
    return this.request3('dis2');
  }

  // Number not starts with 0
  checkStartWithNull() {
    if(this.state.eq === '') {return('')}
    else {return('0')}
  }

  github() {
    if(this.state.eq === '601/111*3') {
      window.open('https://github.com/DenisKuivalainen/Calculator-react/blob/master/src/App.js')
    }
  }

  render() {
    return (
      <div className="App">
        <div class="row">
          <input name="result" type="text" class="col-sm-12 col-12 form-control " placeholder=""
            value={this.state.eq} disabled
          />
        </div>
        {/* <div class="row">
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={() => this.request2('mcf')} disabled={!this.state.mem}>MC</button>
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={() => this.request2('mrf')} disabled={this.disableMemoryPaste()}>MR</button>
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={() => this.request2('mpf')} disabled={this.disableMemorySave()}>M+</button>
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={() => this.request2('mmf')} disabled={this.state.dis1}>M-</button>
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={() => this.request2('msf')} disabled={this.state.dis1}>MS</button>
          <input name="result" type="text" class="col-sm-7 col-7 form-control" placeholder="Memory" disabled
            value={this.state.mem}
          />
        </div> */}
        <div class="row">
          <button class="col-sm-6 col-6 fap-i" type="button" 
          onClick={() => this.request1('rem', '', '')}>C</button>
          <button class="col-sm-3 col-3 fap-b" type="button" 
          onClick={() => this.request1('back', '', '')}>&larr;</button>
          <button class="col-sm-3 col-3 fap-b" type="button" 
          onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="dv" id="1">/</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 fap-m" type="button" 
          onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="7" id="0">7</button>
          <button class="col-sm-3 col-3 fap-m" type="button" 
          onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="8" id="0">8</button>
          <button class="col-sm-3 col-3 fap-m" type="button" 
          onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="9" id="0">9</button>
          <button class="col-sm-3 col-3 fap-b" type="button" 
          onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="mp" id="1">*</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 fap-m" type="button" 
           onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="4" id="0">4</button>
          <button class="col-sm-3 col-3 fap-m" type="button" 
          onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="5" id="0">5</button>
          <button class="col-sm-3 col-3 fap-m" type="button" 
          onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="6" id="0">6</button>
          <button class="col-sm-3 col-3 fap-b" type="button" 
          onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="mn" id="2">-</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 fap-m" type="button" 
           onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="1" id="0">1</button>
          <button class="col-sm-3 col-3 fap-m" type="button" 
          onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="2" id="0">2</button>
          <button class="col-sm-3 col-3 fap-m" type="button" 
          onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="3" id="0">3</button>
          <button class="col-sm-3 col-3 fap-b" type="button" 
          onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="pl" id="3">✛</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 fap-m" type="button" 
           onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value="dt" id="4">.</button>
          <button class="col-sm-3 col-3 fap-m" type="button" 
          onClick={(e) => this.request1('btn', e.target.value, e.target.id)} value={this.checkStartWithNull()} id={this.checkStartWithNull()}>0</button>
          <button class="col-sm-6 col-6 fap-i" type="button" 
          onClick={() => this.request1('summ', '', '')} id="9">=</button>
        </div>
        {this.github()}
        <span class="label">2020 &#9733; Godlike</span>
      </div>
    );
  }
}

export default App;