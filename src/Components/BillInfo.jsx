import React, { useState } from "react";
import InvoiceDetails from "./InvoiceDetails";
import DateInvoiceGST from "./DateInvoiceGST";
import ItemTable from "./ItemTable";
import TotalAmount from "./TotalAmount";
import PreviewHeading from "./PreviewHeading";
import DocumentPreview from "./DocumentPreview";
import BankDetails from "./BankDetails";
import SaveInvoice from "./SaveInvoice";

export default function BillInfo() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || [
      {
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
      },
    ]
  );

  const [details, setDetails] = useState(
    JSON.parse(localStorage.getItem("details")) || {
      cName: "Company Name",
      cAddress: "",
      cPhone: "",
      cEmail: "",
      clientName: "",
      clientAddress: "",
      clientPhone: "",
      clientEmail: "",
      clientGst: "",
    }
  );

  const [amountInWords, setAmountInWords] = useState("");

  let today = new Date().toISOString().split("T")[0];

  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceNumber: 1,
    invoiceDate: today,
    gstNum: "",
  });

  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    bankAccountNumber: 0,
    bankBranchIfsc: "",
  });

  const [invoices, setInvoices] = useState(JSON.parse(localStorage.getItem("invoices")) || []);

  const totalAmount = items.reduce(
    (acc, cur) => acc + parseFloat(cur.amount || 0),
    0
  );
  const totalGst = items.reduce(
    (acc, cur) =>
      acc +
      parseFloat(cur.cgstAmount || 0) +
      parseFloat(cur.utgstAmount || 0) +
      parseFloat(cur.igstAmount || 0),
    0
  );
  const totalCgst = items.reduce(
    (acc, cur) => acc + parseFloat(cur.cgstAmount || 0),
    0
  );
  const totalUtgst = items.reduce(
    (acc, cur) => acc + parseFloat(cur.utgstAmount || 0),
    0
  );
  const totalIgst = items.reduce(
    (acc, cur) => acc + parseFloat(cur.igstAmount || 0),
    0
  );

  function amountToWords(amount) {
    var sglDigit = [
        "Zero",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
      ],
      dblDigit = [
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
      ],
      tensPlace = [
        "",
        "Ten",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
      ],
      handle_tens = function (dgt, prevDgt) {
        return 0 == dgt
          ? ""
          : " " + (1 == dgt ? dblDigit[prevDgt] : tensPlace[dgt]);
      },
      handle_utlc = function (dgt, nxtDgt, denom) {
        return (
          (0 != dgt && 1 != nxtDgt ? " " + sglDigit[dgt] : "") +
          (0 != nxtDgt || dgt > 0 ? " " + denom : "")
        );
      };

    var str = "",
      digitIdx = 0,
      digit = 0,
      nxtDigit = 0,
      words = [];
    if (((amount += ""), isNaN(parseInt(amount)))) str = "";
    else if (parseInt(amount) > 0 && amount.length <= 10) {
      for (digitIdx = amount.length - 1; digitIdx >= 0; digitIdx--)
        switch (
          ((digit = amount[digitIdx] - 0),
          (nxtDigit = digitIdx > 0 ? amount[digitIdx - 1] - 0 : 0),
          amount.length - digitIdx - 1)
        ) {
          case 0:
            words.push(handle_utlc(digit, nxtDigit, ""));
            break;
          case 1:
            words.push(handle_tens(digit, amount[digitIdx + 1]));
            break;
          case 2:
            words.push(
              0 != digit
                ? " " +
                    sglDigit[digit] +
                    " Hundred" +
                    (0 != amount[digitIdx + 1] && 0 != amount[digitIdx + 2]
                      ? " And"
                      : "")
                : ""
            );
            break;
          case 3:
            words.push(handle_utlc(digit, nxtDigit, "Thousand"));
            break;
          case 4:
            words.push(handle_tens(digit, amount[digitIdx + 1]));
            break;
          case 5:
            words.push(handle_utlc(digit, nxtDigit, "Lakh"));
            break;
          case 6:
            words.push(handle_tens(digit, amount[digitIdx + 1]));
            break;
          case 7:
            words.push(handle_utlc(digit, nxtDigit, "Crore"));
            break;
          case 8:
            words.push(handle_tens(digit, amount[digitIdx + 1]));
            break;
          case 9:
            words.push(
              0 != digit
                ? " " +
                    sglDigit[digit] +
                    " Hundred" +
                    (0 != amount[digitIdx + 1] || 0 != amount[digitIdx + 2]
                      ? " And"
                      : " Crore")
                : ""
            );
        }
      str = words.reverse().join("");
    } else str = "";
    return str;
  }
  return (
    <div className="invoice-details">
      <InvoiceDetails detailsArr={[details, setDetails]} />
      <DateInvoiceGST
        today={today}
        invoiceDetailsArr={[invoiceDetails, setInvoiceDetails]}
      />
      <ItemTable
        items={items}
        setItems={setItems}
        amountInWords={amountInWords}
        setAmountInWords={setAmountInWords}
        amountToWords={amountToWords}
        totalAmount={totalAmount}
        totalGst={totalGst}
      />
      <TotalAmount totalAmount={totalAmount} totalGst={totalGst} />
      <BankDetails bankDetailsArr={[bankDetails, setBankDetails]} />
      <SaveInvoice
        invoicesArr={[invoices, setInvoices]}
        setInfo={[setItems, setDetails]}
        info={[items, details, invoiceDetails, bankDetails]}
        totalAmount={totalAmount}
        totalGst={totalGst}
      />
      <PreviewHeading />
      <DocumentPreview
        items={items}
        details={details}
        invoiceDetails={invoiceDetails}
        totalAmount={totalAmount}
        totalGst={totalGst}
        amountInWords={amountInWords}
        totalCgst={totalCgst}
        totalUtgst={totalUtgst}
        totalIgst={totalIgst}
        bankDetailsArr={[bankDetails, setBankDetails]}
      />
    </div>
  );
}
