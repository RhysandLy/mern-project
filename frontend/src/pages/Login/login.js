import axios from "axios";
import { useEffect, useState } from "react";

const Login = (/*{history}*/) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false); //TODO: make error component
  const [loading, setLoading] = useState(false); //TODO: make loasing component

//   useEffect(() => {
//       const userInfo = localStorage.getItem("userInfo");

//       if(userInfo){
//           history.push("/dashboard");
//       }
//   },[history]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);

      const { data } = await axios.post(
        "api/users/login",
        { email, password },
        config
      );

      console.log(data);

      localStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      LOGIN
      {loading && <div>LOADING...</div>}
      {error && <div>{error}</div>}
      <form onSubmit={submitHandler}>
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
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
