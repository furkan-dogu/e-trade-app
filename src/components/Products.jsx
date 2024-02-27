import React, { useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  const [categories, setCategories] = useState("all")
  const [search, setSearch] = useState("")
  const btnColors = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "dark",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "dark",
  ];

  const categoryArr = [
    "all",
    ...new Set(products.map((item) => item.category)),
  ];

  const handleClick = (e) => {
    const selectedCategory = e.target.innerText.toLowerCase();
    setCategories(selectedCategory)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const newProduct = categories.toLowerCase() === "all"
  ? products.filter(
      (item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
  )
  : products.filter(
      (item) =>
          item.category.toLowerCase() === categories &&
          item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container mt-5 pt-5">
      <section
        className="d-flex justify-content-center flex-wrap gap-3"
      >
        {categoryArr.map((category, i) => (
          <button key={i} className={`btn btn-${btnColors[i]}`} onClick={handleClick}>{category.toUpperCase()}</button>
        ))}
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
            value={search}
            onChange={handleChange}
          />
        </div>
      </section>
      <h4 className="text-center mt-2">
        Category:{" "}
        <span className="text-danger">
          {categories.toUpperCase()}
        </span>
      </h4>
      <section
        className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 justify-content-center g-4 my-5"
      >
        {newProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Products;
