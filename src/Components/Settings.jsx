import React from 'react'
import {useTheme} from '../Contexts/ThemeContext'

export default function Settings() {
    const {isDark, handleTheme} = useTheme();
  return (
    <div>
        <button onClick={handleTheme}>{isDark ? "Light" : "Dark"} Mode</button>
    </div>
  )
}
