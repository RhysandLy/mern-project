import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createStudents } from "../../actions/studentActions";

const CreateStudent = () => {
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();
  const history = useHistory();

  const studentCreate = useSelector((state) => state.studentCreate);
  const { loading, error, student } = studentCreate;

  const reset = () => {
    setDate(new Date());
    setEmail("");
    setLastName("");
    setfirstName("");
    setLocation("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(createStudents(firstName, lastName, email, date, location));
    reset();

    history.push("/dashboard");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          First Name:
          <input
            type="text"
            name="name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="DOB"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="password"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button type="submit">Create Student</button>
      </form>
    </div>
  );
};

export default CreateStudent;
