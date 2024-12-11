import React from 'react'

export default function PreviewBankDetails({amountInWords, bankDetailsArr, bankName, bankAccountNumber, bankBranchIfsc}) {
  const [bankDetails, setBankDetails] = bankDetailsArr;
  return (
    <div className="bank-details">
            
            <p className="words">
              {amountInWords} {amountInWords && " Rupees only"}
            </p>
            <p className="text-center">
              <b>Bank Details:</b>
            </p>
            <ul>
              <li>
                <b>Bank Name:</b> {bankDetails.bankName}
              </li>
              <li>
                <b>Bank Account Number:</b> {bankDetails.bankAccountNumber ? bankDetails.bankAccountNumber : ""}
              </li>
              <li>
                <b>Bank Branch IFSC:</b> {bankDetails.bankBranchIfsc}
              </li>
            </ul>
          </div>
  )
}
