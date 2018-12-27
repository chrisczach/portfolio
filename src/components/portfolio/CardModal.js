import React from 'react';
import styled from 'styled-components';
import { Transition, config } from 'react-spring';

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
    <Modal x={originX} y={originY} targetX={targetX} targetY={targetY}>
      <div onClick={toggleModal}>
        <Icons
          onClick={toggleModal}
          color={'#eee'}
          name={'close'}
        />
      </div>
    </Modal>
  );
}

const Modal = styled.div`
  background: white;
  position: fixed;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  transform: translate(-50%, -50%);
  z-index: 5000;
`;
