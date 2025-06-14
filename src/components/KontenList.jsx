import NoteItem from "./NoteItem";

const KontenList = ({
  contentIdeas,
  onDelete,
  handleToggleArchive,
  showFormationDate,
}) => {
  const activeIdeas = contentIdeas.filter((idea) => !idea.isArchived);
  const archivedIdeas = contentIdeas.filter((idea) => idea.isArchived);

  return (
    <div className="w-[80%] mx-auto p-6">
      <div className="flex flex-row items-center gap-5 mb-6">
        <img src="/Active.svg" alt="" className="w-6" />
        <h1 className="text-3xl font-bold text-gray-800">Active</h1>
      </div>

      {activeIdeas.length > 0 ? (
        <div className="flex flex-row justify-start gap-5 flex-wrap">
          {activeIdeas.map((idea) => (
            <NoteItem
              key={idea.id}
              idea={idea}
              img="/Save.svg"
              colorClass="bg-[#0F7ECD]"
              onDelete={onDelete}
              handleToggleArchive={handleToggleArchive}
              showFormationDate={showFormationDate}
            />
          ))}
        </div>
      ) : (
        <h1>Empty Data</h1>
      )}

      <div className="flex flex-row items-center gap-5 mb-6 mt-10">
        <img src="/Archive.svg" alt="" className="w-6" />
        <h1 className="text-3xl font-bold text-gray-800">Archive</h1>
      </div>

      {archivedIdeas.length > 0 ? (
        <div className="flex flex-row justify-start gap-5 flex-wrap">
          {archivedIdeas.map((idea) => (
            <NoteItem
              key={idea.id}
              idea={idea}
              img="/MoveBack.svg"
              colorClass="bg-[#D9D9D9]"
              onDelete={onDelete}
              handleToggleArchive={handleToggleArchive}
              showFormationDate={showFormationDate}
            />
          ))}
        </div>
      ) : (
        <h1>Empty Data</h1>
      )}
    </div>
  );
};

export default KontenList;
