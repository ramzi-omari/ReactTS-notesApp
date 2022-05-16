import React from "react"
import { Note } from "../models/note.model"
import Notes from "./Notes"

type Props = {
  notes: Note[]
}

const NotesList = ({ notes }: Props) => {
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note}></Notes>
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
