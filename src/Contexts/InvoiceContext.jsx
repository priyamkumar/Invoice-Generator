import { useContext, useState, createContext } from "react";

export const InvoiceContext = createContext();

export function InvoiceProvider({ children }) {
  const [invoices, setInvoices] = useState(
    JSON.parse(localStorage.getItem("invoices")) || []
  );

  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState([]);

  return (
    <InvoiceContext.Provider value={{ invoices, setInvoices, edit, setEdit, editData, setEditData}}>
      {children}
    </InvoiceContext.Provider>
  );
}

export const useInvoice = () => useContext(InvoiceContext);
