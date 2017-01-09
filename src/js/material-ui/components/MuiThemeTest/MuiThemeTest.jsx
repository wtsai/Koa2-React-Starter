'use strict';
import React from 'react';
import MuiThemeRender from './MuiThemeRender.jsx';

export default class MuiThemeTest extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render () {
    return MuiThemeRender.call(this, this.props, this.state);
  }
}
