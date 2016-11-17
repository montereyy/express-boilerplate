import express from 'express';
import requireDir from 'require-dir';

var routes = requireDir();

const router = express.Router();

router.use('/auth', routes.auth.default);

export default router;