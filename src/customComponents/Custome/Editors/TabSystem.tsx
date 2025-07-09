"use client"
import React from "react"
import { Palette, Type, Settings } from "lucide-react"
import "./tab-system.css"

interface TabSystemProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function TabSystem({ activeTab, setActiveTab }: TabSystemProps) {
  return (
    <div className="tabs">
      <button className={`tab ${activeTab === "styles" ? "active" : ""}`} onClick={() => setActiveTab("styles")}>
        <Palette size={18} />
        <span>Styles</span>
      </button>
      <button className={`tab ${activeTab === "content" ? "active" : ""}`} onClick={() => setActiveTab("content")}>
        <Type size={18} />
        <span>Content</span>
      </button>
      <button className={`tab ${activeTab === "settings" ? "active" : ""}`} onClick={() => setActiveTab("settings")}>
        <Settings size={18} />
        <span>Settings</span>
      </button>
    </div>
  )
}

