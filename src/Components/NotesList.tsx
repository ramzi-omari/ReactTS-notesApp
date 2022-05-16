import React from "react"
import { Note } from "../models/note.model"
import Notes from "./Notes"

type Props = {
  notes: Note[]
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList = ({ notes, setNotes }: Props) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id != id))
  }

  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return (
        <Notes key={note.id} note={note} handleDelete={handleDelete}></Notes>
      )
    })
  }

  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  )
}

export default NotesList
