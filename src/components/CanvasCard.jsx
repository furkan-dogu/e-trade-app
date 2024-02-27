import { Image } from "react-bootstrap";
import Logo from "../assets/furkan-logo.png"
import { FaCirclePlus, FaCircleMinus  } from "react-icons/fa6";

function CanvasCard() {
  return (
    <div className="card mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4 my-auto">
          <Image
            src={Logo}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">title</h5>
            <div className="d-flex align-items-center gap-2" role="button">
              <FaCircleMinus className="text-danger" />
              <span className="fw-bold">quantity</span>
              <FaCirclePlus className="text-danger"/>
            </div>
            <p className="card-text">Total : 1500</p>
            <button className="btn btn-danger">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanvasCard;
