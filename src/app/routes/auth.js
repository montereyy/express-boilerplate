import express from 'express';
import authMiddleware from 'app/middlewares/auth';
import TestCtrl from 'app/controllers/test';
import validate from 'express-validation'
import authValidators from 'app/validators/auth';

const router = express.Router();

//router.use(authMiddleware.handle);

router
	.route('/login')
	.post([validate(authValidators.login), TestCtrl.get]);

export default router;