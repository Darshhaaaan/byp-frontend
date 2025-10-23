"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children, requireApproval = false }) {
  const [authorized, setAuthorized] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setPopupMessage("Please login to continue");
      setShowPopup(true);
      setTimeout(() => router.push("/login"), 2000);
      return;
    }

    if (requireApproval) {
      const isApproved = localStorage.getItem("isApproved");
      if (isApproved !== "true") {
        setPopupMessage("Please wait for admin approval");
        setShowPopup(true);
        setTimeout(() => router.push("/"), 2000);
        return;
      }
    }

    setAuthorized(true);
  }, [router, requireApproval]);

  if (showPopup) {
    return (
      <>
        <div className="popup-overlay"></div>
        <div className="popup">
          <h3>{popupMessage}</h3>
        </div>
      </>
    );
  }

  return authorized ? children : null;
}
