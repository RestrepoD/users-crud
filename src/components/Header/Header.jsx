import "./Header.css";

const Header = ({ onCreate }) => {
  return (
    <header className="header_cont">
      <h1>Users</h1>
      <button className="header_btn" onClick={onCreate}>
        + Create new user
      </button>
    </header>
  );
};

export default Header;
