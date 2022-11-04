import React, { Component } from 'react';
import axios from 'axios';
import apiMethods from '../helperMethods.js';
import Header from './Header.jsx';
import CowList from './CowList.jsx';
import SelectedCow from './SelectedCow.jsx';
import CowInput from './CowInput.jsx';
import css from '../style.css';

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
    apiMethods.getCows((err, data) => {
      if (err) {
        console.error(err);
      } else {
        this.setState({ cows: data.data})
      }
    })
  }


  updateSelectedCow(selectedCow) {
    this.setState({ selectedCow: this.state.cows.filter(cow => cow.id === selectedCow)})
  }

  render() {
    return (
      <div className="app">
        <h2>Test</h2>
        <div className="container">
          <Header />
          {this.state.selectedCow.length && <SelectedCow selectedCow={this.state.selectedCow}/>}
          <CowInput onAdd={this.updateCowList.bind(this)}/>
          <CowList
            cowList={this.state.cows}
            selectedCow={this.state.selectedCow}
            updateSelectedCow={this.updateSelectedCow.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default App;