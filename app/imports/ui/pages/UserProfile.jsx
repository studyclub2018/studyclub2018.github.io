import React from 'react';
import { Card, Image, Container, Button, Form, Grid, Dropdown, Input } from 'semantic-ui-react';
import NavBar from '../components/NavBar';

const hobbiesoptions = [
  { key: 'hobby option 1', text: 'Civil Engineering', value: 'hobby option 1' },
  { key: 'hobby option 2', text: 'Game design', value: 'hobby option 2' },
  { key: 'hobby option 3', text: 'Data Base', value: 'hobby option 3' },
];

const courseoptions = [
  { key: 'hobby option 1', text: 'ICS 111', value: 'hobby option 1' },
  { key: 'hobby option 2', text: 'ICS 211', value: 'hobby option 2' },
  { key: 'hobby option 3', text: 'ICS 311', value: 'hobby option 3' },
];

/** A simple static component to render some text for the landing page. */
class UserProfile extends React.Component {
  render() {
    const menuStyle = { paddingTop: '50px' };
    return (
        <div>
          <NavBar/>
        <Container style={menuStyle}>
          <Grid columns={2} centered celled='internally'>
            <Grid.Row>
              <Grid.Column width={5}>
                <Card>
                  <Image src="images/matthew.png"/>
                  <Card.Content>
                    <Card.Header>
                      Username
                    </Card.Header>
                    <Card.Meta>
        <span className='date'>
          Joined in 2018
        </span>
                    </Card.Meta>
                    <Card.Description>
                      john@foo.com
                    </Card.Description>
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

              <Grid.Column>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First name'/>
                    <Form.Input fluid label='Last name' placeholder='Last name'/>
                  </Form.Group>

                  <Form.Group widths='equal'>
                    <Form.TextArea label='Bio' placeholder='Tell us something about you...'/>
                  </Form.Group>
                </Form>


                <Dropdown placeholder='Interest' fluid multiple selection options={hobbiesoptions}/>

                <Dropdown placeholder='Course' fluid multiple selection options={courseoptions}/>
                <br></br>
                <Input fluid
                       icon='instagram'
                       iconPosition='left'
                       placeholder='Link your Instagram!'
                />
                <Input fluid
                       icon='twitter'
                       iconPosition='left'
                       placeholder='Link your Twitter!'
                />
                <Input fluid
                       icon='facebook square'
                       iconPosition='left'
                       placeholder='Link your Facebook!'
                />

                <br></br>
                <Button floated={'right'}>Submit</Button>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        </div>
    );
  }
}

export default UserProfile;
