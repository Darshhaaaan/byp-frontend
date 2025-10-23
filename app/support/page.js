"use client";
import { useState, useEffect } from "react";
import { createSupportTicket, getUserTickets } from "@/lib/api";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";

function SupportContent() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [tickets, setTickets] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = () => {
    getUserTickets().then(res => setTickets(res.data)).catch(() => {});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSupportTicket({ subject, message });
      setMsg("Support ticket submitted successfully!");
      setSubject("");
      setMessage("");
      loadTickets();
      setTimeout(() => setMsg(""), 3000);
    } catch (err) {
      setMsg(err.response?.data?.message || "Failed to submit ticket");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Support</h2>
        <div className="form-container" style={{ maxWidth: "600px", margin: "2rem auto" }}>
          <h3>Submit a Support Ticket</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Describe your issue..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={5}
              required
            />
            <button type="submit">Submit Ticket</button>
          </form>
          {msg && <div className={`message ${msg.includes("success") ? "success" : "error"}`}>{msg}</div>}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <h3>Your Support Tickets</h3>
          {tickets.length === 0 ? (
            <p>No support tickets yet</p>
          ) : (
            tickets.map(ticket => (
              <div key={ticket._id} className="order-item">
                <h4>{ticket.subject}</h4>
                <p>{ticket.message}</p>
                <p><strong>Status:</strong> <span className={`status-${ticket.status.toLowerCase().replace(' ', '-')}`}>{ticket.status}</span></p>
                <p className="cart-order-date">{new Date(ticket.createdAt).toLocaleString()}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default function SupportPage() {
  return (
    <ProtectedRoute requireApproval={true}>
      <SupportContent />
    </ProtectedRoute>
  );
}
