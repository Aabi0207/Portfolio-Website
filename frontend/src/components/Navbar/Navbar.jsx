import "./navbar.css";

const Navbar = ({id}) => {

  return (
    <nav className="navbar" id={id}>
      <div className="navbar-right">
        <a href="https://drive.google.com/file/d/13oYkbUI548pL95sf1h-MTLoZ6U3n_tXV/view?usp=sharing" className="navbar-connect">
          <span className="connect-border">Resume</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
