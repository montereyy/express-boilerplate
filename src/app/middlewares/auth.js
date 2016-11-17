export default (req, res, next) => {
	console.log('Auth middleware goes here')
	next();
}