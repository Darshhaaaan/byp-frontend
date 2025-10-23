"use client";
import { useEffect, useState } from "react";
import { getUserOrders } from "@/lib/api";

export default function CartPopup({ isOpen, onClose }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (isOpen) {
      getUserOrders().then(res => setOrders(res.data)).catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart-popup">
        <div className="cart-header">
          <h2>Your Orders</h2>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>
        <div className="cart-content">
          {orders.length === 0 ? (
            <p>No orders yet</p>
          ) : (
            orders.map(order => (
              <div key={order._id} className="cart-order-card">
                <img 
                  src={order.variant?.image || order.product?.image} 
                  alt={order.product?.name} 
                  className="cart-order-img" 
                />
                <div className="cart-order-details">
                  <h4>{order.product?.name}</h4>
                  {order.variant && (
                    <p style={{ color: "#4af", fontWeight: "600" }}>
                      Variant: {order.variant.nickname}
                    </p>
                  )}
                  <p>Quantity: {order.quantity}</p>
                  <p>
                    Price: ₹{order.variant?.price || order.product?.price}
                  </p>
                  <p>
                    Status: <span className={`status-${order.status?.toLowerCase()}`}>{order.status}</span>
                  </p>
                  <p className="cart-order-date">{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
