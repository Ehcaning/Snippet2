const config = require('../../config');
const schema = require('./schema');

function login(req, res, next) {
	try {
		const { error } = schema.login.body.validate(req.body, config.validator.joiConfigs);
		if (error) {
			throw Error(error);
		}
		return next();
	} catch (err) {
		next(err);
	}
}

function signup(req, res, next) {
	try {
		const { error } = schema.signup.body.validate(req.body, config.validator.joiConfigs);
		if (error) {
			throw Error(error);
		}
		return next();
	} catch (err) {
		next(err);
	}
}

function updateProfile(req, res, next) {
	try {
		const { error } = schema.updateProfile.body.validate(req.body, config.validator.joiConfigs);
		if (error) {
			throw Error(error);
		}
		return next();
	} catch (err) {
		next(err);
	}
}

function getSnippet(req, res, next) {
	try {
		const { error } = schema.getSnippet.query.validate(req.query, config.validator.joiConfigs);
		if (error) {
			throw Error(error);
		}
		return next();
	} catch (err) {
		next(err);
	}
}

function createSnippet(req, res, next) {
	try {
		const { error } = schema.createSnippet.body.validate(req.body, config.validator.joiConfigs);
		if (error) {
			throw Error(error);
		}
		return next();
	} catch (err) {
		next(err);
	}
}

function deleteSnippet(req, res, next) {
	try {
		const { error } = schema.deleteSnippet.body.validate(req.body, config.validator.joiConfigs);
		if (error) {
			throw Error(error);
		}
		return next();
	} catch (err) {
		next(err);
	}
}

module.exports = {
	login,
	signup,
	updateProfile,
	getSnippet,
	createSnippet,
	deleteSnippet,
};
