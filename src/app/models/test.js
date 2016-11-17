import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const testSchema = new Schema(
	{
		name: String,
		surname: String
	}
);

const Test = mongoose.model('Test', testSchema);

export default Test;