import React from 'react';
import { Grid, Icon, Header, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const menuStyle = { marginTop: 60 };
    return (
        <div className='background'>
          <Grid container stackable centered columns={2}>

            <Grid.Column textAlign='center'>
              <Icon size='massive' name='student' style={menuStyle}/>
              <Header as='h1'>
                <Button inverted color='black'>
                  Get a Tutor
                </Button>
              </Header>
              <Header as='h3'>Varsity Tutors is here to help. Tutoring available 24/7!
                In-School 1-on-1
                Tutoring. Personally-Tailored. At Your Convenience.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon size='massive' name='jenkins' style={menuStyle}/>
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

export default Landing;
