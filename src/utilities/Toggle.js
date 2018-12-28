import { useState } from 'react';

//use to wrap component to expose 'on' property and 'toggle' method
// to use, wrap component in anonymous function passing in (on, toggle)
export default function Toggle({ initialState = false, children } = {}) {
  const [on, setOn] = useState(initialState);
  const toggle = () => setOn(!on);
  return children({on, toggle});
}
