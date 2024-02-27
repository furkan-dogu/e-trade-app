import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <main class="container mt-5 pt-5">
      <section
        className="d-flex justify-content-center flex-wrap gap-3"
        id="btns"
      >
        <button></button>
      </section>
      <section
        className="d-flex justify-content-center flex-wrap gap-3 mt-4"
        id="searchs"
      >
        <div className="col-12 col-sm-6">
          <input
            type="search"
            className="form-control"
            id="searchInput"
            placeholder="Search..."
          />
        </div>
      </section>
      <h4 className="text-center mt-2">
        Category:{" "}
        <span class="text-danger" id="category">
          ALL
        </span>
      </h4>
      <section
        className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 justify-content-center g-4 my-5"
        id="products"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Products;
