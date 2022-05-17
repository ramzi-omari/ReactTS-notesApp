import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Note } from "./models/note.model"
import Header from "./Components/Header"
import { Col, Container, Row } from "react-bootstrap"
import NotesList from "./Components/NotesList"
import CreateNotes from "./Components/CreateNotes"

function App() {
  const [notes, setNotes] = useState<Note[]>([
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
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}></NotesList>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes}></CreateNotes>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
