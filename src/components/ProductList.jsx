import React from "react";
import productsData from "../data/productDatas.json";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="product-list-page">
      <div className="product-list-header">
        <h2>PRINTED T-SHIRTS <i className="fa-solid fa-print"></i></h2>
        <h6>Creative Prints Bold Styles <i class="fa-brands fa-angellist"></i></h6>
      </div>

      <div className="product-btn">
        <button>SHOP NOW <i class="fa-solid fa-shop"></i></button>
      </div>


      <div className="product-container">
        {productsData.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;