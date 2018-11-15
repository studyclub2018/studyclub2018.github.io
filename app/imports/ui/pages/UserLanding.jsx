import React from 'react';
import { Grid, Icon, Header, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class UserLanding extends React.Component {
  render() {
    return (
        <div className='background'>
          <Grid container stackable centered columns={2}>

            <Grid.Column textAlign='center'>
              <Icon size='huge' name='student'/>
              <Header as='h1'>
                <Button inverted color='black'>
                  Get a Tutor
                </Button>
              </Header>
              <Header as='h3'>Wassup</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='huge' name='jenkins'/>
              <Header as='h1'>
                <Button inverted color='black'>
                  Become a Tutor
                </Button>
              </Header>
              <Header as='h3'>A great way to make a difference and boost your resume.
                Pick Your Schedule. Pick Your favor Student. Fun and Rewarding. </Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default UserLanding;
