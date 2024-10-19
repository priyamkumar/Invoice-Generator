import React, { useState } from "react";

export default function TotalAmount({items}) {
  console.log(items.map((item) => parseFloat(item.amount || 0)).reduce((acc, cur) => acc + cur, 0));
  const total = items.map((item) => parseFloat(item.amount || 0)).reduce((acc, cur) => acc + cur, 0);
  
  return (
    <div className="total-amount">
      <p>Total: {total.toFixed(2)}</p>
      <p>GST: </p>
      <p>Total Value</p>
      <b>Grand Total</b>
    </div>
  );
}
