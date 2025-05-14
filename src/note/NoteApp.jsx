import { useImmer, useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";

let id = 0;
const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: true },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn ReactJS", done: false },
];

function notesReducer(notes, action) {
  if (action.type === "ADD") {
    notes.push({
      id: id++,
      text: action.text,
      done: false,
    })
  } else if (action.type === "EDIT") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes[index].text = action.text
    notes[index].done = action.done
  } else if (action.type === "DELETE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes.splice(index, 1)
  }
  const index = notes.findIndex((note) => note.id === action.id);
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  function handleAddNote(text) {
    dispatch({
      type: "ADD",
      text: text,
    });
  }

  function handleChangeNote(note) {
    dispatch({
      ...note,
      type: "EDIT",
    });
  }

  function handleDeleteNote(note) {
    dispatch({
      type: "DELETE",
      id: note.id,
    });
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}
