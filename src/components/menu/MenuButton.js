import React from 'react';
import styled from 'styled-components';
import { Icons } from 'elements';
import { Transition, config } from 'react-spring';
import { animated } from 'react-spring';

export default function MenuButton({ on, toggle }) {
  return (
    <Transition
      native
      config={config.slow}
      items={on}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}>
      {on =>
        on
          ? props => (
              <AnimatedIconButton style={props} onClick={toggle}>
              <AnimatedIcons
                  style={props}
                  onClick={toggle}
                  color={'#eee'}
                  name={'close'}
                />
              </AnimatedIconButton>
            )
          : props => (
              <AnimatedIconButton style={props} onClick={toggle}>
              <AnimatedIcons
                  style={props}
                  onClick={toggle}
                  color={'#444'}
                  name={'menu'}
                />
              </AnimatedIconButton>
            )
      }
    </Transition>
  );
}

const IconButton = styled.div`
  cursor: pointer;
  top: 1.5vmax;
  right: 1.5vmax;
  position: fixed;
  z-index: 500;
`;

const AnimatedIconButton = animated(IconButton);
const AnimatedIcons = animated(Icons);
