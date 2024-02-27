import Logo from "../assets/furkan-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <img src={Logo} alt="Logo" width={50} height={48} />
        <button type="button" className="btn btn-secondary position-relative">
          Sepetim
          <span
            id="sepet"
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
          >
            0
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
