import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
//   const afterOpen = () => {
//     if (modalRef.current) {
//       // Apply dynamic styles after modal loads
//       modalRef.current.style.backgroundColor = "#f9f9f9";
//       modalRef.current.style.border = "2px solid #4caf50";
//       modalRef.current.style.transition = "all 0.3s ease-in-out";
//     }
//   };

export const Carbon_Footprint = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div id="carbon-footprint">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Carbon Footprint Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1000,
            paddingTop: "40px",
            textAlign: "center",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "12px",
            width: "90%",        // responsive width
            maxWidth: "700px",   // limit on large screens
            height: "auto",
            maxHeight: "90vh",   // never exceed viewport height
            overflowY: "auto",   // scroll if content too tall
            boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
          },
        }}
      >
        <div className="elfsight-app-245fdfde-5dfc-4ab0-a191-3ffe1bdcfb5e" data-elfsight-app-lazy></div>

        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <button
            onClick={() => setModalIsOpen(false)}
            style={{
              background: "#333",
              color: "#fff",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};
