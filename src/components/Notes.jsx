import AddNote from "./AddNote";
import KontenList from "./KontenList";
import { useState } from "react";

export default function Notes() {
  const [contentIdeas, setContentIdeas] = useState([
    {
      id: 1,
      title: "Ide Konten",
      date: "~Selasa, 13 Mei 2025",
      tips: "Tips belajar React untuk pemula.",
      isArchived: false,
    },
    {
      id: 2,
      title: "Ide Konten",
      date: "~Selasa, 13 Mei 2025",
      tips: "Tips belajar React untuk pemula.",
      isArchived: false,
    },
  ]);

  const [contentSave, setContentSave] = useState([
    {
      id: 1,
      title: "Ide Konten",

      date: "~Selasa, 13 Mei 2025",
      tips: "Tips belajar React untuk pemula.",
      isArchived: true,
    },
    {
      id: 2,
      title: "Ide Konten",
      date: "~Selasa, 13 Mei 2025",
      tips: "Tips belajar React untuk pemula.",
      isArchived: true,
    },
  ]);

  const onAdd = (title, content) => {
    const newIdea = {
      id: contentIdeas.length + 1,
      title: title,
      date: "~Selasa, 13 Mei 2025",
      tips: content,
    };
    if (!title || !content) {
      alert("Please fill in all fields");
      return;
    }

    setContentIdeas([...contentIdeas, newIdea]);
  };
  const handleDeleteNote = (id) => {
    const updatedNotes = contentIdeas.filter((note) => note.id !== id);
    setContentIdeas(updatedNotes);
  };

  return (
    <div className="flex flex-col gap-10">
      <AddNote onAdd={onAdd}></AddNote>
      <KontenList
        contentIdeas={contentIdeas}
        contentSave={contentSave}
        onDelete={handleDeleteNote}
      ></KontenList>
    </div>
  );
}
