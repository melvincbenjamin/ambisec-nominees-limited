import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const WhatsappButton = () => {
  const whatsappNumber = "+2348033048836";
  const message = "Hello! I would like to inquire about your services.";

  return (
    <a
      href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50px",
        padding: "10px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        zIndex: 1000,
        cursor: "pointer",
        textDecoration: "none",
        fontWeight: "500",
      }}
      title="Click to chat on WhatsApp"
    >
      <i
        className="bi bi-whatsapp"
        style={{
          fontSize: "24px",
          marginRight: "8px",
        }}
      ></i>
      <span style={{ fontSize: "14px" }}>Connect With Us</span>
    </a>
  );
};

export default WhatsappButton;