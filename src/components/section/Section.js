import React from 'react';
import styled from 'styled-components';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';
configureAnchors({ scrollDuration: 400 })

export default function Section({ bg, title, children, body, link }) {
  return (
    <SectionWrapper backgroundColor={bg}>
      <ScrollableAnchor id={link}>
        <Header>{title}</Header>
      </ScrollableAnchor>
      {body}
      {children}
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: ${props => props.backgroundColor};
`;

const Header = styled.header`
  font-size: 5vmax;
`;


