import React from 'react';

import { Portal } from 'react-portal';
import { Icons } from './elements';

import MenuButton from './MenuButton';
import MenuModal from './MenuModal';
import {Toggle} from './utilities';

//accepts links array

export default function Menu({menuItems}) {
  return (
    <Toggle>
      {({ on, toggle }) => (
        <Portal>
            <MenuButton toggle={toggle} on={on} />
          <MenuModal toggle={toggle} on={on} menuItems={menuItems}></MenuModal>
        </Portal>
      )}
    </Toggle>
  );
}
