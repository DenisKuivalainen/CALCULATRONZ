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
    this.mmf = this.mmf.bind(this);
    this.mpf = this.mpf.bind(this);
    this.mcf = this.mcf.bind(this);
    this.mrf = this.mrf.bind(this);
  }

  //Записать нажатия кнопок
  //Наверное надо было сделать эррэем, но я об этом подумал в конце, и исправлять уже не было времени.
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

  //Вычислить сумму
  summm() {
    try{
      var summ = this.state.eq;
      let sub =this.state.ch.substring(this.state.ch.length-1);
      if(this.state.ch!=='9' && this.state.ch!=='8' && summ && sub!=='1' && sub!=='2' && sub!=='3') {
        summ=eval(summ) + '';
        this.setState({eq: summ, ch: '9'});
      }
    } catch(error) {
      if (window.confirm('An error caused. Contact the support. Press OK to reload.')) { 
        window.location.reload();
      }
    }
  }

  //Очистить поле 
  rem() {
    this.setState({eq: '', ch: '8'});
  }

  //Удалить один символ
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

  //Запись в память
  msf() {
    const ms = this.state.eq;
    this.setState({mem: ms});
  }

  //Отнять от памяти
  mmf() {
    if(this.state.mem === ''){
      if(this.state.eq.substr(0,1) === '-') {
        let memmin = this.state.eq.substr(1);
        this.setState({mem : memmin});
      } else {
        let memmin ="-" + this.state.eq;
        this.setState({mem : memmin});
      }
    } else{
      if(this.state.eq.substr(0,1) === '-') {
        let memmin = this.state.mem + '+' + this.state.eq.substr(1);
        memmin = eval(memmin) + '';
        this.setState({mem : memmin});
      } else {
        let memmin = this.state.mem + '-' + this.state.eq;
        memmin = eval(memmin) + '';
        this.setState({mem : memmin});
      }
    }
  }

  //Прибавить к памяти
  mpf() {
    if(this.state.mem !== ''){
      let mempl = this.state.mem + "+" + this.state.eq;
      mempl = eval(mempl) + '';
      this.setState({mem : mempl});
    }
    else{
      let mempl =this.state.eq
      this.setState({mem : mempl});
    }
  }

  //Очистить память
  mcf() {
    this.setState({mem : ''});
  }

  //Из памяти в поле счёта
  //Реализованно крайне тупо, но работает... Сейчас 2:33 и мне влом это делать...
  //Хотя это не сложно и я могу это сделать, но если работает и так, то зачем что то менять...
  mrf() {
    let char = this.state.mem;
    let check = '';
    for (let i = 0; i < char.length; i++) {
      if (char[i] === "-" && eval(char)>=0) {check = check + '2'}
      if (char[i] === ".") {check = check + '4'}
      else {check = check + '0'}
    };
    if (this.state.mem.substring(0, 1) === '-' && this.state.ch.substring(this.state.ch.length-1) === '2') {
      check = check.substring(1)
      char = char.substring(1)
      check = this.state.ch.substring(0, this.state.ch.length-1) + '3' + check;
      char = this.state.eq.substring(0, this.state.eq.length-1) + '+' + char;
    } else {
      check = this.state.ch + check;
      char = this.state.eq + char;
    };
    this.setState({ch : check, eq : char});
  }


  //Условие блокировки кнопок ввода в память
  dis1() {
    var res;
    if(this.state.ch!=='9'){res = 1}
    else {res = 0};
    return(res);
  }

  //Условие блокировки вывода из памяти
  dis2() {
    var res;
    let pr =this.state.ch.substring(this.state.ch.length-1)
    if(pr !== '0' && pr !== '4' && pr !== '9' && this.state.mem !== ''){res = 0}
    else {res = 1};
    return(res);
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