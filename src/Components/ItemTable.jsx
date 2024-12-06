import { useEffect } from "react";

export default function ItemTable({
  items,
  setItems,
  amountInWords,
  setAmountInWords,
  amountToWords,
  totalAmount,
  totalGst,
}) {
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newItems = [...items];
    newItems[index][name] = value;
    const quantity = parseFloat(newItems[index].quantity) || 1;
    const price = parseFloat(newItems[index].price) || 0;
    const cgstRate = parseFloat(newItems[index].cgst) || 0;
    const cgstAmount = Math.round((price * cgstRate) / 100) * quantity;
    const utgstRate = parseFloat(newItems[index].utgst) || 0;
    const utgstAmount = Math.round((price * utgstRate) / 100) * quantity;
    const igstRate = parseFloat(newItems[index].igst) || 0;
    const igstAmount = Math.round(((price * igstRate) / 100) * quantity);
    const amount = price * quantity;

    newItems[index].cgstAmount = cgstAmount;
    newItems[index].utgstAmount = utgstAmount;
    newItems[index].igstAmount = igstAmount;
    newItems[index].amount = amount;

    setItems(newItems);
    localStorage.setItem("items",JSON.stringify(items));
  };

  const addRow = () => {
    setItems([
      ...items,
      {
        serial: items.length + 1,
        hsn: "",
        description: "",
        quantity: 1,
        unit: "",
        price: 0,
        cgst: "",
        cgstAmount: 0,
        utgst: "",
        utgstAmount: 0,
        igst: "",
        igstAmount: 0,
        amount: 0,
      },
    ]);
    localStorage.setItem("items",JSON.stringify(items));
  };

  const clearItems = () => {
    setItems([{
      serial: 1,
      hsn: "",
      description: "",
      quantity: 1,
      unit: "",
      price: 0,
      cgst: "",
      cgstAmount: 0,
      utgst: "",
      utgstAmount: 0,
      igst: "",
      igstAmount: 0,
      amount: 0,
    }]);
    localStorage.removeItem("items");
  }

  const removeRow = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    const updatedItems = newItems.map((item, idx) => ({
      ...item,
      serial: idx + 1,
    }));
    setItems(updatedItems);
  };

  useEffect(() => {
    setAmountInWords(amountToWords(totalAmount + totalGst));
  }, [totalAmount, totalGst]);
  
  return (
    <div className="item-input-table">
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
            <label>HSN Code</label>
            <input
              type="text"
              name="hsn"
              value={item.hsn}
              min="0"
              onChange={(e) => handleInputChange(index, e)}
              placeholder="HSN Code"
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
          <div className="input-group">
            <label>Total Amount in words</label>
            <input
              type="text"
              name="amount"
              value={amountInWords}
              readOnly
              placeholder="Amount"
            />
          </div>

          <div className="button-container">
            <button className="remove-btn" onClick={() => removeRow(index)}>Remove</button>
          </div>
        </div>
      ))}

      {items.length < 18 && (
        <button type="button" id="add-btn" onClick={addRow}>
          Add Item
        </button>
      )}
      <button type="button" id="add-btn" onClick={clearItems}>
          Clear Items
        </button>
    </div>
  );
}
