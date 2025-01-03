import "./navbar.css";

const Navbar = ({id}) => {

  return (
    <nav className="navbar" id={id}>
      <div className="navbar-right">
        <a href="https://drive.google.com/file/d/1NTdjr4Lhnae297LBDWw-MkYahIYQFtWJ/view?usp=sharing" className="navbar-connect">
          <span className="connect-border">Resume</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
