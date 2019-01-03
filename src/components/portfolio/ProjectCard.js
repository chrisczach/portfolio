import React, { Component, useState, use } from 'react';
import styled from 'styled-components';
import { elevation } from '../../utilities';
import { Icons } from '../../elements';

export default function ProjectCard({
  title,
  link,
  repository,
  description,
  toggleModal,
  index
}) {
  return (
    <Card index={index}>
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
  font-size: 1.75vmax;
  margin: 0 0.75vmax;

  @media (orientation: portrait) {
    font-size: 1.5vmax;
  }
`;
const Description = styled.p`
  color: #666;
  font-weight: 200;
  font-size: 1.5vmax;
  margin: 3vmax 0.75vmax;

  @media (orientation: portrait) {
    font-size: 1vmax;
    margin: 1.5vmax 0.25vmax;
  }
`;

const SourceLink = styled.a`
  color: #0e1e25;
  margin: 0.75vmax;
  font-size: 1vmax;

  @media (orientation: portrait) {
    font-size: 0.75vmax;
  }

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
    width: 50%;
    padding: 0.25vmax;

    font-size: 1.25vmax;
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
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);

  @media (orientation: landscape) {
    height: 15vw;
    width: 15vw;
    transition: background-color .3s ease;
    &:hover {
      background-color: lightsteelblue;
    }

    ${({ index }) => {
      const column =( (index-1) % 6)+1;
      if(index % 2 === 0) {
        return `
        transform: translate(calc((-12.5% - .75vmax)*${column-1}), calc(50% + .75vmax));`
      }

      if(column > 1) {
       return ` transform: translateX(calc((-12.5% - .75vmax)*${column-1}));`
      }

    //   if (index % 4 === 0) {
    //     return `
    //     transform: translate(calc(-62.5% - 2.25vmax), calc(50% + .75vmax));
    // `;
    //   } else if (index % 4 === 3) {
    //     return `
    //     transform: translate(calc(-37.5% - 1.5vmax), 0);
    // `;
    //   } else if (index % 4 === 2) {
    //     return `
    //     transform: translate(calc(-12.5% - .75vmax), calc(50% + .75vmax));
    
    
    // `;
    //   } else {
    //     return `
    // transform: translate(12.5%, 0);
    // `;
    //   }


    }
    }
  }

  @media (orientation: portrait) {
    height: 40vw;
    width: 40vw;
    ${({ index }) => {
      if (index % 2 === 0) {
        return `
        transform: translate(calc(-12.5% - .75vmax), 0);
    
    
    `;
      } else {
        return `
    transform: translate(12.5%, calc(50% + .75vmax));
    `;
      }
    }}
  }
`;
