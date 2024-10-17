import React from "react";

export default function BillInfoForm() {
  return (
    <form>
      <div className="form-elements">
        <div className="companyInfo">
          <label htmlFor="comName">Company Name </label>
          <input type="text" id="comName" placeholder="Company Name" />
          <label htmlFor="comaddress">Address </label>
          <textarea id="comaddress" rows="3" cols="20"></textarea>
          <label htmlFor="phone">Phone </label>
          <input type="phone" id="phone" placeholder="Phone" />
          <label htmlFor="email">Email </label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="clientInfo">
          <label htmlFor="cliName">Client Name </label>
          <input type="text" id="cliName" placeholder="Client Name" />
          <label htmlFor="cliaddress">Address </label>
          <textarea id="cliaddress" rows="3" cols="20"></textarea>
          <label htmlFor="clientphone">Phone </label>
          <input type="clientphone" id="phone" placeholder="Phone" />
          <label htmlFor="clientemail">Email </label>
          <input type="email" id="clientemail" placeholder="Email" />
        </div>
      </div>
    </form>
  );
}
