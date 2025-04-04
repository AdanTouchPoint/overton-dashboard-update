"use client"
import React from "react"
import { HexColorPicker } from "react-colorful"
import "./colorPicker.css"

interface ColorPickerProps {
  color: string
  property: string
  activeColorPicker: string
  setActiveColorPicker: (property: string) => void
  updateStyle: (key: string, value: string) => void
}

export default function ColorPicker({
  color,
  property,
  activeColorPicker,
  setActiveColorPicker,
  updateStyle,
}: ColorPickerProps) {
  return (
    <>
      <button
        className="color-preview"
        style={{ backgroundColor: color }}
        onClick={() => setActiveColorPicker(activeColorPicker === property ? "" : property)}
      ></button>
      {activeColorPicker === property && (
        <div className="color-picker-container">
          <HexColorPicker color={color} onChange={(color) => updateStyle(property, color)} />
        </div>
      )}
    </>
  )
}

