import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image, Loader,
  Segment,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Users } from '/imports/api/stuff/user.js';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const menuStyle1 = { marginTop: 120, paddingLeft: 60 };
    const menuStyle2 = { marginTop: 120, paddingRight: 60 };
    const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
    if (isAdmin) {
      return (
          <div>
            <NavBar/>
            <div className='background'>
              <Grid columns={2} divided='vertically'>
                <Grid.Column textAlign='center' style={menuStyle1}>
                  <Icon size='massive' name='edit' inverted/>
                  <Header as='h1'>
                    <Button inverted color='black' as={NavLink} activeClassName="active" exact to="/create" key='add'>
                      Add a study session
                    </Button>
                  </Header>
                  <h2 id="left-txt">create a study session for your students.
                  </h2>
                </Grid.Column>

                <Grid.Column textAlign='center' style={menuStyle2}>
                  <Icon size='massive' name='calendar alternate' inverted/>
                  <Header as='h1'>
                    <Button inverted color='black' as={NavLink} activeClassName="active" exact to="/admin" key='admin'>
                      View current study session list.
                    </Button>
                  </Header>
                  <h2 id="left-txt">View the upcoming study session list.
                  </h2>
                </Grid.Column>
              </Grid>
              <Footer/>
            </div>
          </div>
      );
    }
    return (
        <div>
          <NavBar/>
          <div className='background'>
            <Grid columns={2} divided='vertically'>
              <Grid.Column textAlign='center' style={menuStyle1}>
                <Icon inverted size='massive' name='student'/>
                <Header as='h1'>
                  <Button inverted color='black' as={NavLink} exact to="/signin">
                    Get a Tutor
                  </Button>
                </Header>
                <h2 id="left-txt">Varsity Tutors is here to help. Tutoring available 24/7!
                  In-School 1-on-1
                  Tutoring. Personally-Tailored. At Your Convenience.
                </h2>
              </Grid.Column>
              <Grid.Column textAlign='center' style={menuStyle2}>
                <Icon inverted size='massive' name='jenkins'/>

                <Header as='h1'>
                  <Button inverted color='black' as={NavLink} exact to="/signin">
                    Become a Tutor
                  </Button>
                </Header>
                <h2 id="left-txt">A great way to make a difference and boost your resume.
                  Pick Your Schedule. Pick Your favor Student. Fun and Rewarding.
                </h2>
              </Grid.Column>
            </Grid>

            <Container>
              <Segment style={{ padding: '20em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <Header as='h3' style={{ fontSize: '2em' }}>
                        We Help ICS Students
                      </Header>
                      <p style={{ fontSize: '1.33em' }}>
                        Study Club is an application for UHM ICS students to self-organize face-to-face study groups
                        around a course and/or specific homework or project topic.
                      </p>
                      <Header as='h3' style={{ fontSize: '2em' }}>
                        WHY?
                      </Header>
                      <p style={{ fontSize: '1.33em' }}>
                        ICS students often spend more time than they need on their homework and don’t learn the
                        material
                        as effectively as they could, because they study alone and do not leverage the power of
                        face-to-face study groups with peer mentors.
                      </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                      <Image bordered rounded size='big' src='/images/pic1.jpg'/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column textAlign='center'>
                      <Button primary size='huge' as={NavLink} exact to="/create">Create a Study Session Now!</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                  <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '3em', paddingTop: '3em' }}>
                      <Header as='h3' style={{ fontSize: '2em' }}>
                        What a Great Study Club
                      </Header>
                      <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                      <Header as='h3' style={{ fontSize: '2em' }}>
                        It has never been late to join the study club.
                      </Header>
                      <p style={{ fontSize: '1.33em' }}>
                        <Image size='tiny' avatar src='/images/amanda.jpg'/>
                        <b>Amanda Feng</b> Chief Officer
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    Breaking The Grid, Grabs Your Attention
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    To use Study Club, a student must login and set up their profile. The profile enables each student
                    to
                    list courses they have taken and for which they are willing to attempt to provide help (sensei),
                    and
                    courses they are currently taking and for which they might need help (grasshopper). Thus, all
                    students
                    are sensei in some courses and grasshoppers in other courses. Each student must also provide a
                    head
                    shot so that they can be visually identified.
                </p>
                <Button primary size='large' as={NavLink} exact to="/signin">
                  Join Us Today!
                </Button>
                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '5em 0em', textTransform: 'uppercase' }}
                >
                  <a href='#'>More</a>
                </Divider>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Did We Tell You About Our Organization?
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes I know you hardly know us. We are a non-profit organization! You can sign up an account for free.
                  By the way, this is a good chance for you to interact with different people. Don't miss us!
                </p>
                <Button primary size='large' as={NavLink} exact to="/signin">
                  I'm Still Quite Interested
                </Button>
              </Container>
            </Segment>
          </Container>
          <Footer/>
        </div>
        </div>
    );
  }
}

Landing.propTypes = {
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('User');
  return {
    users: Users.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Landing);
