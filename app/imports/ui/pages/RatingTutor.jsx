import React from 'react';
import { Rates, RateSchema } from '/imports/api/rate/rate';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import NavBar from '../components/NavBar';

/** Renders the Page for adding a document. */
class RatingTutor extends React.Component {

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
      Bert.alert({ type: 'danger', message: `Could not create a comment: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Comment has been succesfully post!' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { tutor, rateYourTutor, wouldSelectThisTutorAgain, comment } = data;
    const owner = Meteor.user().username;
    Rates.insert({ tutor, rateYourTutor, wouldSelectThisTutorAgain, comment, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const menuStyle = { paddingTop: '50px' };
    return (
        <div>
          <NavBar/>
          <div className='background1'>
            <Grid container centered style={menuStyle}>
              <Grid.Column>
                <Header as="h2" textAlign="center">Give a comment to your tutor</Header>
                <AutoForm ref={(ref) => {
                  this.formRef = ref;
                }} schema={RateSchema} onSubmit={this.submit}>
                  <Segment>
                    <SelectField name='tutor'/>
                    <SelectField name='rateYourTutor'/>
                    <SelectField name='wouldSelectThisTutorAgain'/>
                    <TextField name='comment'/>
                    <SubmitField value='Submit'/>
                    <ErrorsField/>
                    <HiddenField name='owner' value='fakeuser@foo.com'/>
                  </Segment>
                </AutoForm>
              </Grid.Column>
            </Grid>
          </div>
        </div>
    );
  }
}

export default RatingTutor;
