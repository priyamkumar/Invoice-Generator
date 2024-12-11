import React from 'react'

export default function PreviewInvoiceDetails({invoiceDetails}) {
  const [invoice, date] = invoiceDetails;
  return (
    <div className="invoice-details">
    <p>
      <b>Invoice Details</b>
    </p>
    <p>No. : {invoice}</p>
    <p>Date : {date}</p>
  </div>
  )
}
