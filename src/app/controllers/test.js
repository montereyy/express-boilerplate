import TestModel from 'app/models/test';

class Test {
	static get(req, res) {
		console.log(req.body);
		let test = new TestModel({
			name: 'asd',
			surname: '123123'
		});
		test
			.save()
			.then(() => {
				console.log('test created')
			});
		res.json(req.body);
	}
}

export default Test;