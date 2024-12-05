
export default function PreviewHeader({cName, cAddress, cPhone, cEmail, gst}) {
  return (
    <div className="header">
          <h2>{cName}</h2>
          <p>
            <b>{cAddress}</b>
          </p>
          <p>
            <b>Phone No. : {cPhone}</b>
          </p>
          <p>
            <b>Email : {cEmail}</b>
          </p>
          <p>
            <b>GSTIN : {gst}</b>
          </p>
        </div>
  )
}
