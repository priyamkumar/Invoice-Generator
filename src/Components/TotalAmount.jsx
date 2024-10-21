import React, { useState } from "react";

export default function TotalAmount({ totalAmount, totalGst }) {
  return (
    <div className="total-amount">
      <p>
        Total: <span>₹{totalAmount.toFixed(2)}</span>
      </p>
      <p>
        GST: <span>₹{totalGst.toFixed(2)}</span>
      </p>
      <b>
        Grand Total <span>₹{(totalAmount + totalGst).toFixed(2)}</span>
      </b>
    </div>
  );
}
