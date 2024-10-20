import React from "react";
import DocumentPreview from "./DocumentPreview.jsx"
import { Link } from "react-router-dom"

export default function PreviewPdfButton() {
  return (
  <div className="preview-pdf-buttons">
    <Link to='/preview'><button>Preview</button></Link>
    <button>Download PDF</button>
  </div>
)
}
