import React, { useState, Component } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import CardModal from './CardModal';
import { modularScale } from 'polished';
import { Portal } from 'react-portal';

import { Icons } from '../../elements';
import { Toggle } from '../../utilities';

export default class Portfolio extends Component {
  state = {
    link: null,
    title: null,
    shown: null,
    originX: null,
    originY: null,
    viewX: null,
    viewY: null
  };

  toggleModal = ({ link, title, shown, originX, originY, viewX, viewY }) => {
    this.setState(state => {
      if (shown === false) {
        return { ...state, shown };
      } else {
        return { link, title, shown, originX, originY, viewX, viewY };
      }
    });
  };

  onScroll = () => {
    this.setState(state => {
      const viewX = window.innerWidth / 2;
      const viewY = window.innerHeight / 2;
      return { viewX, viewY };
    });
  };
  componentDidMount() {
    this.onScroll();
    window.addEventListener('resize', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onScroll);
  }

  render() {
    const { projects } = this.props;
    const projectCards = projects.map(
      ({ title, link, repository, description }, index) => (
        <ProjectCard
          index={index + 1}
          toggleModal={this.toggleModal}
          title={title}
          link={link}
          repository={repository}
          description={description}
        />
      )
    );

    const { link, title, shown, originX, originY, viewX, viewY } = this.state;

    return (
      <>
        <ProjectGrid>{projectCards}</ProjectGrid>
        <Portal>
          <CardModal
            toggleModal={() => this.toggleModal({ shown: false })}
            link={link}
            title={title}
            shown={shown}
            originX={originX}
            originY={originY}
            targetX={viewX}
            targetY={viewY}
          />
        </Portal>
      </>
    );
  }
}

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5vmax 0;
  filter: drop-shadow(0px 1px 3px #aaa) drop-shadow(0px 3px 12px #eee) ;
  margin: 6vmax auto 28vw 1.5vmax;
  transform: translateX(1.5vmax);

  @media (orientation: portrait) {
    grid-template-columns: repeat(2, 1fr);
    margin: -4.5vmax auto 28vw auto;
  }
`;
