"use client"
import React from "react"
import { useState, useEffect } from "react"
import ColorPicker from "./ColorPicker"
import "./style-editor.css"

interface StylesTabProps {
  styles: any
  updateStyle: (key: string, value: string | number) => void
}

export default function StylesTab({ styles, updateStyle }: StylesTabProps) {
  const [activeColorPicker, setActiveColorPicker] = useState("")

  // Close color picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeColorPicker && !(event.target as Element).closest(".color-picker-container")) {
        setActiveColorPicker("")
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeColorPicker])

  return (
    <div className="styles-panel">
      <h2>Colors</h2>

      <div className="form-group">
        <label htmlFor="backgroundColor">Background Color:</label>
        <div className="color-input-group">
          <input
            type="text"
            id="backgroundColor"
            value={styles.backgroundColor}
            onChange={(e) => updateStyle("backgroundColor", e.target.value)}
          />
          <ColorPicker
            color={styles.backgroundColor}
            property="backgroundColor"
            activeColorPicker={activeColorPicker}
            setActiveColorPicker={setActiveColorPicker}
            updateStyle={updateStyle}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="textColor">Text Color:</label>
        <div className="color-input-group">
          <input
            type="text"
            id="textColor"
            value={styles.textColor}
            onChange={(e) => updateStyle("textColor", e.target.value)}
          />
          <ColorPicker
            color={styles.textColor}
            property="textColor"
            activeColorPicker={activeColorPicker}
            setActiveColorPicker={setActiveColorPicker}
            updateStyle={updateStyle}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="labelColor">Label Color:</label>
        <div className="color-input-group">
          <input
            type="text"
            id="labelColor"
            value={styles.labelColor}
            onChange={(e) => updateStyle("labelColor", e.target.value)}
          />
          <ColorPicker
            color={styles.labelColor}
            property="labelColor"
            activeColorPicker={activeColorPicker}
            setActiveColorPicker={setActiveColorPicker}
            updateStyle={updateStyle}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="inputBackground">Input Background:</label>
        <div className="color-input-group">
          <input
            type="text"
            id="inputBackground"
            value={styles.inputBackground}
            onChange={(e) => updateStyle("inputBackground", e.target.value)}
          />
          <ColorPicker
            color={styles.inputBackground}
            property="inputBackground"
            activeColorPicker={activeColorPicker}
            setActiveColorPicker={setActiveColorPicker}
            updateStyle={updateStyle}
          />
        </div>
      </div>

      <h2>Botones</h2>

      <div className="form-group">
        <label htmlFor="buttonColor">Button Color:</label>
        <div className="color-input-group">
          <input
            type="text"
            id="buttonColor"
            value={styles.buttonColor}
            onChange={(e) => updateStyle("buttonColor", e.target.value)}
          />
          <ColorPicker
            color={styles.buttonColor}
            property="buttonColor"
            activeColorPicker={activeColorPicker}
            setActiveColorPicker={setActiveColorPicker}
            updateStyle={updateStyle}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="buttonTextColor">Button Text Color:</label>
        <div className="color-input-group">
          <input
            type="text"
            id="buttonTextColor"
            value={styles.buttonTextColor}
            onChange={(e) => updateStyle("buttonTextColor", e.target.value)}
          />
          <ColorPicker
            color={styles.buttonTextColor}
            property="buttonTextColor"
            activeColorPicker={activeColorPicker}
            setActiveColorPicker={setActiveColorPicker}
            updateStyle={updateStyle}
          />
        </div>
      </div>
    </div>
  )
}

