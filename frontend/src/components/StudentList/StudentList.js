import styles from "./StudentList.module.css";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  Avatar,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";

const StudentList = ({ students = [], search }) => {
  const parseISOString = (s) => {
    const date = new Date(s);
    return date.toDateString();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Date of Birth</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students
            .filter(
              (filteredStudent) =>
                filteredStudent.firstName
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                filteredStudent.lastName
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                filteredStudent.location
                  .toLowerCase()
                  .includes(search.toLowerCase())
            )
            .map((student) => (
              <TableRow
                key={student._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar
                    variant="rounded"
                    sx={{ width: 84, height: 112 }}
                    alt={student.firstName}
                    src={student.pic}
                  />
                </TableCell>
                <TableCell align="right">{student.firstName}</TableCell>
                <TableCell align="right">{student.lastName}</TableCell>
                <TableCell align="right">{student.email}</TableCell>
                <TableCell align="right">
                  {parseISOString(student.DOB)}
                </TableCell>
                <TableCell align="right">{student.location}</TableCell>
                <TableCell align="right">
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/student/edit/${student._id}`}
                    >
                      <Button variant="contained" startIcon={<EditIcon />}>
                        Edit
                      </Button>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/student/${student._id}`}
                    >
                      <Button variant="contained" startIcon={<PreviewIcon />}>
                        View
                      </Button>
                    </Link>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;
