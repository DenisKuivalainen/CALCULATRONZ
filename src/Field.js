import React from 'react';
import './App.css';

class Field extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
      return(
        <div class="row">
            <input name="result" type="text" class="col-sm-12 col-12 form-control " placeholder=""
            value={this.props.eq} disabled
            />
        </div>
      )
  }
}

export default Field;