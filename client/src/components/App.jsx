import React, { Component } from 'react';
import axios from 'axios';
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
    axios('/api/cows')
    .then(data => {
      this.setState({ cows: data })
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
    return (
      <div>
        <Header />
        <SelectedCow selectedCow={this.state.selectedCow}/>
        <CowInput />
        <CowList cowList={this.state.cows}/>
      </div>
    )
  }
}

export default App;