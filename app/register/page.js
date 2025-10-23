"use client";
import { useState } from "react";
import { registerUser } from "@/lib/api";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [webhookURL, setWebhookURL] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser({ name, password, referralCode, webhookURL });
      setMsg("Registration successful! Redirecting to login...");
      setTimeout(() => router.push("/login"), 2000);
    } catch (err) {
      setMsg(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <input type="text" placeholder="Referral Code (optional)" value={referralCode} onChange={e => setReferralCode(e.target.value)} />
          <input type="url" placeholder="Discord Webhook URL (optional)" value={webhookURL} onChange={e => setWebhookURL(e.target.value)} />
          <button type="submit">Register</button>
        </form>
        {msg && <div className={`message ${msg.includes("success") ? "success" : "error"}`}>{msg}</div>}
      </div>
    </>
  );
}
