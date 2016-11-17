import express from 'express';
import authMiddleware from 'app/middlewares/auth';
import TestCtrl from 'app/controllers/test';

const router = express.Router();

router.use(authMiddleware);

router
	.route('/login')
	.get(TestCtrl.get);

export default router;