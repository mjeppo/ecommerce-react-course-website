import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";
import { Link } from "react-router-dom";

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welkom op ShopHub!</h1>
        <p className="home-subtitle">Ontdek fantastiche producten voor ongelooflijke prijzen</p>
      </div>
      <div className="container">
        <h2 className="page-title">Onze producten</h2>
        <div className="product-grid">
          {products.map((product) => (
              <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
