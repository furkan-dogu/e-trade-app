import Modal from "react-bootstrap/Modal";
import ModalImages from "./ModalImages";

function ModalDetail({ show, handleClose, product }) {
  const { images, title, description, price } = product;

  return (
    <Modal show={show} onHide={handleClose}>
      <ModalImages images={images} />
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
