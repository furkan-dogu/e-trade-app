import { Image } from "react-bootstrap";
import Logo from "../assets/furkan-logo.png";
import Canvas from "./Canvas";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({ baskets, setBaskets }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Image src={Logo} alt="Logo" width={50} />
        <button
          type="button"
          className="btn btn-secondary position-relative"
          onClick={handleShow}
        >
          <FaCartShopping className="fs-5" /> Cart
          {baskets.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
              {baskets.length}
            </span>
          )}
        </button>
      </div>
      <Canvas
        show={show}
        handleClose={handleClose}
        baskets={baskets}
        setBaskets={setBaskets}
      />
    </nav>
  );
};

export default Navbar;
