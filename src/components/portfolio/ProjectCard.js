import React, { Component, useState, use } from 'react';
import styled from 'styled-components';

export default function ProjectCard({ title, link, repository, description, toggleModal }) {

    return (
      <Card>
        <h1>{title}</h1>
        <p>{description}</p>
        <div
          onClick={({ clientX, clientY }) =>
            toggleModal({
              link,
              title,
              shown: true,
              originX: clientX,
              originY: clientY,
            })
          }>
          Demo Link
        </div>
        <a href={repository} target="blank">
          Source Code
        </a>
      </Card>
    );
  }


const Card = styled.div`
  display: inline-block;
  margin: 1.5vw;
  width: 25vw;
  background-color: white;
`;
