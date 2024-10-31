import React from 'react'

export default function PreviewTable({items}) {
  return (
    <table className="item-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>HSN<br/>Code</th>
              <th>Particulars</th>
              <th>QTY.</th>
              <th>Unit</th>
              <th>Rate</th>
              <th>UTGST</th>
              <th>CGST</th>
              <th>IGST</th>
              <th>Amount<br/>Before Tax</th>
              <th>Included<br/>Tax</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="table-cell">{item.serial}</td>
                <td className="table-cell">{item.hsn}</td>
                <td className="table-cell">{item.description}</td>
                <td className="table-cell">{item.quantity}</td>
                <td className="table-cell">{item.unit}</td>
                <td className="table-cell">₹{item.price}</td>
                <td className="table-cell">
                  ₹{Math.round(item.utgstAmount)} {`(${item.utgst}%)`}
                </td>
                <td className="table-cell">
                  ₹{Math.round(item.cgstAmount)} {`(${item.cgst}%)`}
                </td>
                <td className="table-cell">
                  ₹{Math.round(item.igstAmount)} {`(${item.igst}%)`}
                </td>
                <td className="table-cell">₹{Math.round(item.amount)}</td>
                <td className="table-cell">
                  ₹
                  {Math.round(
                    Number(item.amount) +
                      Number(item.cgstAmount) +
                      Number(item.utgstAmount) +
                      Number(item.igstAmount)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}
