import AddNote from "./AddNote";
import KontenList from "./KontenList";
import { useState } from "react";

export default function Notes() {
  const [contentIdeas, setContentIdeas] = useState([
    {
      id: "01",
      title: "Hello",
      date: "~Selasa, 13 Mei 2025",
      tips: "false",
      isArchived: false,
    },
    {
      id: "02",
      title: "Hello",
      date: "~Selasa, 13 Mei 2025",
      tips: "false",
      isArchived: true,
    },
    {
      id: "03cxa",
      title: "Hello",
      date: "~Selasa, 13 Mei 2025",
      tips: "false",
      isArchived: true,
    },
  ]);

  const onAdd = (title, content) => {
    const newIdea = {
      id: contentIdeas.length + 1,
      title: title,
      date: "~Selasa, 13 Mei 2025",
      tips: content,
      isArchived: false,
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

  const handleToggleArchive = (id) => {
    const updatedIdeas = contentIdeas.map((idea) => {
      if (idea.id === id) {
        return { ...idea, isArchived: !idea.isArchived };
      }
      return idea;
    });
    setContentIdeas(updatedIdeas);
  };

  return (
    <div className="flex flex-col gap-10">
      <AddNote onAdd={onAdd}></AddNote>
      <KontenList
        contentIdeas={contentIdeas}
        onDelete={handleDeleteNote}
        handleToggleArchive={handleToggleArchive}
      ></KontenList>
    </div>
  );
}
