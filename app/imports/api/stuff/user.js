import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Users = new Mongo.Collection('Users');

/** Create a schema to constrain the structure of documents associated with this collection. */
const UserSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  bio: String,
  interest: {
    type: String,
    allowedValues: ['-Select Interest-', 'Civil Engineering', 'Game Design', 'Data Base'],
  },
  course: {
    type: String,
    allowedValues: ['-Select Course-', 'ICS 111', 'ICS 211', 'ICS 311'],
  },
  instagram: { type: String, optional: true },
  facebook: { type: String, optional: true },
  twitter: { type: String, optional: true },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Users.attachSchema(UserSchema);

/** Make the collection and schema available to other code. */
export { Users, UserSchema };
