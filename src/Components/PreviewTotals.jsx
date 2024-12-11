import React from 'react'

export default function PreviewTotals({totals}) {
  const [totalAmount, totalUtgst, totalCgst, totalIgst, totalGst] = totals;
  return (
    <div className="totals">
            <p>Total Amount: ₹{totalAmount}</p>
            <p>UTGST: ₹{totalUtgst}</p>
            <p>CGST: ₹{totalCgst}</p>
            <p>IGST: ₹{totalIgst}</p>
            <p>Total GST: ₹{totalGst}</p>
            <b>Grand Total: ₹{totalAmount + totalGst}</b>
          </div>
  )
}
