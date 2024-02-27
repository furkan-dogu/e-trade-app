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
      </Offcanvas>

  );
}

export default Canvas;