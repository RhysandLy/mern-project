const express = require("express");
const { getStudents, createStudents, getStudentByID, updateStudent, deleteStudent } = require("../controllers/studentControllers");

const router = express.Router();

router.route("/").get(getStudents);
router.route("/create").post(createStudents);
router.route("/:id").get(getStudentByID).put(updateStudent).delete(deleteStudent);

module.exports = router;
