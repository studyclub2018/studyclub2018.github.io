import React from 'react';
import { Grid, List } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <footer>
          <div className="footer-background">
            <Grid container columns="3">
              <Grid.Column>
                <h3 id="down-txt">
                NAVIGATION
                </h3>
                <hr/>
                <List>
                  <List.Item>About us</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Contact</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <h3 id="down-txt">
                DESCRIPTION
                </h3>
                <hr/>
                To encourage use of ICSpace among ICS students To minimize risk of inappropriate encounters by requiring
                all meetings to occur in ICSpace. To encourage face-to-face interaction among ICS students
              </Grid.Column>

              <Grid.Column>
                <h3 id="down-txt">
                CONNECT
                </h3>
                <hr/>
                <List>
                  <List.Item><a href="http://courses.ics.hawaii.edu/ics314f18/morea/final-project/
                  experience-final-project-m1.html">
                    Final Project: Milestone 1</a>
                  </List.Item>
                  <List.Item>
                    <a href="https://studyclub2018.github.io/">View on Github</a>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </div>
        </footer>
    );
  }
}

export default Footer;
