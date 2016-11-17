import Joi from 'joi';

export default {
	// GET /auth/login
	login: {
		email:      Joi.string().max(100).required(),
		password:   Joi.string().max(100).required()
	}
}