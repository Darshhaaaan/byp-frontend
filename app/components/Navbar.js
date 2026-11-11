"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CartPopup from "./CartPopup";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const code = localStorage.getItem("referralCode");
    setIsLoggedIn(!!token);
    setReferralCode(code || "");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("referralCode");
    localStorage.removeItem("isApproved");
    setIsLoggedIn(false);
    setShowDropdown(false);
    setShowMobileMenu(false);
    router.push("/");
  };

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="navbar-brand">
  <Image
    src="/images/logo.png"
    alt="ByThePound"
    width={180}
    height={60}
    priority
  />
</Link>
        
        <button className="mobile-menu-toggle" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-right ${showMobileMenu ? 'mobile-active' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setShowMobileMenu(false)}>Home</Link>
          <Link href="/shop" className="nav-link" onClick={() => setShowMobileMenu(false)}>Order Now</Link>
          <Link href="/support" className="nav-link" onClick={() => setShowMobileMenu(false)}>Support</Link>
          {!isLoggedIn ? (
            <Link href="/login" className="nav-link" onClick={() => setShowMobileMenu(false)}>Login</Link>
          ) : (
            <div className="dropdown">
              <button className="nav-link" onClick={() => setShowDropdown(!showDropdown)}>
                Profile
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  {referralCode && (
                    <div className="referral-code-display">
                      <small>Referral Code:</small>
                      <strong>{referralCode}</strong>
                    </div>
                  )}
                  <Link href="/change-password" className="nav-link" onClick={() => setShowMobileMenu(false)}>Change Password</Link>
                  <button className="nav-link" onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          )}
          <button className="nav-link" onClick={() => { setShowCart(true); setShowMobileMenu(false); }}>Cart</button>
        </div>
      </nav>
      <CartPopup isOpen={showCart} onClose={() => setShowCart(false)} />
    </>
  );
}