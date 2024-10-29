import React from 'react'

export default function PreviewBankDetails({amountInWords, bankName, bankAccountNumber, bankBranchIfsc}) {
  return (
    <div className="bank-details">
            <p>
              <b>Total Invoice Amount in Words</b>
            </p>
            <p className="words">
              {amountInWords} {amountInWords && " Rupees only"}
            </p>
            <p className="text-center">
              <b>Bank Details:</b>
            </p>
            <ul>
              <li>
                <b>Bank Name:</b> {bankName}
              </li>
              <li>
                <b>Bank Account Number:</b> {bankAccountNumber}
              </li>
              <li>
                <b>Bank Branch IFSC:</b> {bankBranchIfsc}
              </li>
            </ul>
          </div>
  )
}
