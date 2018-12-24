import React from 'react';
import styled from 'styled-components';
import { Icons } from 'elements';
import { Transition } from 'react-spring';

export default function MenuButton({ on, toggle }) {
  return (
    <Transition
      items={on}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}>
      {on =>
        on
          ? props => (
              <IconButton style={props} onClick={toggle}>
                <Icons
                  style={props}
                  onClick={toggle}
                  color={'#eee'}
                  name={'close'}
                />
              </IconButton>
            )
          : props => (
              <IconButton style={props} onClick={toggle}>
                <Icons
                  style={props}
                  onClick={toggle}
                  color={'#444'}
                  name={'menu'}
                />
              </IconButton>
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
