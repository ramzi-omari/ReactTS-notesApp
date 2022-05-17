import React, { useRef, useState } from "react"
import { Alert, Button, Form } from "react-bootstrap"
import { Note } from "../models/note.model"

type Props = {
  notes: Note[]
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes = ({ notes, setNotes }: Props) => {
  const [error, setError] = useState<string>("")
  const titleRef = useRef<HTMLInputElement | null>(null)
  const textRef = useRef<HTMLTextAreaElement | null>(null)
  const colorRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All fields are mandatory")
    }

    setError("")
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ])
    ;(titleRef.current as HTMLInputElement).value = ""
    ;(textRef.current as HTMLTextAreaElement).value = ""
  }

  return (
    <>
      <h2>Create Notes</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title for the Note"
            ref={titleRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Text</Form.Label>
          <Form.Control
            placeholder="Enter your Notes"
            as="textarea"
            rows={3}
            ref={textRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Choose your color"
            ref={colorRef}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CreateNotes
