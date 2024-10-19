import React, { useState } from "react";

export default function TotalAmount({items}) {
  const totalAmount = items.reduce((acc, cur) => acc + parseFloat(cur.amount || 0), 0);
  const totalGst = items.reduce((acc, cur) => acc + parseFloat(cur.cgstAmount || 0) + parseFloat(cur.utgstAmount || 0) + parseFloat(cur.igstAmount || 0), 0);

  return (
    <div className="total-amount">
      <p>Total: <span>₹{totalAmount.toFixed(2)}</span></p>
      <p>GST: <span>₹{totalGst.toFixed(2)}</span></p>
      <b>Grand Total <span>₹{(totalAmount + totalGst).toFixed(2)}</span></b>
    </div>
  );
}
