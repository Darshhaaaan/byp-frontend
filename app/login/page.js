"use client";
import { useState } from "react";
import { loginUser } from "@/lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await loginUser({ name, password });
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("isApproved", res.data.isApproved ? "true" : "false");
      localStorage.setItem("referralCode", res.data.referralCode || "");
      setMsg("Login successful!");
      setTimeout(() => router.push("/"), 1000);
    } else {
      setMsg(res.data.message || "Login failed");
    }
  } catch (err) {
    setMsg(err.response?.data?.message || "Login failed");
  }
};

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <div className="message">
          Dont have an account? <Link href="/register" style={{ color: "#4af" }}>Register</Link>
        </div>
        {msg && <div className={`message ${msg.includes("success") ? "success" : "error"}`}>{msg}</div>}
      </div>
    </>
  );
}
