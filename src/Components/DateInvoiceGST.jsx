import React from 'react'

export default function DateInvoiceGST() {
  return (
    <div className="date-invoice-gst">
          <div className="number">
            <label htmlFor="invoice-number">Invoice Number: </label>
            <input
              type="number"
              id="invoice-number"
              placeholder="Invoice Number"
              min="0"
            />
          </div>
          <div className="date">
            <label htmlFor="date">Invoice Date: </label>
            <input type="date" id="date" placeholder="Date" min="01-01-2024" />
          </div>
          <div className="gst-no">
            <label htmlFor="gst-no">GSTIN: </label>
            <input type="text" id="gst-no" placeholder="GST Number" />
            </div>
        </div>
  )
}
