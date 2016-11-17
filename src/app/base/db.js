import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

export default () => {
	return mongoose
		.connect('mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME)
		.catch(error => {
			console.log('Error during db connection');
			console.log(error);
		});
}