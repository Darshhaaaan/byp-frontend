"use client";
import { useEffect, useState } from "react";
import { getProducts, getCategories } from "@/lib/api";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";

function ShopContent() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
  const router = useRouter();

  useEffect(() => {
    getCategories().then(res => setCategories(res.data)).catch(() => {});
  }, []);

  useEffect(() => {
    getProducts(selectedCat).then(res => setProducts(res.data)).catch(() => {});
  }, [selectedCat]);

  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Shop</h2>
        <div className="filter-section">
          <label>Filter by Category: </label>
          <select value={selectedCat} onChange={e => setSelectedCat(e.target.value)}>
            <option value="">All</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div className="product-grid">
          {products.map(p => (
            <div key={p._id} className="product-card" onClick={() => handleProductClick(p._id)}>
              <div className="product-image-container">
                <img src={p.image} alt={p.name} onError={(e) => e.target.style.display = 'none'} />
              </div>
              <h3>{p.name}</h3>
              <p className="product-card-price">₹{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function ShopPage() {
  return (
    <ProtectedRoute requireApproval={true}>
      <ShopContent />
    </ProtectedRoute>
  );
}
