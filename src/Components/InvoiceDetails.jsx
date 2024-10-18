import React from 'react'

export default function InvoiceDetails() {
  return (
    <div className="container">
          <div className="card">
            <label htmlFor="com-Name">Company Name </label>
            <input type="text" id="com-Name" placeholder="Company Name" />
            <label htmlFor="com-address">Address </label>
            <textarea
              id="com-address"
              placeholder="Company Address"
              rows="3"
              cols="20"
            ></textarea>
            <label htmlFor="phone">Phone </label>
            <input type="phone" id="phone" placeholder="Phone" />
            <label htmlFor="email">Email </label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="card">
            <label htmlFor="cli-Name">Client Name </label>
            <input type="text" id="cli-Name" placeholder="Client Name" />
            <label htmlFor="cli-address">Address </label>
            <textarea
              id="cli-address"
              placeholder="Client Address"
              rows="3"
              cols="20"
            ></textarea>
            <label htmlFor="client-phone">Phone </label>
            <input type="phone" id="client-phone" placeholder="Phone" />
            <label htmlFor="client-email">Email </label>
            <input type="email" id="client-email" placeholder="Email" />
          </div>
        </div>
  )
}
