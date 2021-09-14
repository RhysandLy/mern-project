const StudentList = ({ students = [] }) => {
  const parseISOString = (s) => {
    const date = new Date(s);
    return date.toDateString();
  };
  return (
    <div>
      <div>STUDENTS</div>
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
            <tr>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{parseISOString(student.DOB)}</td>
              <td>{student.location}</td>
              <td>
                <img src={student.pic} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default StudentList;
