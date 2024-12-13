export default function BankDetails({ bankDetailsArr }) {
  const [bankDetails, setBankDetails] = bankDetailsArr;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newBankDetails = {...bankDetails, [name]: value}
    setBankDetails(newBankDetails);
    localStorage.setItem("bankDetails", JSON.stringify(newBankDetails));

  };
  return (
    <div className="bank-input-details">
      <div className="bank-name">
        <label htmlFor="bank-name">Bank Name </label>
        <input
          type="text"
          id="bank-name"
          placeholder="Bank Name"
          name="bankName"
          value={bankDetails.bankName}
          onChange={handleChange}
        />
      </div>
      <div className="bank-number">
        <label htmlFor="bank-account-number">Bank Account Number </label>
        <input
          type="number"
          id="bank-account-number"
          name="bankAccountNumber"
          placeholder="Bank Account Number"
          value={bankDetails.bankAccountNumber}
          onChange={handleChange}
        />
      </div>
      <div className="bank-branch-ifsc">
        <label htmlFor="bank-branch-ifsc">Bank Branch IFSC </label>
        <input
          type="text"
          id="bank-branch-ifsc"
          name="bankBranchIfsc"
          placeholder="Bank Branch IFSC"
          value={bankDetails.bankBranchIfsc}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
