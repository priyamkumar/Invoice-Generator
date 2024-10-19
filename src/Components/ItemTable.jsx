import React from 'react'

export default function ItemTable({items, setItems}) {
const handleInputChange = (index, event) => {
  const {name, value} = event.target;
  const newItems = [...items];
  newItems[index][name] = value;
  const serial = parseFloat(newItems[index].serial) || 0;
  const quantity = parseFloat(newItems[index].quantity) || 0;
  const unit = parseFloat(newItems[index].unit) || "";
  const price = parseFloat(newItems[index].price) || 0;
  const cgstRate = parseFloat(newItems[index].cgst) || 0;
  const cgstAmount = (price * cgstRate / 100) * quantity;
  const sgstRate = parseFloat(newItems[index].sgst) || 0;
  const sgstAmount = (price * sgstRate / 100) * quantity;
  const igstRate = parseFloat(newItems[index].igst) || 0;
  const igstAmount = (price * igstRate / 100) * quantity;
  const amount = (price * quantity) + cgstAmount + sgstAmount + igstAmount;

  newItems[index].cgstAmount = cgstAmount.toFixed(2);
  newItems[index].sgstAmount = sgstAmount.toFixed(2);
  newItems[index].igstAmount = igstAmount.toFixed(2);
  newItems[index].amount = amount.toFixed(2);

  setItems(newItems);
}

  const addRow = () => {
    setItems([...items,{ description: "", quantity: 0, mrp: 0, rate: 0, cgst: 0, cgstAmount: 0, total: 0 }])
  }
  const removeRow = (index) => {
    const newItems = items.filter((item,i) => i !== index);
    setItems(newItems);
    console.log(items);
    }
  return (
    <div className="item-table">
          <table>
          <thead>
            <tr>
            <th>S. No.</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Price</th>
              <th>CGST</th>
              <th>CGST Amount</th>
              <th>SGST</th>
              <th>SGST Amount</th>
              <th>IGST</th>
              <th>IGST Amount</th>
              <th>Amount</th>
            </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>
                    <input
                      type="text"
                      name="serial"
                      value={item.serial}
                      onChange={(e) => handleInputChange(index, e)}
                      placeholder="Serial No."
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="description"
                      value={item.description}
                      onChange={(e) => handleInputChange(index, e)}
                      placeholder="Item description"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      onChange={(e) => handleInputChange(index, e)}
                      placeholder="Quantity"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="unit"
                      value={item.unit}
                      onChange={(e) => handleInputChange(index, e)}
                      placeholder="Unit"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      value={item.price}
                      onChange={(e) => handleInputChange(index, e)}
                      placeholder="Price"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="cgst"
                      value={item.cgst}
                      onChange={(e) => handleInputChange(index, e)}
                      placeholder="CGST %"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="cgstAmount"
                      value={item.cgstAmount}
                      readOnly
                      placeholder="CGST Amount"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="sgst"
                      value={item.sgst}
                      onChange={(e) => handleInputChange(index, e)}
                      placeholder="SGST %"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="sgstAmount"
                      value={item.sgstAmount}
                      readOnly
                      placeholder="SGST Amount"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="igst"
                      value={item.igst}
                      onChange={(e) => handleInputChange(index, e)}
                      placeholder="IGST %"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="igstAmount"
                      value={item.igstAmount}
                      readOnly
                      placeholder="IGST Amount"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="amount"
                      value={item.amount}
                      readOnly
                      placeholder="Amount"
                    />
                  </td>
                  <td>
                    <button onClick={() => removeRow(index)}>Remove</button>
                  </td>
                </tr>
                ))}
            </tbody>
          </table>
          <button type="button" onClick={addRow}>Add Item</button>
        </div>
  )
}
