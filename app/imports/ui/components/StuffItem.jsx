import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import { Stuffs } from '/imports/api/stuff/stuff';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Deletion failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Session successfully deleted!' });
    }
  }

  /* When the delete button is clicked, remove the corresponding item from the collection. */
  onClick() {
    if (confirm('Are you sure you want to delete this session?')) {
      if (confirm('WAIT! ARE YOU REALLY SURE YOU WANT TO DELETE THIS SESSION!?')) {
        Stuffs.remove(this.props.stuff._id, this.deleteCallback);
      }
      return <Redirect to={'/list'}/>;
    }
    return <Redirect to={'/list'}/>;
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.stuff.tutee}</Table.Cell>
          <Table.Cell>{this.props.stuff.courseName}</Table.Cell>
          <Table.Cell>{this.props.stuff.month}</Table.Cell>
          <Table.Cell>{this.props.stuff.day}</Table.Cell>
          <Table.Cell>{this.props.stuff.time}</Table.Cell>
          <Table.Cell>{this.props.stuff.tutor}</Table.Cell>
          <Table.Cell>{this.props.stuff.style}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.stuff._id}`}>Edit</Link>
          </Table.Cell>
          <Table.Cell>
            <Button basic onClick={this.onClick}>Delete</Button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItem.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StuffItem);
