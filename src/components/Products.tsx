import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  // get the products from the server
  // set the products to the state

  const getProducts = async () => {
    const response = await fetch("http://localhost:5000/products/");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };
  getProducts();
  return (
    <div className="container col-12 mt-2 text-center">
      <h1>Products</h1>
      {/* grid view */}
      <div className="row p-3">
        {products.map((product: any) => (
          <div className="col-3" key={product.id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}$</p>
                <a href="#" className="btn btn-success">
                  Buy
                </a>
                {/* gap */}
                <div style={{ display: "inline-block", width: "10px" }}></div>
                <a href="#" className="btn btn-danger">
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
