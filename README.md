# Mongoose Helper

A utility module to deal with Mongoose in web APIs development. Currently supports validation errors checking and extraction. Might be extended for future needs.

### Usage

```javascript
var mongooseHelper = require('mongoose-helper');

var models = require('./models');

var entity = new models.Entity({ /* Some props */ });
entity.save().then(function(savedEntity) {
    // Do something
}).catch(function(err) {
    if (mongooseHelper.isValidationError(err)) {
		var errors = mongooseHelper.getValidationErrors(err);
		// Do something with the errors extracted
	}
});
```

### Notes
The errors are extracted as an array of strings.
