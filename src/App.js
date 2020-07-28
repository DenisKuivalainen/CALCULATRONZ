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
    }
    this.rem = this.rem.bind(this);
    this.backk = this.backk.bind(this);
    this.summm = this.summm.bind(this);
    this.msf = this.msf.bind(this);
    this.mmf = this.mmf.bind(this);
    this.mpf = this.mpf.bind(this);
    this.mcf = this.mcf.bind(this);
    this.mrf = this.mrf.bind(this);
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
        return data.res;
      });
    
  }

  error() {
    if (window.confirm('An error caused. Contact the support. Press OK to reload.')) { 
      window.location.reload();
    }
  }

  //Записать нажатия кнопок
  handleUserInput = (e) => {
    this.request1('btn', e.target.value, e.target.id);
  }

  //Вычислить сумму
  summm() {
    this.request1('summ', '', '');
  }

  //Очистить поле 
  rem() {
    this.setState({eq: '', ch: '8'});
  }

  //Удалить один символ
  backk = (e) => {
    this.request1('back', '', '');
  }

  //Запись в память
  msf() {
    this.request2('msf');
  }

  //Отнять от памяти
  mmf() {
    this.request2('mmf');
  }

  //Прибавить к памяти
  mpf() {
    this.request2('mpf');
  }

  //Очистить память
  mcf() {
    this.request2('mcf');
  }

  //Из памяти в поле счёта
  mrf() {
    this.request2('mrf');
  }


  //Условие блокировки кнопок ввода в память
  dis1() {
    return this.request3('dis1');
  }

  //Условие блокировки вывода из памяти
  dis2() {
    return this.request3('dis2');
  }

  //Число не начинается с 0
  dis3() {
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
        <div class="row">
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={this.mcf} disabled={!this.state.mem}>MC</button>
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={this.mrf} disabled={this.dis2()}>MR</button>
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={this.mpf} disabled={this.dis1()}>M+</button>
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={this.mmf} disabled={this.dis1()}>M-</button>
          <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={this.msf} disabled={this.dis1()}>MS</button>
          <input name="result" type="text" class="col-sm-7 col-7 form-control" placeholder="Memory" disabled
            value={this.state.mem}
          />
        </div>
        <div class="row">
          <button class="col-sm-6 col-6 btn btn-outline-secondary " type="button" 
          onClick={this.rem}>C</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.backk}>&larr;</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="dv" id="1">/</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="7" id="0">7</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="8" id="0">8</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="9" id="0">9</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="mp" id="1">*</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
           onClick={this.handleUserInput} value="4" id="0">4</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="5" id="0">5</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="6" id="0">6</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="mn" id="2">-</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
           onClick={this.handleUserInput} value="1" id="0">1</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="2" id="0">2</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="3" id="0">3</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value="pl" id="3">✛</button>
        </div>
        <div class="row">
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
           onClick={this.handleUserInput} value="dt" id="4">.</button>
          <button class="col-sm-3 col-3 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} value={this.dis3()} id={this.dis3()}>0</button>
          <button class="col-sm-6 col-6 btn btn-outline-secondary " type="button" 
          onClick={this.handleUserInput} onClick={this.summm} id="9">=</button>
        </div>
        {this.github()}
      </div>
    );
  }
}

export default App;