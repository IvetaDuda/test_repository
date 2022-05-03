console.log('Hallo world');
const Joi = require('joi');

const passwordSchema = Joi.string().min(3).max(10).alphanum();
console.log(passwordSchema.validate('12345o6'));
