import React from 'react';
import axios from 'axios';
import apiMethods from '../helperMethods.js';

class CowInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: ""
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]:  e.target.value })
  }

  onClick = () => {
    apiMethods.addCow(this.state.name, this.state.description, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        this.props.onAdd();
      }
    })
  }

  render() {
    return (
      <div className="cow-input">
        <input className="name-input" onChange={this.onChange} type="text" placeholder="Enter Name" name="name"></input>
        <input className="description-input" onChange={this.onChange} type="text" placeholder="Enter Description" name="description"></input>
        <button className="cow-input-button" onClick={this.onClick.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default CowInput;