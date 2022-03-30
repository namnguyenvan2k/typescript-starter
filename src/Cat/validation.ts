import * as Joi from 'joi';

export const ValidateCreateCat = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required(),
});

export const ValidateGetCat = Joi.object().keys({
  id: Joi.string().required(),
});

export const ValidateUpdateCat = ValidateCreateCat.append({
  id: Joi.string().required(),
});
