const { facultyService, emailService } = require("../services");
const { createObjectCsvWriter } = require('csv-writer');

//csv file added
const csvWriter = createObjectCsvWriter({
  path: 'faculty.csv',
  header: [
    { id: 'facultyId', title: 'Faculty ID' },
    { id: 'facultyName', title: 'Faculty Name' },
    { id: 'email', title: 'Email' },
  ],
});

const fs = require('fs');

const {
  createFaculty,
  gettFacultyList,
  gettFacultyDetails,
  updatedFacultyDetails,
  deletedFaculty,
} = require('./faculty.controller');

// Function to write faculty data to the CSV file
const writeFacultyToCSV = async (faculty) => {
  try {
    await csvWriter.writeRecords(faculty);
    console.log('Data has been written to faculty.csv');
  } catch (error) {
    console.error('Error writing data to CSV: ', error);
  }
};

const main = async () => {
  const facultyToCreate = {
    facultyName: 'Garvit Dhameliya',
  email: 'garvit@gmail.com',};
  const createdFaculty = await createFaculty(facultyToCreate);
  await writeFacultyToCSV(createdFaculty);

  // Get faculty list
  const facultyList = await gettFacultyList({ query: {} });
  await writeFacultyToCSV(facultyList);

  // Get faculty details
  const facultyId = createdFaculty.facultyId;
  const facultyDetails = await gettFacultyDetails({ params: { facultyId } });
  await writeFacultyToCSV([facultyDetails]);

  // Update faculty details
  const updatedFacultyData = {
    facultyName: 'Updated Garvit Dhameliya',
    email: 'updatedGarvit@gmail.com',
  };
  const updatedFaculty = await updatedFacultyDetails({ params: { facultyId }, body: updatedFacultyData });
  await writeFacultyToCSV([updatedFaculty]);

  // Delete faculty
  await deletedFaculty({ params: { facultyId } });
};

main();


// Create faculty
const createFaculty = async (req, res) => {
  try {
    const reqBody = req.body;

    const facultyExists = await facultyService.getFacultyByEmail(reqBody.email);
    if (facultyExists) {
      throw new Error("Faculty already created by this email!");
    }

    const faculty = await facultyService.createFaculty(reqBody);
    if (!faculty) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "faculty create successfully!",
      data: { faculty },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//  Get faculty list
const getFacultyList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { faculty_name: { $regex: search, $options: "i" } },

      ];
    }

    const getList = await facultyService.getFacultyList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get faculty list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get faculty details by id
const getFacultyDetails = async (req, res) => {
  try {
    const getDetails = await facultyService.getFacultyById(req.params.facultyId);
    if (!getDetails) {
      throw new Error("Faculty not found!");
    }

    res.status(200).json({
      success: true,
      message: "Faculty details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// faculty details update by id
const updateFacultyDetails = async (req, res) => {
  try {
    const facultyId = req.params.facultyId;
    const facultyExists = await facultyService.getFacultyById(facultyId);
    if (!facultyExists) {
      throw new Error("Faculty not found!");
    }

    await facultyService.updateFacultyDetails(facultyId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Admin details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete faculty
const deleteFaculty = async (req, res) => {
  try {
    const facultyId = req.params.facultyId;
    const facultyExists = await facultyService.getFacultyById(facultyId);
    if (!facultyExists) {
      throw new Error("Faculty not found!");
    }

    await facultyService.deleteFaculty(facultyId);

    res.status(200).json({
      success: true,
      message: "Faculty delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
//csv added


module.exports = {
  createFaculty,
  getFacultyList,
  getFacultyDetails,
  updateFacultyDetails,
  deleteFaculty,
};