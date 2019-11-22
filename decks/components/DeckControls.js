import React from "react"
import { useDeck } from "mdx-deck"

export default function DeckControls({ children }) {
  try {
    const state = useDeck()
    var event = new CustomEvent("myEvent", { detail: state })
    window.parent.document.dispatchEvent(event)
  } catch (err) {
    console.log("ummm", err)
  }

  return <div>{children}</div>
}
