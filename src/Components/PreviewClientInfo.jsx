import React from 'react'

export default function PreviewClientInfo({clientName, clientAddress, clientGst}) {
  return (
    <div className="client-info">
            <p>
              <b>Bill To</b>
            </p>
            <p>M/s {clientName}</p>
            <p>{clientAddress}</p>
            <p>GSTIN: {clientGst}</p>
          </div>
  )
}
