export default function PreviewSignature({cName}) {
  return (
    <div className="signatures">
            <p>
              Certified that the particulars given above are true and correct.
            </p>
            <p className="text-center">
              <b>For {cName}</b>
            </p>
            <p className="authorized">
              <b>Authorised Signatory</b>
            </p>
          </div>
  )
}
