'use strict';

/*
function Button(props) {
    if (props.lang === 'it')
      return <button>Ciao!</button>;
    else
      return <button>Hello!</button>;
  }

  export default Button;
*/

import { useState } from 'react';
import { Button } from 'react-bootstrap';

function MyButton(props) {
    let [buttonLang, setButtonLang] = useState(props.lang);
    if (buttonLang === 'it')
        return <Button variant='success' onClick={() => setButtonLang('en')}>Ciao!</Button>;
    else
        return <Button onClick={() => setButtonLang('it')}>Hello!</Button>;
}

export default MyButton;