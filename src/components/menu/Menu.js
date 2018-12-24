import React from 'react';

import { Portal } from 'react-portal';
import { Icons } from 'elements';

import MenuButton from './MenuButton';
import MenuModal from './MenuModal';
import {Toggle} from 'utilities';

//accepts links array

export default function Menu(props) {
  return (
    <Toggle>
      {({ on, toggle }) => (
        <Portal>
            <MenuButton toggle={toggle} on={on} />
          <MenuModal on={on}>{props.children}</MenuModal>
        </Portal>
      )}
    </Toggle>
  );
}
