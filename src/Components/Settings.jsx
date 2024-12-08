import React from 'react'
import {useTheme} from '../Contexts/ThemeContext'

export default function Settings() {
    const {isDark, handleTheme} = useTheme();
  return (
    <div className={`settings ${isDark ? "dark" : ""}`}>
        <button onClick={handleTheme}>{isDark ? "Light" : "Dark"} Mode</button>
    </div>
  )
}
