import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Note } from "./models/note.model"
import Header from "./Components/Header"

function App() {
  const [note, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meeting",
      text: "schedule meeting",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ])

  const changeName = () => {
    // setName("ramzi")
  }

  return (
    <>
      <Header></Header>
    </>
  )
}

export default App
