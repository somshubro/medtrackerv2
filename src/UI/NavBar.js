import Clock from "./Clock";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="http://localhost:3000/">
          MedTracker
        </a>
        <Clock />
      </nav>
    </div>
  );
};

export default NavBar;
