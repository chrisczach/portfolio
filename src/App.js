import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme1 } from './themes';
import { Icons } from 'elements';
import Menu from './components/menu/Menu';
import Section from './components/section/Section';
import Portfolio from './components/portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <>
        <Menu menuItems={menuItems} />
        {menuItems.map(({ bg, title, link, body }) => (
          <Section bg={bg} title={title} link={link}>
            {body}
          </Section>
        ))}
      </>
    );
  }
}

export default App;

const menuItems = [
  { title: 'About', link: 'about', body: 'about body', bg: '#bbb' },
  {
    title: 'Portfolio',
    link: 'portfolio',
    body: (
      <Portfolio
        projects={[
          {
            title: 'Winnie Match',
            link: 'https://winniematch.chrisczach.com',
            repository: 'https://github.com/chrisczach/winniematch',
            description: 'A game built in react.'
          },
          {
            title: 'Winnie Puzzle',
            link: 'https://winniepuzzle.chrisczach.com',
            repository: 'https://github.com/chrisczach/winniepuzzle',
            description: 'A game built in react.'
          }
        ]}
      />
    ),
    bg: '#ddd'
  },
  { title: 'Contact', link: 'contact', body: 'contact body', bg: 'green' }
];
