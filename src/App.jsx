import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AddNote from "./components/Notes";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const [contentIdeas, setContentIdeas] = useState(() => {
    const savedNotes = localStorage.getItem("contentIdeas");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("contentIdeas", JSON.stringify(contentIdeas));
  }, [contentIdeas]);

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
