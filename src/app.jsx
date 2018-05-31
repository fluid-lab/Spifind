import React from 'react';
import Level1 from './levels/Level1';
import Level2 from './levels/Level2';
import Level3 from './levels/Level3';
import Level4 from './levels/Level4';
import Level5 from './levels/Level5';
import 'normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import styles from "./app.sass"  // Css-module styles

const App = () => (
  <div className='App'>
    <div>
    	<Level3 />
    </div>
  </div>
);

export default App;
