import styles from "./Header.module.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

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
    <div className={styles.header}>
      <div className={styles.leftLinksContainer}>
        <Link style={{ textDecoration: "none" }} to="/">
          <div className={styles.headerLink}>Home</div>
        </Link>
      </div>
      <div>
        {userInfo ? (
          <div className={styles.rightLinksContainer}>
            <Link style={{ textDecoration: "none" }} to="/dashboard">
              <div className={styles.headerLink}>Dashboard</div>
            </Link>
            <div className={styles.headerLink} onClick={logoutHandler}>
              Logout
            </div>
          </div>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
            <div className={styles.headerLink}>Login</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
