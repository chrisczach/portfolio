import React from 'react'
import Toggle from 'utilities/Toggle';
import MenuButton from './MenuButton';

export default function Menu() {
  return (
    <Toggle>
      {({ on, toggle }) => (
        <>
        <MenuButton on={on} toggle={toggle} />
        <div>{on ? 'Menu Shown' : 'Menu Hidden'}</div>
      </>
      )}
      
    </Toggle>
  )
}
