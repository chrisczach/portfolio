import React, { Component, useState, use } from 'react';
import styled from 'styled-components';

export default class ProjectCard extends Component {
  state = {
    x: null,
    y: null,
    viewX: null,
    viewY: null
  };

  currentCard = React.createRef();

  onScroll = () => {
    this.setState(state => {
      const {
        top,
        right,
        bottom,
        left
      } = this.currentCard.current.getBoundingClientRect();
      const viewX = window.innerWidth/2
      const viewY = window.innerHeight/2
      const y = (top + bottom) / 2;
      const x = (left + right) / 2;
      return { x, y, viewX, viewY };
    });
  };
  componentDidMount() {
    this.onScroll();
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('touchmove', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('touchmove', this.onScroll);
  }

  render() {
    const { title, link, repository, description, toggleModal } = this.props;
    const { x, y, viewX, viewY } = this.state;
    return (
      <Card ref={this.currentCard}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div
          onClick={() =>
            toggleModal({
              link,
              title,
              shown: true,
              originX: x,
              originY: y,
              viewX: viewX,
              viewY: viewY
            })
          }>
          Demo Link
        </div>
        <a href={repository} target="blank">
          Source Code
        </a>
        <div>Test ref</div>
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
