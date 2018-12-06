import React from 'react';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const menuStyle = { fontSize: 17 };
    const menuStyle1 = { fontSize: 22, paddingBottom: 10 };
    return (
        <footer>
          <div className="footer-background">
            <Segment inverted vertical style={{ padding: '6em 0em', margin: '5em 0em 0em 0em' }}>
              <Container>
                <Grid divided inverted stackable>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Header inverted as='h4' content=' NAVIGATION' style={menuStyle1}/>
                      <List link inverted>
                        <List.Item style={menuStyle} as='a'>Contact Us</List.Item>
                        <List.List>
                        <List.Item as='li' icon='mail'>jiayingf@hawaii.edu</List.Item>
                        <List.Item as='li' icon='mail'>qiqingl@hawaii.edu</List.Item>
                        <List.Item as='li' icon='mail'>cl33@hawaii.edu</List.Item>
                        </List.List>
                        <List.Item style={menuStyle} as='a'>About Us</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Header inverted as='h4' content='DESCRIPTION' style={menuStyle1}/>
                      <List link inverted>
                        <List.Item style={menuStyle} as='a'>How To Access</List.Item>
                        <List.Item style={menuStyle} as='a'>Available Course</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                      <Header as='h4' inverted style={menuStyle1}>
                        CONNECT
                      </Header>
                      <List link inverted style={menuStyle}>
                        <List.Item><a href="http://courses.ics.hawaii.edu/ics314f18/morea/final-project/
                  experience-final-project-m1.html">
                          Final Project: Milestone 1</a>
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
