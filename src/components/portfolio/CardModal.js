import React from 'react';
import styled from 'styled-components';
import { Transition, config } from 'react-spring';

export default function CardModal({ link, title, shown, origin }) {
  return <Modal>this is modal Link: {link} Title: {title} Shown: {shown} origin: {origin}</Modal>;
}

const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
`
