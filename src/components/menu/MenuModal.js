import React from 'react';
import { Transition } from 'react-spring';
import styled from 'styled-components';
import { elevation } from 'utilities';

export default function MenuModal({ on, children }) {
  return (
    <Transition
      items={on}
      from={{
        opacity: 0,
        width: '0vw',
        height: '0vh',
        top: '0vh',
        wrapTop: '0vh',
        borderBottomLeftRadius: '200vmax'
      }}
      enter={{
        opacity: 1,
        width: '100vw',
        height: '100vh',
        wrapTop: '0vh',
        top: '0vh',
        borderBottomLeftRadius: '0vmax'
      }}
      leave={{
        opacity: 1,
        top: '-100vh',
        wrapTop: '-100vh'
      }}>
      {on =>
        on &&
        (props => (
          <DropDown style={props}>
            <MenuWrap style={{ top: `calc(50% + ${props.wrapTop})` }}>
              <MenuItems>Item 1</MenuItems>
              <MenuItems>Item 2</MenuItems>
              <MenuItems>Item 3</MenuItems>
              <MenuItems>Item 4</MenuItems>
            </MenuWrap>
          </DropDown>
        ))
      }
    </Transition>
  );
}

const DropDown = styled.div`
  overflow: hidden;
  background: #444;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MenuItems = styled.div`
cursor: pointer;
  border-radius: 5px;
  ${elevation[3]}
  margin: 2.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50vw;
  min-height: 15vh;
  background-color: teal;
  color: white;
  transition: all .2s ease;

  &:hover {
    ${elevation[4]}
    transform: translateY(-2px);
  }

  &:active {
    ${elevation[3]}
    transform: translateY(-1px);
  }
`;

const MenuWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
