import React from "react";

export default function PreviewTitle({docType}) {
  return (
    <div className="invoice">
      <h3>{docType.toUpperCase()}</h3>
      <p>Input Tax Credit is available on this Invoice</p>
    </div>
  );
}
