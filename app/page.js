"use client";

import Navbar from "./components/Navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="home-layout">
        
        <div className="side-containers left-side">
          <div className="side-container">
            {/* Placeholder empty image box */}
            <div className="empty-image-box"></div>
          </div>
          <div className="side-container">
            <div className="empty-image-box"></div>
          </div>
          <div className="side-container">
            <div className="empty-image-box"></div>
          </div>
          <div className="side-container menu-icon-box">
            <div className="empty-image-box"></div>
          </div>
        </div>

        <div className="main-logo-container">
          Example E-commerce site
        </div>
    </div>

      <style jsx>{`
        .empty-image-box {
          width: 100%;
          height: 100%;
          background-color: #3a3a3a;
          border-radius: 12px;
          border: 2px dashed #555;
        }
      `}</style>
      
    </>
  );
}
