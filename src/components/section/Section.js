import React from 'react';
import styled from 'styled-components';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import { transparentize } from 'polished';

configureAnchors({scrollDuration: 500 });

export default function Section({ bg, title, children, link, columns }) {
  return (
    <SectionWrapper backgroundColor={bg}>
      <ScrollableAnchor id={link}>
        <Header>{title}</Header>
      </ScrollableAnchor>
      {children}
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
overflow: hidden;
  min-height: 100vh;
  background: ${props => transparentize(.75, props.backgroundColor)};
`;

const Header = styled.header`
  margin-left: 1.5vmax;
  font-size: 5vmax;
`;
