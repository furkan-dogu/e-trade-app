import Offcanvas from "react-bootstrap/Offcanvas";
import CanvasCard from "./CanvasCard";

function Canvas({ show, handleClose, baskets, setBaskets }) {
  const total = baskets.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <CanvasCard baskets={baskets} setBaskets={setBaskets} />
      </Offcanvas.Body>
      {baskets.length > 0 && (
        <div className="offcanvas-footer">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Total Amount</h5>
            <h5>
              <span>{total}</span> $
            </h5>
          </div>
        </div>
      )}
    </Offcanvas>
  );
}

export default Canvas;
