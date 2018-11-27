import React from 'react';
import { Grid, Loader, Header, Segment, Form } from 'semantic-ui-react';
import { Stuffs, StuffSchema } from '/imports/api/stuff/stuff';
import { Bert } from 'meteor/themeteorchef:bert';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders the Page for editing a single document. */
class EditAdmin extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { tutee, courseName, month, day, time, tutor, owner, style, _id } = data;
    Stuffs.update(_id, { $set: { tutee, courseName, month, day, time, tutor, owner, style } }, (error) => (error ?
        Bert.alert({ type: 'danger', message: `Update failed: ${error.message} :(` }) :
        Bert.alert({ type: 'success', message: 'Session successfully updated!' })));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Manage tutoring sessions</Header>
            <AutoForm schema={StuffSchema} onSubmit={this.submit} model={this.props.doc}>
              <Segment>
                <TextField name='tutee'/>
                <TextField name='courseName'/>
                <Form>
                  <Form.Group widths='equal'>
                    <SelectField name='month'/>
                    <SelectField name='day'/>
                    <SelectField name='time'/>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group widths='equal'>
                    <SelectField name='tutor'/>
                    <SelectField name='style'/>
                  </Form.Group>
                </Form>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner' value={Stuffs.owner}/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditAdmin.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('StuffAdmin');
  return {
    doc: Stuffs.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditAdmin);
