import React from 'react';
import './App.css';

class Memory extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return(
            <div class="row">
            <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={this.mcf} disabled={!this.props.mem}>MC</button>
            <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={this.mrf} disabled={this.dis2()}>MR</button>
            <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={this.mpf} disabled={this.dis1()}>M+</button>
            <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={this.mmf} disabled={this.dis1()}>M-</button>
            <button class="col-sm-1 col-1 btn btn-outline-secondary m" type="button" onClick={this.msf} disabled={this.dis1()}>MS</button>
            <input name="result" type="text" class="col-sm-7 col-7 form-control" placeholder="Memory" disabled
                value={this.props.mem}
            />
            </div>
        )
    }

      //Запись в память
  msf() {
    this.props.request2('msf');
  }

  //Отнять от памяти
  mmf() {
    this.props.request2('mmf');
  }

  //Прибавить к памяти
  mpf() {
    this.props.request2('mpf');
  }

  //Очистить память
  mcf() {
    this.props.request2('mcf');
  }

  //Из памяти в поле счёта
  mrf() {
    this.props.request2('mrf');
  }


  //Условие блокировки кнопок ввода в память
  dis1() {
    return this.props.request3('dis1');
  }

  //Условие блокировки вывода из памяти
  dis2() {
    return this.props.request3('dis2');
  }
}

export default Memory;