class AuthMiddleware {
	static handle(req, res, next) {
		console.log('Auth middleware goes here')
		next();
	}
}

export default AuthMiddleware