import React from 'react';
import { Grid, Icon, Header, Button } from 'semantic-ui-react';
import Footer from '../components/Footer';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const menuStyle1 = { marginTop: 120, paddingLeft: 60 };
    const menuStyle2 = { marginTop: 120, paddingRight: 60 };
    return (
        <div className='background'>
          <Grid columns={2} divided='vertically'>

            <Grid.Column textAlign='center' style={menuStyle1}>
              <Icon size='massive' name='student'/>
              <Header as='h1'>
                <Button inverted color='black'>
                  Get a Tutor
                </Button>
              </Header>
              <h2 id="left-txt">Varsity Tutors is here to help. Tutoring available 24/7!
                In-School 1-on-1
                Tutoring. Personally-Tailored. At Your Convenience.
              </h2>
            </Grid.Column>

            <Grid.Column textAlign='center' style={menuStyle2}>
              <Icon size='massive' name='jenkins'/>
              <Header as='h1'>
                <Button inverted color='black'>
                  Become a Tutor
                </Button>
              </Header>
              <h2 id="left-txt">A great way to make a difference and boost your resume.
                Pick Your Schedule. Pick Your favor Student. Fun and Rewarding.
              </h2>
            </Grid.Column>
          </Grid>
        <Footer/>
        </div>
    );
  }
}

export default Landing;
