import React, { Component } from 'react';
import axios from 'axios';
import apiMethods from '../helperMethods.js';
import Header from './Header.jsx';
import CowList from './CowList.jsx';
import SelectedCow from './SelectedCow.jsx';
import CowInput from './CowInput.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [],
      selectedCow: {}
    }
  }

  componentDidMount() {
    this.updateCowList();
  }

  updateCowList() {
    console.log('called!');
    apiMethods.getCows((err, data) => {
      if (err) {
        console.error(err);
      } else {
        this.setState({ cows: data.data})
      }
    })
  }




  render() {
    return (
      <div>
        <Header />
        <SelectedCow selectedCow={this.state.selectedCow}/>
        <CowInput onAdd={this.updateCowList.bind(this)}/>
        <CowList cowList={this.state.cows}/>
      </div>
    )
  }
}

export default App;