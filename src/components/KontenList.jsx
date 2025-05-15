import NoteItem from "./NoteItem";

const KontenList = ({ notes, onDelete }) => {
  console.log(JSON.stringify(notes));
  return (
    <div className="w-[80%] mx-auto p-6 bg-pink-50 ">
      <div className="flex flex-row items-center gap-5 mb-6">
        <img src="/Active.svg" alt="" className="w-6" />

        <h1 className="text-3xl font-bold text-gray-800">Active</h1>
      </div>
      {notes.map((note, index) => (
        <>
          {note.isArchived === false ? (
            <>
              <NoteItem
                idea={note}
                img="/Save.svg"
                colorClass="bg-[#0F7ECD]"
                onDelete={onDelete}
              />
            </>
          ) : (
            <NoteItem
              idea={note}
              img="/Save.svg"
              colorClass="bg-[#0F7ECD]"
              onDelete={onDelete}
            />
          )}
        </>
      ))}

      {/* <div className="flex flex-row items-center gap-5 mb-6">
        <img src="/Active.svg" alt="" className="w-6" />
        <h1 className="text-3xl font-bold text-gray-800">Active</h1>
      </div>

      <div className=" flex flex-row justify-start gap-5">
        {contentIdeas.map((idea) => (
          <NoteItem
            idea={idea}
            img="/Save.svg"
            colorClass="bg-[#0F7ECD]"
            onDelete={onDelete}
          />
        ))}
      </div>
      <div className="flex flex-row items-center gap-5 mb-6 mt-10">
        <img src="/Archive.svg" alt="" className="w-6" />
        <h1 className="text-3xl font-bold text-gray-800">Archive</h1>
      </div>

      <div className=" flex flex-row justify-start gap-5">
        {contentSave.map((idea) => (
          <NoteItem
            idea={idea}
            img={"/MoveBack.svg"}
            colorClass="bg-[#D9D9D9]"
          />
        ))}
      </div> */}
    </div>
  );
};

export default KontenList;
