const Joi = require("joi");

// create subtopic
const createSubtopic = {
  body: Joi.object().keys({
    subtopic: Joi.array().items(optionSchema),
  }),
};

// Get subtopic list
const getSubtopicList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

// Get subtopic details by id
const getDetails = {
  params: Joi.object().keys({
    subtopicId: Joi.string().required().trim(),
  }),
};

// subtopic details update by id
const updateSubtopicDetails = {
  params: Joi.object().keys({
    subtopicId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    subtopic_name: Joi.string().trim(),
  }),
};

module.exports = {
  createSubtopic,
  getDetails,
  getSubtopicList,
  updateSubtopicDetails,
};