import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Menu, Dropdown, Image, Visibility, Segment, Container, fixed } from 'semantic-ui-react';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { margin: '0em', padding: '0em' };
    const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
    if (isAdmin) {
      return (
          <Menu style={menuStyle} attached="top" borderless color='white'>
            <Menu.Item as={NavLink} activeClassName="" exact to="/">
              <Menu.Item><Image size='tiny' avatar src="/images/logo.png"/></Menu.Item>
            </Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>
              List of study sessions</Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>List Users</Menu.Item>
            <Menu.Item position="right">
              {this.props.currentUser === '' ? (
                  <Dropdown text="Login" pointing="top right" icon={'user'}>
                    <Dropdown.Menu>
                      <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                      <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                    </Dropdown.Menu>
                  </Dropdown>
              ) : (
                  <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
                    <Dropdown.Menu>
                      <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                      <Dropdown.Item icon="user circle" text="View my User Profile" as={NavLink} exact
                                     to="/userprofile"/>
                    </Dropdown.Menu>
                  </Dropdown>
              )}
            </Menu.Item>
          </Menu>
      );
    }
    return (
        <Menu style={menuStyle} attached="top" borderless>
          <Visibility
              once={false}
              onBottomPassed={this.showFixedMenu}
              onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
                textAlign='center'
                style={{ menuStyle }}
                vertical
            >
              <Menu
                  fixed={fixed ? 'top' : null}
                  inverted={fixed}
                  pointing={!fixed}
                  secondary={!fixed}
                  size='large'
              >
                <Container style={{ menuStyle }}>
                  <Menu.Item as={NavLink} activeClassName="" exact to="/" style={menuStyle}>
                    <Menu.Item style={menuStyle}><Image size='tiny' avatar src="/images/logo.png"/></Menu.Item>
                  </Menu.Item>
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/create" key='add'>Tutor Session
                  </Menu.Item>
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/list" key='list'>List
                    Tutoring </Menu.Item>
                  <Menu.Item as={NavLink} activeClassName="active" exact to="/ratingtutor" key='ratingtutor'>Rate a
                    tutor
                  </Menu.Item>
                </Container>
              </Menu>
            </Segment>
          </Visibility>
          <Menu.Item position="right">
            {this.props.currentUser === '' ? (
                <Dropdown text="Login" pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                    <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                    <Dropdown.Item icon="user circle" text="View my User Profile" as={NavLink} exact to="/userprofile"/>
                  </Dropdown.Menu>
                </Dropdown>
            )}
          </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
