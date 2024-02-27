import React, { useState } from "react";
import ModalDetail from "./Modal";

const ProductCard = ({ product, addToCart }) => {
  const { images, title, description, price } = product;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddtoCart = () => {
    addToCart(product);
  }

  return (
    <div className="col">
      <div className="card">
        <img src={images[0]} className="p-2" height="250px" alt="..." />
        <div className="card-body">
          <h5 className="card-title line-clamp-1">{title}</h5>
          <p className="card-text line-clamp-2">{description}</p>
        </div>
        <div className="card-footer w-100 fw-bold d-flex justify-content-between gap-3">
          <span>Price:</span>
          <span>{price} $</span>
        </div>
        <div className="card-footer w-100 d-flex justify-content-center gap-3">
          <button className="btn btn-danger" onClick={handleAddtoCart}>Add to Cart</button>
          <button
            className="btn btn-primary"
            onClick={handleShow}
          >
            See Details
          </button>
          <ModalDetail show={show} handleClose={handleClose} product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
