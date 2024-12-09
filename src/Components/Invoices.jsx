import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'

export default function Invoices() {
    const {isDark} = useTheme();
  return (
    <div className={`all-invoices ${isDark ? "dark" : ""}`}>Invoices</div>
  )
}
