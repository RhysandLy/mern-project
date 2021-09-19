import styles from "./Header.module.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
//styles fro mmaterial ui
import { Typography, Button, Toolbar, Box, AppBar, IconButton  } from "@mui/material";
//assest and icons
import HomeIcon from '@mui/icons-material/Home';

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
          {/*TODO: fix navbar*/}
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

    // <div className={styles.header}>
    //   <div className={styles.leftLinksContainer}>
    //     <Link style={{ textDecoration: "none" }} to="/">
    //       <div className={styles.headerLink}>Home</div>
    //     </Link>
    //   </div>
    //   <div>
    //     {userInfo ? (
    //       <div className={styles.rightLinksContainer}>
    //         <Link style={{ textDecoration: "none" }} to="/dashboard">
    //           <div className={styles.headerLink}>Dashboard</div>
    //         </Link>
    //         <Link style={{ textDecoration: "none" }} to="/create-student">
    //           <div className={styles.headerLink}>Create Student</div>
    //         </Link>
    //         <div className={styles.headerLink} onClick={logoutHandler}>
    //           Logout
    //         </div>
    //       </div>
    //     ) : (
    //       <Link style={{ textDecoration: "none" }} to="/login">
    //         <div className={styles.headerLink}>Login</div>
    //       </Link>
    //     )}
    //   </div>
    // </div>
  );
};

export default Header;
