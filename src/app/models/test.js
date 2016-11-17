import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const testSchema = new Schema(
	{
		name: String,
		surname: String
	}
);

export default mongoose.model('Test', testSchema);