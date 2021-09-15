import styles from "./StudentList.module.css";

const StudentList = ({ students = [] }) => {
  const parseISOString = (s) => {
    const date = new Date(s);
    return date.toDateString();
  };
  return (
    <div>
      {console.log(students)}
      <div>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Location</th>
            <th>Image</th>
          </tr>
          {students.map((student) => (
            <tr key={student._id}>
              <td className={styles.td}>{student.firstName}</td>
              <td className={styles.td}>{student.lastName}</td>
              <td className={styles.td}>{student.email}</td>
              <td className={styles.td}>{parseISOString(student.DOB)}</td>
              <td className={styles.td}> {student.location}</td>
              <td className={styles.td}>
                <img className={styles.studentImage} src={student.pic} />
              </td>
              <td className={styles.td}>
                <button>Edit</button>
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
