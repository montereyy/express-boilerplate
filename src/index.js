import app from 'app/app';
import dotEnv from 'dotenv';
import db from 'app/base/db';

dotEnv.load();

db()
	.then(() => {
		app.listen(process.env.PORT || process.env.APP_PORT, function() {
			console.log('API listening on port 3000!')
		});
	});
