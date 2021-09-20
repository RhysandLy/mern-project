import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import Heading from "../../components/Heading/Heading";
//styles material ui
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
//icons and assets
import SendIcon from "@mui/icons-material/Send";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/dashboard");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      {loading && <div>LOADING...</div>}
      {error && <div>{error}</div>}
      <Stack
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Typography variant="h1" component="div" gutterBottom>
            Login
          </Typography>
        </Box>
        <Box component="form" onSubmit={submitHandler} sx={{}}>
          <Card
            sx={{
              minWidth: 275,
              maxWidth: 500,
              padding: "24px",
              margin: "auto",
            }}
          >
            <Stack
              spacing={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                label="Email"
                type="email"
                error={error}
                variant="filled"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ margin: "12px" }}
              />
              <TextField
                label="Password"
                type="password"
                error={error}
                variant="filled"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ margin: "12px" }}
              />
              <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                Login
              </Button>
            </Stack>
          </Card>
        </Box>
      </Stack>
    </div>
  );
};

export default Login;
