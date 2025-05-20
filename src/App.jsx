import Navbar from "./components/Navbar";
import AddNote from "./components/Notes";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
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
      title: "World",
      date: "~Selasa, 13 Mei 2025",
      tips: "false",
      isArchived: true,
    },
    {
      id: "03cxa",
      title: "React Note",
      date: "~Selasa, 13 Mei 2025",
      tips: "false",
      isArchived: true,
    },
  ]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const filteredIdeas = contentIdeas.filter((idea) =>
    idea.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <Navbar handleChange={handleChange} searchInput={searchInput} />
      <AddNote contentIdeas={filteredIdeas} setContentIdeas={setContentIdeas} />
    </>
  );
}

export default App;
