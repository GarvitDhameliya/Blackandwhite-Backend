const Joi = require("joi");

// create student
const createStudent = {
  body: Joi.object().keys({
    student_name: Joi.string().required().trim(),
    Permissions: Joi.string().required().trim(),
  }),
};

// Get student list
const getStudentList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

// Get student details by id
const getDetails = {
  params: Joi.object().keys({
    studentId: Joi.string().required().trim(),
  }),
};

// student details update by id
const updateStudentDetails = {
  params: Joi.object().keys({
    studentId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    student_name: Joi.string().trim(),
  }),
};

module.exports = {
  createStudent,
  getDetails,
  getStudentList,
  updateStudentDetails,
};