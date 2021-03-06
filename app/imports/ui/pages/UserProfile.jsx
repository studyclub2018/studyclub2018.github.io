import React from 'react';
import { Users, UserSchema } from '/imports/api/stuff/user';
import { withTracker } from 'meteor/react-meteor-data';
import { Card, Image, Button, Form, Grid } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SelectField from 'uniforms-semantic/SelectField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import SubmitField from 'uniforms-semantic/SubmitField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

/** A simple static component to render some text for the landing page. */
class UserProfile extends React.Component {
  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    console.log(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Could not update the user profile: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'User profile succesfully updated!' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { firstName, lastName, bio, instagram, facebook, interest, course, position, _id } = data;
    Users.update(_id, {
      $set: {
        firstName,
        lastName,
        bio,
        instagram,
        facebook,
        interest,
        course,
        position,
      },
    }, (error) => (error ?
        Bert.alert({ type: 'danger', message: `Could not update the user profile: ${error.message}` }) :
        Bert.alert({ type: 'success', message: 'User profile succesfully updated!' })));
  }

  render() {
    const menuStyle = { paddingTop: '50px' };
    return (
        <div>
          <NavBar/>
          <div className='background1'>
            <Grid Container style={menuStyle}>
              <Grid columns={2} centered celled='internally'>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Card>
                      <Image src="images/matthew.png"/>
                      <Card.Content>
                        <Card.Header>
                          {this.props.currentUser}
                        </Card.Header>
                        <Card.Meta><span className='date'>Joined in 2018</span>
                        </Card.Meta>
                      </Card.Content>
                      <Card.Content extra>
                        <a>
                          <Button floated={'right'} size={'mini'}>
                            Change Password
                          </Button>
                          <Button floated={'left'} size={'mini'}>
                            Change Email
                          </Button>
                        </a>
                      </Card.Content>
                    </Card>
                  </Grid.Column>

                  <Grid.Column widths='equal'>
                    <AutoForm ref={(ref) => {
                      this.formRef = ref;
                    }} schema={UserSchema} onSubmit={this.submit}>
                      <Form>
                        <Form.Group widths='equal'>
                          <TextField fluid label='First name' placeholder='First name' name='firstName'/>
                          <TextField fluid label='Last name' placeholder='Last name' name='lastName'/>
                        </Form.Group>
                        <Form.Group widths='equal'>
                          <SelectField label='Position' name='position'/>
                        </Form.Group>
                        <Form.Group widths='equal'>
                          <LongTextField label='Bio' placeholder='Tell us something about you...' name='bio'/>
                        </Form.Group>
                      </Form>
                      <Form>
                        <Form.Group widths='equal'>
                          <SelectField label='Interest' name='interest'/>

                          <SelectField label='Course' name='course'/>
                        </Form.Group>
                      </Form>
                      <br></br>
                      <TextField fluid
                                 icon='instagram'
                                 iconPosition='left'
                                 placeholder='Link your Instagram!'
                                 name='instagram'/>
                      <TextField fluid
                                 icon='facebook square'
                                 iconPosition='left'
                                 placeholder='Link your Facebook!'
                                 name='facebook'/>
                      <SubmitField value='Submit'/>
                      <br></br>
                      <ErrorsField/>
                    </AutoForm>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid>
          </div>
        </div>
    );
  }
}

UserProfile.propTypes = {
  currentUser: PropTypes.string,
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

const UserProfileContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(UserProfile);

export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Users documents.
  const subscription = Meteor.subscribe('Users');
  return {
    doc: Users.findOne(documentId),
    ready: subscription.ready(),
  };
})(UserProfileContainer);
