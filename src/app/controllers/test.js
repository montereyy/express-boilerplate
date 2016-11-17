import TestModel from 'app/models/test';

class Test {
	static get(req, res) {
		console.log(req);
		let test = new TestModel({
			name: 'asd',
			surname: '123123'
		});
		test
			.save()
			.then(() => {
				console.log('test created')
			});
		res.json(123);
	}
}

export default Test;