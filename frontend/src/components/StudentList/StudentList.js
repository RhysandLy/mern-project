import styles from "./StudentList.module.css";
import { Link } from "react-router-dom";
// import Select from "react-select";
// import { useState } from "react";

const StudentList = ({ students = [], search }) => {
  const parseISOString = (s) => {
    const date = new Date(s);
    return date.toDateString();
  };

  // const options = [
  //   { value: "firstName", label: "First Name" },
  //   { value: "lastName", label: "Last Name" },
  //   { value: "location", label: "Location" },
  // ];
  // const [selectedValue, setSelectedValue] = useState("");

  // const handleChange = (e) => {
  //   setSelectedValue(e.value);
  //   console.log(e.value);
  // };
  return (
    <div>
      {console.log(students)}
      <div>
          {/* <Select
            options={options}
            defaultValue={options[0]}
            value={options.find((obj) => obj.value === selectedValue)}
            onChange={handleChange}
          /> */}
        <table className={styles.table}>
          <tr>
            <th className={styles.th}>First Name</th>
            <th className={styles.th}>Last Name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Date of Birth</th>
            <th className={styles.th}>Location</th>
            <th className={styles.th}>Image</th>
          </tr>
          {students
            .filter((filteredStudent) =>
              filteredStudent.firstName
                .toLowerCase()
                .includes(search.toLowerCase()) || filteredStudent.lastName
                .toLowerCase()
                .includes(search.toLowerCase())|| filteredStudent.location
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((student) => (
              <tr key={student._id}>
                <td className={styles.td}>{student.firstName}</td>
                <td className={styles.td}>{student.lastName}</td>
                <td className={styles.td}>{student.email}</td>
                <td className={styles.td}>{parseISOString(student.DOB)}</td>
                <td className={styles.td}> {student.location}</td>
                <td className={styles.td}>
                  <img className={styles.studentImage} src={student.pic} />
                </td>
                <td>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/student/edit/${student._id}`}
                  >
                    <button>Edit</button>
                  </Link>

                  <button>View Full Student</button>
                  <button>Make Curriculum</button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default StudentList;
