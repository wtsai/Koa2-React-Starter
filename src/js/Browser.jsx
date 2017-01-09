import React from "react";
import ReactDOM from "react-dom";
import MaterialUI from './MaterialUI.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

require('../css/style.css');
require('../css/theme.less');

injectTapEventPlugin();
ReactDOM.render(<MaterialUI />, document.getElementById('content'));
