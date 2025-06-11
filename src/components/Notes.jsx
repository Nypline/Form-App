import AddNote from "./AddNote";
import KontenList from "./KontenList";

export default function Notes({ contentIdeas, setContentIdeas }) {
  const onAdd = (title, content) => {
    const newIdea = {
      id: Date.now().toString(),
      title: title,
      date: new Date().toISOString(),
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

  const showFormationDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      weekday: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="flex flex-col gap-10">
      <AddNote onAdd={onAdd} />
      <KontenList
        contentIdeas={contentIdeas}
        onDelete={handleDeleteNote}
        handleToggleArchive={handleToggleArchive}
        showFormationDate={showFormationDate}
      />
    </div>
  );
}
