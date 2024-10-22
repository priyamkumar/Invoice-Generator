import React from 'react'

export default function ItemTable({items, setItems}) {
const handleInputChange = (index, event) => {
  const {name, value} = event.target;
  const newItems = [...items];
  newItems[index][name] = value;
  const quantity = parseFloat(newItems[index].quantity) || 1;
  const price = parseFloat(newItems[index].price) || 0;
  const cgstRate = parseFloat(newItems[index].cgst) || 0;
  const cgstAmount = (price * cgstRate / 100) * quantity;
  const utgstRate = parseFloat(newItems[index].utgst) || 0;
  const utgstAmount = (price * utgstRate / 100) * quantity;
  const igstRate = parseFloat(newItems[index].igst) || 0;
  const igstAmount = (price * igstRate / 100) * quantity;
  const amount = price * quantity;

  newItems[index].cgstAmount = cgstAmount.toFixed(2);
  newItems[index].utgstAmount = utgstAmount.toFixed(2);
  newItems[index].igstAmount = igstAmount.toFixed(2);
  newItems[index].amount = amount.toFixed(2);

  setItems(newItems);
}

  const addRow = () => {
    setItems([...items,{serial: items.length + 1, description: "", quantity: 1, unit: "", price: 0, cgst: "", cgstAmount: 0 ,utgst: "", utgstAmount: 0,igst: "", igstAmount: 0, amount: 0 }])
  }
  const removeRow = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    const updatedItems = newItems.map((item, idx) => ({
      ...item,
      serial: idx + 1
    }));
    setItems(updatedItems);
  };
  return (
    <div className="item-table">
  {items.map((item, index) => (
    <div className="item-row" key={index}>
      {/* First Row */}
      <div className="input-group">
        <label>S. No.</label>
        <input
          type="number"
          name="serial"
          value={item.serial}
          min="0"
          onChange={(e) => handleInputChange(index, e)}
          placeholder="Serial No."
        />
      </div>
      <div className="input-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={item.description}
          onChange={(e) => handleInputChange(index, e)}
          placeholder="Item description"
        />
      </div>
      <div className="input-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={item.quantity}
          min="0"
          onChange={(e) => handleInputChange(index, e)}
          placeholder="Quantity"
        />
      </div>
      <div className="input-group">
        <label>Unit</label>
        <input
          type="text"
          name="unit"
          value={item.unit}
          onChange={(e) => handleInputChange(index, e)}
          placeholder="Unit"
        />
      </div>
      <div className="input-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={item.price}
          min="0"
          onChange={(e) => handleInputChange(index, e)}
          placeholder="Price"
        />
      </div>

      {/* Second Row */}
      <div className="input-group">
        <label>CGST (%)</label>
        <input
          type="number"
          name="cgst"
          value={item.cgst}
          min="0"
          onChange={(e) => handleInputChange(index, e)}
          placeholder="CGST %"
        />
      </div>
      <div className="input-group">
        <label>CGST Amount</label>
        <input
          type="text"
          name="cgstAmount"
          value={item.cgstAmount}
          readOnly
          placeholder="CGST Amount"
        />
      </div>
      <div className="input-group">
        <label>UTGST (%)</label>
        <input
          type="number"
          name="utgst"
          value={item.utgst}
          min="0"
          onChange={(e) => handleInputChange(index, e)}
          placeholder="UTGST %"
        />
      </div>
      <div className="input-group">
        <label>UTGST Amount</label>
        <input
          type="text"
          name="utgstAmount"
          value={item.utgstAmount}
          readOnly
          placeholder="UTGST Amount"
        />
      </div>
      <div className="input-group">
        <label>IGST (%)</label>
        <input
          type="number"
          name="igst"
          value={item.igst}
          min="0"
          onChange={(e) => handleInputChange(index, e)}
          placeholder="IGST %"
        />
      </div>
      <div className="input-group">
        <label>IGST Amount</label>
        <input
          type="text"
          name="igstAmount"
          value={item.igstAmount}
          readOnly
          placeholder="IGST Amount"
        />
      </div>
      <div className="input-group">
        <label>Total Amount</label>
        <input
          type="text"
          name="amount"
          value={item.amount}
          readOnly
          placeholder="Amount"
        />
      </div>

      <button onClick={() => removeRow(index)}>Remove</button>
    </div>
  ))}

  <button type="button" id="add-btn" onClick={addRow}>Add Item</button>
</div>

  )
}
