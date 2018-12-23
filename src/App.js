import React, { Component } from 'react';
import {theme1} from './themes';
import {Icon} from './elements'

class App extends Component {
  render() {
    return (<>{theme1.color}<Icon name={'home'} color={'blue'}/></>);
  }
}

export default App;
