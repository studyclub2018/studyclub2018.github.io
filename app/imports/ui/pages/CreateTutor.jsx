import React from 'react';
import { Stuffs, StuffSchema } from '/imports/api/stuff/stuff';
import { Grid, Segment, Header, Form } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';


/** Renders the Page for adding a document. */
class CreateTutor extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Could not create a study session: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Study session succesfully created!' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { courseName, month, day, time, tutor, style } = data;
    const owner = Meteor.user().username;
    Stuffs.insert({ courseName, month, day, time, owner, tutor, style }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Create a tutoring session</Header>
            <AutoForm ref={(ref) => { this.formRef = ref; }} schema={StuffSchema} onSubmit={this.submit}>
              <Segment>
                <TextField name='tutee'/>
                <TextField name='courseName'/>
                <Form>
                  <Form.Group widths='equal'>
                    <SelectField name='month' decimal={false}/>
                    <SelectField name='day' decimal={false}/>
                    <SelectField name='time' decimal={false}/>
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
                <HiddenField name='owner' value='fakeuser@foo.com'/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default CreateTutor;
