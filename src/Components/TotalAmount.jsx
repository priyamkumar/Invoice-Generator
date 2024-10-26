import React from "react";

export default function TotalAmount({ totalAmount, totalGst }) {
  return (
    <div className="total-amount">
      <p>
        Total: <span>₹{totalAmount}</span>
      </p>
      <p>
        GST: <span>₹{totalGst}</span>
      </p>
      <b>
        Grand Total <span>₹{totalAmount + totalGst}</span>
      </b>
    </div>
  );
}
