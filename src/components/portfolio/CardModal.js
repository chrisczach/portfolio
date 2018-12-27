import React from 'react';
import styled from 'styled-components';
import { Transition, config, interpolate, animated } from 'react-spring';

import { Icons } from 'elements';

export default function CardModal({
  link,
  title,
  shown,
  originX,
  originY,
  targetX,
  targetY,
  toggleModal
}) {
  return (
    <Transition
      native
      items={shown}
      from={{
        loadingOpacity: 1,
        loadingGradient: 0,
        width: '0vw',
        height: '0vh',
        top: `${originY || 0}px`,
        left: `${originX || 0}px`,
        borderRadius: '300vmax'
      }}
      enter={{
        loadingOpacity: 1,
        loadingGradient: 100,
        width: '100vw',
        height: '100vh',
        top: `${targetY || 0}px`,
        left: `${targetX || 0}px`,
        borderRadius: '0vmax'
      }}
      leave={{
        loadingOpacity: 0,
        width: '0vw',
        height: '0vh',
        top: `${originY || 0}px`,
        left: `${originX || 0}px`,
        borderRadius: '300vmax'
      }}>
      {shown =>
        shown &&
        (props => (
          <AnimatedModal style={props}>
            <Title>{title}</Title>
            <CloseButton onClick={toggleModal}>
              <Icons onClick={toggleModal} color={'#eee'} name={'close'} />
            </CloseButton>
            <AnimatedProjectFrame src={link} title={title} />
          </AnimatedModal>
        ))
      }
    </Transition>
  );
}

const Modal = styled.div`
  overflow: hidden;
  max-width: 100vw;
  background: #444;
  position: fixed;
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedModal = animated(Modal);

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.5vmax;
  right: 1.5vmax;
`;

const ProjectFrame = styled.iframe`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: calc(100% - 7vmax);
  border: none;
  background: transparent;
`;

const AnimatedProjectFrame = animated(ProjectFrame);

const Title = styled.div`
  color: #eee;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vmax;
  height: 7vmax;
`;
