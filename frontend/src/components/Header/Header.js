import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
//styles fro mmaterial ui
import { Typography, Button, Toolbar, Box, AppBar  } from "@mui/material";
const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HCA Admin
          </Typography>
          
          {userInfo ? (
            <div>
              <Link style={{ textDecoration: "none" }} to="/dashboard">
                <Button style={{ color: "white" }} sx={{ flexGrow: 1 }}>
                  Dashboard
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/create-student">
                <Button style={{ color: "white" }} sx={{ flexGrow: 1 }}>
                  Create Student
                </Button>
              </Link>
              <Button
                style={{ color: "white" }}
                sx={{ flexGrow: 1 }}
                onClick={logoutHandler}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button style={{ color: "white" }} sx={{ flexGrow: 1 }}>
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
