import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const menuStyle1 = { marginTop: 120, paddingLeft: 60 };
    const menuStyle2 = { marginTop: 120, paddingRight: 60 };
    return (
        <div>
          <NavBar/>
        <div className='background'>
          <Grid columns={2} divided='vertically'>
            <Grid.Column textAlign='center' style={menuStyle1}>
              <Icon size='massive' name='student'/>
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
              <Icon size='massive' name='jenkins'/>
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
                      Study Club is an application for UHM ICS students
                      to self-organize face-to-face study groups around
                      a course and/or specific homework or project topic.
                    </p>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                      WHY?
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                      ICS students often spend more time than they need on
                      their homework and don’t learn the material as effectively as they could,
                      because they study alone and do not leverage the power of face-to-face study
                      groups with peer mentors.
                    </p>
                  </Grid.Column>
                  <Grid.Column floated='right' width={6}>
                    <Image bordered rounded size='big' src='/images/pic1.jpg'/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column textAlign='center'>
                    <Button primary size='huge'>Create a Study Session Now!</Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Segment style={{ padding: '0em' }} vertical>
              <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                  <Grid.Column style={{ paddingBottom: '3em', paddingTop: '3em' }}>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                      "What a Company"
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                      "I shouldn't have gone with their competitor."
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                      <Image avatar src='/images/avatar/large/nan.jpg'/>
                      <b>Nan</b> Chief Fun Officer Acme Toys
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
                  Instead of focusing on content creation and hard work, we have learned how to master the
                  art of doing nothing by providing massive amounts of whitespace and generic content that
                  can seem massive, monolithic and worth your attention.
                </p>
                <Button primary as='a' size='large'>
                  Read More
                </Button>
                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                  <a href='#'>Case Studies</a>
                </Divider>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Did We Tell You About Our Bananas?
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                  it's really true. It took years of gene splicing and combinatory DNA research, but our
                  bananas can really dance.
                </p>
                <Button primary as='a' size='large'>
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

export default Landing;
