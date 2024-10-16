import React from 'react'

export default function Info() {
  return (
    <form>
        <label for="cName">Company Name </label>
        <input type="text" id="cName" placeholder="Company Name"/>
        <label for="address">Address </label>
        <textarea id="address" rows="3" cols="20"></textarea>
    </form>
  )
}
