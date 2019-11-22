import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [deck, setDeck] = useState("hello")
  const [deckState, setDeckState] = useState({ index: 0, length: 1 })

  function handleEvent(e) {
    console.log(e.detail) // outputs: {foo: 'bar'}
    setDeckState(e.detail)
  }

  useEffect(() => {
    window.document.addEventListener("myEvent", handleEvent, false)
    return () =>
      window.document.removeEventListener("myEvent", handleEvent, false)
  }, [])

  console.log("SDGHSDFGSDFG", deckState)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>learn to code</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button onClick={() => setDeck("hello")}>deck 1</button>
          <button onClick={() => setDeck("hi")}>deck 2</button>
          <button onClick={() => setDeck("html")}>deck 3</button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1 1 100px",
            margin: "0 20px",
          }}
        >
          <div
            style={{
              border: "2px solid rebeccapurple",
              borderRadius: "4px",
              width: "100%",
              paddingTop: "56.25%",
              height: 0,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <iframe
              title={deck}
              src={`/decks/${deck}`}
              frameborder="0"
              scrolling="no"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div>
            slide: {deckState.index + 1} / {deckState.length}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
