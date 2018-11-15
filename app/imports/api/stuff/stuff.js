import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Stuffs = new Mongo.Collection('Stuffs');

/** Create a schema to constrain the structure of documents associated with this collection. */
const StuffSchema = new SimpleSchema({
  tutee: String,
  courseName: String,
  month: {
    type: String,
    allowedValues: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'],
  },
  day: {
    type: Number,
    allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  },
  time: String,
  owner: String,
  tutor: {
    type: String,
    allowedValues: ['jim', 'don', 'weedle', 'nein'],
  },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Stuffs.attachSchema(StuffSchema);

/** Make the collection and schema available to other code. */
export { Stuffs, StuffSchema };
