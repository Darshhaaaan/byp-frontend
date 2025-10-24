"use client";
import { useEffect, useState } from "react";
import { getProducts, placeOrder } from "@/lib/api";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import ProtectedRoute from "../../components/ProtectedRoute";

function ProductDetailContent({ params }) {
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

useEffect(() => {
  loadProduct();
}, [loadProduct]);

  const loadProduct = async () => {
    try {
      const res = await getProducts();
      const foundProduct = res.data.find(p => p._id === params.id);
      if (foundProduct) {
        setProduct(foundProduct);
        setMainImage(foundProduct.image);
      }
    } catch (err) {
      console.error("Error loading product:", err);
    }
  };

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
    setMainImage(variant.image || product.image);
  };

  const handleMainClick = () => {
    setSelectedVariant(null);
    setMainImage(product.image);
  };

  const handleOrder = async () => {
    try {
      await placeOrder({ 
        productId: product._id, 
        quantity: 1,
        variant: selectedVariant
      });
      setMsg("Order placed successfully!");
      setTimeout(() => setMsg(""), 3000);
    } catch (err) {
      setMsg("Order failed");
    }
  };

  if (!product) return <div>Loading...</div>;

  const displayPrice = selectedVariant ? selectedVariant.price : product.price;
  const displayDescription = selectedVariant ? selectedVariant.description : product.description;

  return (
    <>
      <Navbar />
      <div className="container" style={{ maxWidth: "1000px" }}>
        <button onClick={() => router.back()} className="back-button">← Back to Shop</button>
        
        <div className="product-detail-layout">
          <div className="product-detail-images">
            <div className="main-image-container">
              <img src={mainImage} alt={product.name} className="main-product-image" onError={(e) => e.target.style.display = 'none'} />
            </div>
            
            {product.variants && product.variants.length > 0 && (
              <div className="variant-thumbnails">
                <div 
                  className={`variant-thumb ${!selectedVariant ? 'active' : ''}`}
                  onClick={handleMainClick}
                >
                  <img src={product.image} alt="Original" onError={(e) => e.target.style.display = 'none'} />
                  <span>Original</span>
                </div>
                {product.variants.map((variant, idx) => (
                  <div 
                    key={idx} 
                    className={`variant-thumb ${selectedVariant === variant ? 'active' : ''}`}
                    onClick={() => handleVariantClick(variant)}
                  >
                    <img src={variant.image || product.image} alt={variant.nickname} onError={(e) => e.target.style.display = 'none'} />
                    <span>{variant.nickname}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="product-detail-info">
            <h1>{product.name}</h1>
            {selectedVariant && <h3 style={{ color: "#aaa", marginTop: "0.5rem" }}>Variant: {selectedVariant.nickname}</h3>}
            <p className="product-price">₹{displayPrice}</p>
            <p className="product-category">Category: {product.category?.name || "Uncategorized"}</p>
            
            <div className="product-description">
              <h3>Description</h3>
              <p>{displayDescription}</p>
            </div>

            {selectedVariant && selectedVariant.attributes && (
              <div className="product-attributes">
                <h4>Attributes:</h4>
                {Object.entries(selectedVariant.attributes).map(([key, value]) => (
                  <span key={key} className="attribute-tag">
                    {key}: {value}
                  </span>
                ))}
              </div>
            )}

            <button className="order-button" onClick={handleOrder}>
              Order Now
            </button>
            {msg && <div className={`message ${msg.includes("success") ? "success" : "error"}`}>{msg}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default function ProductDetailPage({ params }) {
  return (
    <ProtectedRoute requireApproval={true}>
      <ProductDetailContent params={params} />
    </ProtectedRoute>
  );
}
