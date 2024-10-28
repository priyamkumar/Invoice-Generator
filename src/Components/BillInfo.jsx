import React, { useState } from "react";
import InvoiceDetails from "./InvoiceDetails";
import DateInvoiceGST from "./DateInvoiceGST";
import ItemTable from "./ItemTable";
import TotalAmount from "./TotalAmount";
import PreviewHeading from "./PreviewHeading";
import DocumentPreview from "./DocumentPreview";
import BankDetails from "./BankDetails";

export default function BillInfo() {
  const [items, setItems] = useState([
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
  ]);

  const [details, setDetails] = useState({
    cName: "",
    cAddress: "",
    cPhone: "",
    cEmail: "",
    clientName: "",
    clientAddress: "",
    clientPhone: "",
    clientEmail: "",
  });

  const [amountInWords, setAmountInWords] = useState("");

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

  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [invoiceDate, setInvoiceDate] = useState("2024-01-01");
  const [gstNum, setGstNum] = useState();

  const [bankName, setBankName] = useState([]);
  const [bankAccountNumber, setBankAccountNumber] = useState([]);
  const [bankBranchIfsc, setBankBranchIfsc] = useState([]);

  const [invoices, setInvoices] = useState([]);


  // Main function to get the amount in words
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
      <InvoiceDetails details={details} setDetails={setDetails} />
      <DateInvoiceGST
        date={[invoiceDate, setInvoiceDate]}
        invoice={[invoiceNumber, setInvoiceNumber]}
        gst={[gstNum, setGstNum]}
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
      <BankDetails bname={[bankName, setBankName]} number={[bankAccountNumber, setBankAccountNumber]} ifsc={[bankBranchIfsc, setBankBranchIfsc]}/>
      <PreviewHeading />
      <DocumentPreview
        items={items}
        details={details}
        date={invoiceDate}
        invoice={invoiceNumber}
        gst={gstNum}
        totalAmount={totalAmount}
        totalGst={totalGst}
        amountInWords={amountInWords}
        totalCgst={totalCgst}
        totalUtgst={totalUtgst}
        totalIgst={totalIgst}
        bankName={bankName}
        bankAccountNumber={bankAccountNumber}
        bankBranchIfsc={bankBranchIfsc}
      />
    </div>
  );
}
