import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class StuffItemAdmin extends React.Component {
  render() {
    return (
        <Table.Row>
          <Tabel.Cell>{this.props.stuff.tutee}</Tabel.Cell>
          <Table.Cell>{this.props.stuff.courseName}</Table.Cell>
          <Table.Cell>{this.props.stuff.month}</Table.Cell>
          <Table.Cell>{this.props.stuff.day}</Table.Cell>
          <Table.Cell>{this.props.stuff.time}</Table.Cell>
          <Table.Cell>{this.props.stuff.tutor}</Table.Cell>
          <Table.Cell>{this.props.stuff.owner}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItemAdmin.propTypes = {
  stuff: PropTypes.object.isRequired,
};

export default StuffItemAdmin;
