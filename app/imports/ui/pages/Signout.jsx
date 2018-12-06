import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Grid } from 'semantic-ui-react';
import NavBar from '../components/NavBar';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    const menuStyle = { paddingTop: '50px' };
    return (
        <div>
          <NavBar/>
          <div className='background1'>
            <Grid container centered style={menuStyle}>
            <Header as="h2" textAlign="center">
              <p>You are signed out.</p>
              <p>Come back when you need help!</p>
            </Header>
            </Grid>
          </div>
        </div>
    );
  }
}
