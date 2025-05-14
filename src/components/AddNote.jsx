import { useState } from "react";

function AddNote({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(title, content);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[486px] mx-auto p-4 bg-white rounded shadow space-y-4 mt-10"
    >
      <div>
        <label className="block font-medium mb-1">Title</label>
        <input
          type="text"
          placeholder="Type here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Content</label>
        <textarea
          placeholder="Type here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded cursor-pointer transition duration-200 hover:scale-102 "
      >
        Add Note
      </button>
    </form>
  );
}

export default AddNote;
