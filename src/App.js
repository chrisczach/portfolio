import React, { Component } from 'react';
import styled from 'styled-components';

import { theme1 } from './themes';
import { Icons } from 'elements';
import Menu from './components/menu/Menu';

class App extends Component {
  render() {
    return (
      <>
        {theme1.color}
        <Icons name={'back'} color={'blue'} />
        <Menu />
      </>
    );
  }
}

export default App;


