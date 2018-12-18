
/**
 * this contains the database connection specification
 * @author gaurav sharma
 * @since Wednesday, October 17, 2018 4:24 PM
 */
import mongoose from 'mongoose';
import { Promise as es6Promise } from 'es6-promise';
import { mongoConnectionString } from '../constants';

const useMongoClient = true;

mongoose.Promise = es6Promise;
mongoose.connect(mongoConnectionString, { useMongoClient }, (err) => {
	if (err) {
		console.log('mongo connection err', err);
	} else {
		console.log('database connected');
	}
});

export default mongoose;