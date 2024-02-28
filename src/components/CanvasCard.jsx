import { Image } from "react-bootstrap";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

function CanvasCard({ baskets, setBaskets }) {

  const handlePlus = (basket) => {
    const updatedBaskets = baskets.map(item => {
      if (item.id === basket.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    
    setBaskets(updatedBaskets);
  };

  const handleMinus = (basket) => {
    if (basket.quantity > 1) {
      const updatedBaskets = baskets.map(item => {
        if (item.id === basket.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setBaskets(updatedBaskets);
    }
  };

  const handleDelete = (basket) => {
    const updatedBaskets = baskets.filter((item) => item.id !== basket.id)
    setBaskets(updatedBaskets);
  }

  return (
    <>
    {baskets.lenght === 0 && ""}
    {baskets.length > 0 && (
      baskets.map((basket) => (
        <div className="card mb-3" style={{ maxWidth: 540 }} key={basket.id}>
        <div className="row g-0">
          <div className="col-md-4 my-auto">
            <Image src={basket.images[0]} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{basket.title}</h5>
              <div className="d-flex align-items-center gap-2" role="button">
                <FaCircleMinus className="text-danger fs-5" onClick={() => handleMinus(basket)} />
                <span className="fw-bold">{basket.quantity}</span>
                <FaCirclePlus className="text-danger fs-5" onClick={() => handlePlus(basket)} />
              </div>
              <p className="card-text">Total : {(basket.price * basket.quantity)} $</p>
              <button className="btn btn-danger" onClick={() => handleDelete(basket)}>Remove</button>
            </div>
          </div>
        </div>
      </div>
      ))
    )}

    </>
  );
}

export default CanvasCard;
