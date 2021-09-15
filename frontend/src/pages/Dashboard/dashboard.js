import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentList from "../../components/StudentList/StudentList";
import { listStudents } from "../../actions/studentActions";
import { useHistory } from "react-router";
import Heading from "../../components/Heading/Heading";

const Dashboard = () => {
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const studentList = useSelector((state) => state.studentList);
  const { students, error } = studentList;


  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }else{
      dispatch(listStudents());
    }
  }, [dispatch]);
  return (
    <Heading title={`Welcome ${userInfo.name}`}>
      {error && <div>{error}</div>}
      <StudentList students={students} />
    </Heading>
  );
};

export default Dashboard;
