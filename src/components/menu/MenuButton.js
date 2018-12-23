import React from 'react';

import { Icons } from 'elements';
import { Transition } from 'react-spring';

export default function MenuButton({on, toggle}) {
  return (
          <Transition
            items={on}
            from={{ position: 'absolute', opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}>
            {on =>
              on
                ? props => (
                    <div style={props} onClick={toggle}>
                      <Icons style={props} onClick={toggle} name={'close'} />
                    </div>
                  )
                : props => (
                    <div style={props} onClick={toggle}>
                    <Icons style={props} onClick={toggle} name={'menu'} />
                    </div>
                  )
            }
          </Transition>);
}
