import React from 'react';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <footer>
          <div className="footer-background">
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
              <Container>
                <Grid divided inverted stackable>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Header inverted as='h4' content=' CONTACT US'/>
                      <List link inverted>
                        <List.Item as='a' inverted>jiayingf@hawaii.edu</List.Item>
                        <List.Item as='a' inverted>University Of Hawaii at Manoa</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Header inverted as='h4' content='DESCRIPTION'/>
                      <List link inverted>
                        <List.Item > <a href="https://studyclub2018.github.io/">How to access</a></List.Item>
                        <List.Item as='a'>Available Course</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                      <Header as='h4' inverted>
                        CONNECT
                      </Header>
                      <List link inverted>
                        <List.Item><a href="http://courses.ics.hawaii.edu/ics314f18/morea/final-project/
                  experience-final-project-m1.html">
                          Final Project</a>
                        </List.Item>
                        <List.Item>
                          <a href="https://studyclub2018.github.io/">View on Github</a>
                        </List.Item>
                      </List>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Segment>
          </div>
        </footer>
    );
  }
}

export default Footer;
