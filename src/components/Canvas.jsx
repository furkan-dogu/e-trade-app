import Offcanvas from 'react-bootstrap/Offcanvas';
import CanvasCard from './CanvasCard';

function Canvas({show, handleClose}) {

  return (


      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sepetim</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CanvasCard />
        </Offcanvas.Body>
        <div className='offcanvas-footer'>
        <div className="d-flex justify-content-between align-items-center">
          <h5>Toplam Tutar</h5>
          <h5><span id="total">0</span> $</h5>
        </div>
        </div>
      </Offcanvas>

  );
}

export default Canvas;