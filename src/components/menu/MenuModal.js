import React from 'react';
import { Transition, config, animated, interpolate } from 'react-spring';
import styled from 'styled-components';
import { elevation } from '../../utilities';

export default function MenuModal({ on, toggle, menuItems }) {
  const orientation =
    window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
  return (
    <Transition
      native
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
        wrapTop: '-100vh',
        borderBottomLeftRadius: '3vmax',
        borderBottomRightRadius: '3vmax'
      }}>
      {on =>
        on &&
        (props => (
          <AnimatedDropDown style={props}>
            <AnimatedMenuWrap style={{ top: `calc(50% + ${props.wrapTop})` }}>
              {menuItems.map(({ link, title }) => (
                <MenuItems key={title}>
                  <Link onClick={toggle} href={`#${link}`} />
                  {title}
                </MenuItems>
              ))}
            </AnimatedMenuWrap>
          </AnimatedDropDown>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 700px) {
    height: 10vh;
  }
`;

const AnimatedDropDown = animated(DropDown);

const MenuItems = styled.div`
  position: relative;
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
  transition: all 0.2s ease;

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

const AnimatedMenuWrap = animated(MenuWrap);

const Link = styled.a`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 30000;
  display: block;
`;
