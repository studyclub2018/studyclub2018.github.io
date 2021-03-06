import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Table, Header, Loader, Grid } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import StuffItemAdmin from '/imports/ui/components/StuffItemAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuffAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const menuStyle = { paddingTop: '50px' };
    return (
        <div>
          <NavBar/>
          <Grid container centered style={menuStyle}>
          <Header as="h2" textAlign="center">List current study sessions</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Tutee</Table.HeaderCell>
                <Table.HeaderCell>Course Name</Table.HeaderCell>
                <Table.HeaderCell>Month</Table.HeaderCell>
                <Table.HeaderCell>Day</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>Tutor</Table.HeaderCell>
                <Table.HeaderCell>Owner</Table.HeaderCell>
                <Table.HeaderCell>Style</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.stuffs.map((stuff) => <StuffItemAdmin key={stuff._id} stuff={stuff} />)}
            </Table.Body>
          </Table>
          </Grid>
</div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStuffAdmin.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('StuffAdmin');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListStuffAdmin);
