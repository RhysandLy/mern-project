const AsyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");

const getStudents = AsyncHandler(async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

const createStudents = AsyncHandler(async (req, res) => {
  const { firstName, lastName, email, DOB, location, pic } = req.body;

  if (!firstName || !lastName) {
    res.status(403);
    throw new Error("Fill all fields!");
  } else {
    const student = new Student({
      firstName,
      lastName,
      email,
      DOB,
      location,
      pic,
    });

    const createdStudent = await student.save();

    res.status(200).json(createdStudent);
  }
});

const getStudentByID = AsyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (student) {
    res.json(student);
  } else {
    res.status(402).json({ message: "does not exist" });
  }
  res.json(student);
});

const updateStudent = AsyncHandler(async (req, res) => {
  const { firstName, lastName, email, DOB, location, pic } = req.body;
  const student = await Student.findById(req.params.id);
  if (student) {
    student.firstName = firstName;
    student.lastName = lastName;
    student.email = email;
    student.DOB = DOB;
    student.location = location;
    student.pic = pic;

    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } else {
    res.status(401).json({ message: "does not exist" });
  }
});

const deleteStudent = AsyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (student) {
    await student.remove();
    res.json({ message: "student deleted" });
  } else {
    res.status(404);
    throw new Error("no such student");
  }
});

module.exports = {
  getStudents,
  createStudents,
  getStudentByID,
  updateStudent,
  deleteStudent,
};
