import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme1 } from './themes';
import { Icons } from 'elements';
import Menu from './components/menu/Menu';
import Section from './components/section/Section';
import { isAbsolute } from 'path';

class App extends Component {
  render() {
    return (
      <>
        <Menu menuItems={menuItems}/>
        {menuItems.map(({ bg, title, link, body, children }) => <Section bg={bg} title={title} link={link} >
          {body}{children}
        </Section>)}

      </>
    );
  }
}

export default App;

const menuItems = [
  { title: 'About', link: 'about', body: 'about body', bg: '#bbb' },
  { title: 'Portfolio', link: 'portfolio', body: 'portfolio body', bg: '#ddd' },
  {title: 'Contact', link: 'contact', body: 'contact body', bg: 'green'}
]
