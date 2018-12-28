import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//to use first add a div width an id to index.html then pass that as prop id
const portalRoot = document.getElementById('menu-root');

//Import Portal and use to wrap component to be taken out of normal flow
export default class Portal extends Component {
  el = <div />;

  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };
  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  };
  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
