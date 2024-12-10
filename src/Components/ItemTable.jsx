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
    let newItems = [
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
    ];
    setItems(newItems);
    localStorage.setItem("items",JSON.stringify(newItems));
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
    localStorage.setItem("items",JSON.stringify(updatedItems));
  };

  useEffect(() => {
    setAmountInWords(amountToWords(totalAmount + totalGst));
  }, [totalAmount, totalGst]);
  
  return (
    <div className="item-input-table">
      {items.map((item, index) => (
        <div className="item-row" key={index}>
          <div className="input-group">
            <label htmlFor={`serial${index}`}>S. No.</label>
            <input
              type="number"
              name="serial"
              id={`serial${index}`}
              value={item.serial}
              min="0"
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Serial No."
            />
          </div>
          <div className="input-group">
            <label htmlFor={`hsn${index}`}>HSN Code</label>
            <input
              type="text"
              name="hsn"
              id={`hsn${index}`}
              value={item.hsn}
              min="0"
              onChange={(e) => handleInputChange(index, e)}
              placeholder="HSN Code"
            />
          </div>
          <div className="input-group">
            <label htmlFor={`description${index}`}>Description</label>
            <input
              type="text"
              name="description"
              id={`description${index}`}
              value={item.description}
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Item description"
            />
          </div>
          <div className="input-group">
            <label htmlFor={`quantity${index}`}>Quantity</label>
            <input
              type="number"
              name="quantity"
              id={`quantity${index}`}
              value={item.quantity}
              min="0"
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Quantity"
            />
          </div>
          <div className="input-group">
            <label htmlFor={`unit${index}`}>Unit</label>
            <input
              type="text"
              name="unit"
              id={`unit${index}`}
              value={item.unit}
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Unit"
            />
          </div>
          <div className="input-group">
            <label htmlFor={`price${index}`}>Price</label>
            <input
              type="number"
              name="price"
              id={`price${index}`}
              value={item.price}
              min="0"
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Price"
            />
          </div>

          <div className="input-group">
            <label htmlFor={`cgst${index}`}>CGST (%)</label>
            <input
              type="number"
              name="cgst"
              id={`cgst${index}`}
              value={item.cgst}
              min="0"
              onChange={(e) => handleInputChange(index, e)}
              placeholder="%"
            />
          </div>
          <div className="input-group">
            <label htmlFor={`cgstAmount${index}`}>CGST Amount</label>
            <input
              type="text"
              name="cgstAmount"
              id={`cgstAmount${index}`}
              value={item.cgstAmount}
              readOnly
              placeholder="CGST Amount"
            />
          </div>
          <div className="input-group">
            <label htmlFor={`utgst${index}`}>UTGST (%)</label>
            <input
              type="number"
              name="utgst"
              id={`utgst${index}`}
              value={item.utgst}
              min="0"
              onChange={(e) => handleInputChange(index, e)}
              placeholder="%"
            />
          </div>
          <div className="input-group">
            <label htmlFor={`utgstAmount${index}`}>UTGST Amount</label>
            <input
              type="text"
              name="utgstAmount"
              id={`utgstAmount${index}`}
              value={item.utgstAmount}
              readOnly
              placeholder="UTGST Amount"
            />
          </div>
          <div className="input-group">
            <label htmlFor={`igst${index}`}>IGST (%)</label>
            <input
              type="number"
              name="igst"
              id={`igst${index}`}
              value={item.igst}
              min="0"
              onChange={(e) => handleInputChange(index, e)}
              placeholder="%"
            />
          </div>
          <div className="input-group">
            <label htmlFor={`igstAmount${index}`}>IGST Amount</label>
            <input
              type="text"
              name="igstAmount"
              id={`igstAmount${index}`}
              value={item.igstAmount}
              readOnly
              placeholder="IGST Amount"
            />
          </div>
          <div className="input-group">
            <label htmlFor={`amount${index}`}>Total Amount</label>
            <input
              type="text"
              name="amount"
              id={`amount${index}`}
              value={item.amount}
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
      <button type="button" id="clear-btn" onClick={clearItems}>
          Clear Items
        </button>
    </div>
  );
}
