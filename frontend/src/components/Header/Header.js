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
      <div className={styles.rightLinksContainer}>
        {userInfo ? (
          <div className={styles.headerLink} onClick={logoutHandler}>
            Logout
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
