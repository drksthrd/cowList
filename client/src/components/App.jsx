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
    apiMethods.getCows((err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log('da data: ', data.data);
        this.setState({ cows: data.data})
      }
    })
  }


  updateSelectedCow(selectedCow) {
    this.setState({ selectedCow: this.state.cows.filter(cow => cow.id === selectedCow)})
  }

  render() {
    return (
      <div>
        <Header />
        <SelectedCow selectedCow={this.state.selectedCow}/>
        <CowInput onAdd={this.updateCowList.bind(this)}/>
        <CowList
          cowList={this.state.cows}
          selectedCow={this.state.selectedCow}
          updateSelectedCow={this.updateSelectedCow.bind(this)}
        />
      </div>
    )
  }
}

export default App;