import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function ModalDetail({ show, handleClose, product }) {
  const { thumbnail, title, description, price } = product;

  return (
    <Modal show={show} onHide={handleClose}>
      <Image src={thumbnail} className="p-2" height="300px" alt={title} />
      <Modal.Header className="mx-auto">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">{description}</Modal.Body>
      <Modal.Footer className="mx-auto">
        <Modal.Title>{price} $</Modal.Title>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDetail;
