import React, { useState, Component } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import CardModal from './CardModal';
import { modularScale } from 'polished';
import { Portal } from 'react-portal';

import { Icons } from 'elements';
import { Toggle } from 'utilities';

export default class Portfolio extends Component {
  state = {
    link: null,
    title: null,
    shown: null,
    origin: null
  }


  toggleModal = ({ link, title, shown, origin }) => {
    this.setState({link, title, shown, origin})

  };

  

  render() {
    const { projects } = this.props;
    const projectCards = projects.map(
      ({ title, link, repository, description }) => (
        <ProjectCard
          toggleModal={()=> this.toggleModal({link, title, shown: true, origin: 'need to add'})}
          title={title}
          link={link}
          repository={repository}
          description={description}
        />
      )
    );
    
    const { link, title, shown, origin } = this.state;

    return (
      <>
        {projectCards}

        <Portal>
          <CardModal
            link={link}
            title={title}
            shown={shown}
            origin={origin}
          />
        </Portal>

      </>
    );


  }
  
}
