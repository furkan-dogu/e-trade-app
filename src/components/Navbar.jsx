import Logo from "../assets/furkan-logo.png";
import Canvas from "./Canvas"
import { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <img src={Logo} alt="Logo" width={50} height={48} />
        <button type="button" className="btn btn-secondary position-relative" onClick={handleShow}>
          Sepetim
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
          >
            0
          </span>
        </button>
      </div>
      <Canvas show={show} handleClose={handleClose} />
    </nav>
  );
};

export default Navbar;
