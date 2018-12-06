import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Rates = new Mongo.Collection('Rates');

/** Create a schema to constrain the structure of documents associated with this collection. */
const RateSchema = new SimpleSchema({
  tutor: {
    type: String,
    allowedValues: ['-Select Tutor-', 'jim', 'don', 'weedle', 'nein'],
  },
  rateYourTutor: {
    type: String,
    allowedValues: ['-Select level-', '1-very poor', '2-poor', '3-average', '4-good', '5-excellent'],
  },
  wouldSelectThisTutorAgain: {
    type: String,
    allowedValues: ['-Select-', 'Yes', 'No'],
  },
  owner: String,
  comment: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Rates.attachSchema(RateSchema);

/** Make the collection and schema available to other code. */
export { Rates, RateSchema };
