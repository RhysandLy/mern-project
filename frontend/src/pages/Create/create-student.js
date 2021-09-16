import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createStudents } from "../../actions/studentActions";

const CreateStudent = () => {
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const studentCreate = useSelector((state) => state.studentCreate);
  const { loading, error, student } = studentCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // to upload images
  // https://api.cloudinary.com/v1_1/rhys-cloud-image-storage/image/upload

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, []);

  const reset = () => {
    setDate(new Date());
    setEmail("");
    setLastName("");
    setfirstName("");
    setLocation("");
  };

  const postPic = (pics) => {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "mern-app");
      data.append("cloud_name", "rhys-cloud-image-storage");
      fetch(
        "https://api.cloudinary.com/v1_1/rhys-cloud-image-storage/image/upload",
        {
          method: "post",
          body: data,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(createStudents(firstName, lastName, email, date, location, pic));
    reset();

    history.push("/dashboard");
  };
  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>LOADING...</div>}
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
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            name="pic"
            onChange={(e) => postPic(e.target.files[0])}
          />
        </label>
        <button type="submit">Create Student</button>
      </form>
    </div>
  );
};

export default CreateStudent;
