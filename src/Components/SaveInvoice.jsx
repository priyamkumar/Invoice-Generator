import React from "react";

export default function SaveInvoice() {
    const handleSave = () => {
        localStorage.setItem("invoices", JSON.stringify(""))
    }

  return (
    <div className="save">
      <button onClick={handleSave}>Save Invoice</button>
    </div>
  );
}
