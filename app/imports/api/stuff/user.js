import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const User = new Mongo.Collection('Users');

/** Create a schema to constrain the structure of documents associated with this collection. */
const UserSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  gender: String,
  bio: String,
  email: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
User.attachSchema(UserSchema);

/** Make the collection and schema available to other code. */
export { User, UserSchema };
