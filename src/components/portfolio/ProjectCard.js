import React, { Component, useState, use } from 'react';
import styled from 'styled-components';
import { elevation } from '../../utilities';
import { Icons } from '../../elements';

export default function ProjectCard({
  title,
  link,
  repository,
  description,
  toggleModal
}) {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <DemoButton
        onClick={({ clientX, clientY }) =>
          toggleModal({
            link,
            title,
            shown: true,
            originX: clientX,
            originY: clientY
          })
        }>
        Demo {Icons({ name: 'rightArrow', size: '2vmax', color: '#eee' })}
      </DemoButton>
      <SourceLink href={repository} target="blank">
        Source Code
      </SourceLink>
    </Card>
  );
}

const Title = styled.h1`
  color: #222;
  font-weight: 300;
  font-size: 2vmax;
  margin: 0 0.75vmax;
`;
const Description = styled.p`
  color: #666;
  font-weight: 200;
  font-size: 1.5vmax;
  margin: 3vmax 0.75vmax;
`;

const SourceLink = styled.a`
  color: #0e1e25;
  margin: 0.75vmax;
  font-size: 1vmax;

  &:hover {
    color: blue;
  }
`;

const DemoButton = styled.div`
  border-radius: 5px;
  padding: 0.25vmax 0.75vmax;
  cursor: pointer;
  background: #444;
  color: #eee;
  font-size: 1.25vmax;
  display: flex;
  justify-content: center;
  align-items: center;
  ${elevation[2]}

  width: 50%;

  @media (orientation: portrait) {
    width: 75%;
    padding: 0.75vmax 1.5vmax;

    font-size: 1.5vmax;
  }

  &:hover {
    ${elevation[3]}
    box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 1px 20px orange;
  }

  &:active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px orange;
  }
`;

const Card = styled.div`
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.5vmax;
  ${elevation[2]}
  transition: all .2s;

  &:hover {
    ${elevation[3]}
  }

  &:active {
    ${elevation[2]}
  }
`;
