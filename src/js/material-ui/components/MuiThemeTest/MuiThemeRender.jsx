'use strict';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500, pinkA200, cyan700, grey100, grey300, grey400, grey500} from 'material-ui/styles/colors';
import {deepOrange500, white, darkBlack, fullBlack} from 'material-ui/styles/colors';
import {green100, green500, green700} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import AppBarIconMenu from '../AppBarIconMenu/AppBarIconMenu.jsx';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

// http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
      textColor: cyan500,
      primary1Color: green500,
      primary2Color: green700,
      primary3Color: green100,
      accent1Color: deepOrange500,
      accent2Color: grey100,
      accent3Color: grey500,
      textColor: darkBlack,
      alternateTextColor: white,
      canvasColor: white,
      borderColor: grey300,
      disabledColor: fade(darkBlack, 0.3),
      pickerHeaderColor: cyan500,
      clockCircleColor: fade(darkBlack, 0.07),
      shadowColor: fullBlack,
    },
    appBar: {
      height: 50,
    },
  });

//export default class MuiThemeTest3 extends React.Component {
export default function (props, state) {
  const standardActions = (
    <FlatButton
      label="Ok"
      primary={true}
      onTouchTap={this.handleRequestClose}
    />
  );

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={styles.container}>
        <Dialog
          open={this.state.open}
          title="Super Secret Password"
          actions={standardActions}
          onRequestClose={this.handleRequestClose}
        >
          1-2-3-4-5
        </Dialog>
        <AppBarIconMenu/>
        <h1>Material-UI</h1>
        <h2>example project</h2>
        <RaisedButton
          label="Super Secret Password"
          secondary={true}
          onTouchTap={this.handleTouchTap}
        />
      </div>
    </MuiThemeProvider>
  );
}
