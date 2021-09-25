import { useState } from 'react';

const Switch = () => {
  const[toggle, setToggle] = useState(false); 

  const flipTheSwitch = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };

  return (
    <div>
        <h1>The switch is "{toggle ? `On` : `Off`}" now.</h1>
        <button type="button" onClick={flipTheSwitch}>Turn {!toggle ? `On` : `Off`} the Switch</button>
    </div>
  )
};

export default Switch;