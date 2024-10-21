import React from "react";
import DocumentPreview from "./DocumentPreview.jsx"
import { Link } from "react-router-dom"

export default function PreviewPdfButton() {
  return (
  <div className="preview-pdf-buttons">
    <div>
    <button>Download PDF</button>
    {/* <Link to='/preview'><button>Preview</button></Link> */}
  </div>
    <h2>Preview</h2>
    </div>
)
}
