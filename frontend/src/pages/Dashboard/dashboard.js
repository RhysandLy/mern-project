import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentList from "../../components/StudentList/StudentList";
import { listStudents } from "../../actions/studentActions";
import { useHistory } from "react-router";
import Heading from "../../components/Heading/Heading";
import Search from "../../components/Search/Search";

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const studentCreate = useSelector((state) => state.studentCreate);
  const { success: successCreate } = studentCreate;

  const studentList = useSelector((state) => state.studentList);
  const { students, error } = studentList;

  const studentUpdate = useSelector((state) => state.studentUpdate);
  const { success: successUpdate } = studentUpdate;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(listStudents());
    }
  }, [dispatch, successCreate, history, userInfo, successUpdate]);

  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <Heading title={`Welcome`}>
      {error && <div>{error}</div>}
      <Search setSearch={setSearch} />
      <StudentList students={students} search={search} />
    </Heading>
  );
};

export default Dashboard;
