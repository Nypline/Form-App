import AddNote from "./AddNote";
import KontenList from "./KontenList";
import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  const onAdd = (title, content) => {
    const newIdea = {
      id: notes.length + 1,
      title: title,
      date: "~Selasa, 13 Mei 2025",
      tips: content,
      isArchived: false,
    };
    if (!title || !content) {
      alert("Please fill in all fields");
      return;
    }

    setNotes([...notes, newIdea]);
  };
  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="flex flex-col gap-10">
      <AddNote onAdd={onAdd} />
      <KontenList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
}
