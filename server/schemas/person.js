
import { Schema } from 'mongoose';
import database from '../db';

const Person = new Schema({
	name: { type: String },
	mobile: {
		code: String,
		number: Number,
	},
	dob: {
		day: Number,
		month: Number,
		year: Number,
	},
	
	gender: String,
	nationality: String,
	about: String,
	registeredOn: Number,
	lastUpdated: Number,
	
}, {
	toJSON: { virtuals: true },
	toObject: { virtuals: true },
});




export default database.model('Person', Person);
