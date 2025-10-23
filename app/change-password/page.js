"use client";
import { useState } from "react";
import { changePassword } from "@/lib/api";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";

function ChangePasswordContent() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changePassword({ oldPassword, newPassword });
      setMsg("Password changed successfully!");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      setMsg(err.response?.data?.message || "Failed to change password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <input type="password" placeholder="Old Password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} required />
          <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
          <button type="submit">Change Password</button>
        </form>
        {msg && <div className={`message ${msg.includes("success") ? "success" : "error"}`}>{msg}</div>}
      </div>
    </>
  );
}

export default function ChangePasswordPage() {
  return (
    <ProtectedRoute>
      <ChangePasswordContent />
    </ProtectedRoute>
  );
}
