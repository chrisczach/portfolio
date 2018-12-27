import React, { Component, useState, use } from 'react';
import styled from 'styled-components';

export default class ProjectCard extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { title, link, repository, description, toggleModal } = this.props;
    return (
      <Card>
        <h1>{title}</h1>
        <p>{description}</p>
        <div
          onClick={toggleModal}>
          Demo Link
        </div>
        <a href={repository} target="blank">
          Source Code
        </a>
      </Card>
    );
  }
}

const Card = styled.div`
  display: inline-block;
  margin: 1.5vw;
  width: 25vw;
  background-color: white;
`;
