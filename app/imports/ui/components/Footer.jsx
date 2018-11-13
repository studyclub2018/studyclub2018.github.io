import React from 'react';
import { Grid, List, Input, Label } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <footer>
          <div className="footer-background">
            <Grid container columns="3">
              <Grid.Column>
                NAVIGATION
                <hr />
                <List>
                  <List.Item>About us</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Contact</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                MAIN MENU
                <hr />
                <List>
                  <List.Item>Men</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                CONNECT
                <hr />
                <List>
                  <List.Item>Sign up for the latest updates</List.Item>
                  <List.Item>
                    <Input placeholder="Enter email address" />
                    <Label color="black">Join</Label>
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
