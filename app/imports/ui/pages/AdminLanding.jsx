import React from 'react';
import { Grid, Icon, Header, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import AdminNavBar from '../components/AdminNavBar';

/** A simple static component to render some text for the landing page. */
class AdminLanding extends React.Component {
  render() {
    const menuStyle1 = { marginTop: 120, paddingLeft: 60 };
    const menuStyle2 = { marginTop: 120, paddingRight: 60 };
    return (
        <div>
        <AdminNavBar/>
        <div className='background'>
          <Grid columns={2} divided='vertically'>
            <Grid.Column textAlign='center' style={menuStyle1}>
              <Icon size='massive' name='student'/>
              <Header as='h1'>
                <Button inverted color='black' as={NavLink} exact to="/EditStuff">
                  Edit the study session
                </Button>
              </Header>
              <h2 id="left-txt">Edit a study session.
              </h2>
            </Grid.Column>

            <Grid.Column textAlign='center' style={menuStyle2}>
              <Icon size='massive' name='jenkins'/>
              <Header as='h1'>
                <Button inverted color='black' as={NavLink} exact to="/StuffItemAdmin">
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
}

export default AdminLanding;
