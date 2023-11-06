const Joi = require("joi");

// create faculty
const createFaculty = {
  body: Joi.object().keys({
    faculty_name: Joi.string().required().trim(),
    department: Joi.string().required().trim(),
    Permissions: Joi.string().required().trim(),
  }),
};

// Get faculty list
const getFacultyList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

// Get faculty details by id
const getDetails = {
  params: Joi.object().keys({
    facultyId: Joi.string().required().trim(),
  }),
};

// faculty details update by id
const updateFacultyDetails = {
  params: Joi.object().keys({
    facultyId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    faculty_name: Joi.string().trim(),
  }),
};

module.exports = {
  createFaculty,
  getDetails,
  getFacultyList,
  updateFacultyDetails,
};