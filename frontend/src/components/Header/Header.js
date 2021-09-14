const Header = () => {
  return (
    <div>
      HEADER
      <button
        onClick={() => {
          localStorage.removeItem("userInfo");
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Header;
