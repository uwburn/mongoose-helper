var mongooseHelper = {
	isValidationError: function(err) {
		return err.name == 'ValidationError';
	},
	getValidationErrors: function(err) {
		var errors = [];
		for (var i in err.errors)
			errors.push(err.errors[i].message);

		return errors;
	}
};

module.exports = mongooseHelper;
