export default function BankDetails({ bankDetailsArr }) {
  const [bankDetails, setBankDetails] = bankDetailsArr;

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "bank-name":
        setBankDetails((prev) => ({
          ...prev, bankName: value
        }));
        break;
      case "bank-account-number":
        setBankDetails((prev) => ({
          ...prev, bankAccountNumber: value
        }));
        break;
      case "bank-branch-ifsc":
        setBankDetails((prev) => ({
          ...prev, bankBranchIfsc: value
        }));
        break;
      default:
        break;
    }
  };
  return (
    <div className="bank-input-details">
      <div className="bank-name">
        <label htmlFor="bank-name">Bank Name </label>
        <input
          type="text"
          id="bank-name"
          placeholder="Bank Name"
          name="bank-name"
          onChange={handleChange}
        />
      </div>
      <div className="bank-number">
        <label htmlFor="bank-account-number">Bank Account Number </label>
        <input
          type="number"
          id="bank-account-number"
          name="bank-account-number"
          placeholder="Bank Account Number"
          onChange={handleChange}
        />
      </div>
      <div className="bank-branch-ifsc">
        <label htmlFor="bank-branch-ifsc">Bank Branch IFSC </label>
        <input
          type="text"
          id="bank-branch-ifsc"
          name="bank-branch-ifsc"
          placeholder="Bank Branch IFSC"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
