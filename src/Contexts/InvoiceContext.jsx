import { useContext, useState, createContext } from "react";

export const InvoiceContext = createContext();

export function InvoiceProvider({ children }) {
  const [invoices, setInvoices] = useState(
    JSON.parse(localStorage.getItem("invoices")) || []
  );

  return (
    <InvoiceContext.Provider value={{ invoices, setInvoices }}>
      {children}
    </InvoiceContext.Provider>
  );
}

export const useInvoice = () => useContext(InvoiceContext);
