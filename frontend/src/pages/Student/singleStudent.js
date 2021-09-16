import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudents } from "../../actions/studentActions";

const SingleStudent = ({ match, history }) => {
  const [email, setEmail] = useState();
  const [firstName, setfirstName] = useState();
  const [lastName, setLastName] = useState();
  const [location, setLocation] = useState();
  const [date, setDate] = useState();
  const [pic, setPic] = useState();

  const dispatch = useDispatch();

  const studentUpdate = useSelector((state) => state.studentUpdate);
  const { loading, error } = studentUpdate;

  const reset = () => {
    setDate(new Date());
    setEmail("");
    setLastName("");
    setfirstName("");
    setLocation("");
    setPic("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateStudents(
        match.params.id,
        firstName,
        lastName,
        email,
        date,
        location,
        pic
      )
    );
    if (!firstName || !lastName || !email || !date || !location || !pic) return;
    reset();

    history.push("/dashboard");
  };

  const postPic = (pics) => {
    //TODO: add upload progress bar
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
        console.log(data.url.toString());
        setPic(data.url.toString());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/students/${match.params.id}`);

      console.log(data);

      setfirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setDate(data.DOB.substring(0, 10));
      setLocation(data.location);
      setPic(data.pic); // temp
    };

    fetching();
  }, [match.params.id]);
  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>LOADING...</div>}
      <form onSubmit={updateHandler}>
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
          Pic:
          <input
            type="file"
            name="password"
            onChange={(e) => postPic(e.target.files[0])}
          />
        </label>
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default SingleStudent;
