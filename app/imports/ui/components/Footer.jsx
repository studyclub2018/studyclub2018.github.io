import React from 'react';
import { Menu, Container, Flag } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer>
          <div style={divStyle} className="ui aligned container">
              <Container>
                <Menu.Item fitted><Flag name='us'/></Menu.Item>
                <Menu.Item fitted>Change Region</Menu.Item>
                <Menu.Item> | </Menu.Item>
                <Menu.Item>English</Menu.Item>
              </Container>
          </div>
        </footer>
    );
  }
}

export default Footer;
