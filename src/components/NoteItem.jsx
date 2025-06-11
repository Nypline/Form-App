export default function NoteItem({
  idea,
  img,
  colorClass,
  onDelete,
  handleToggleArchive,
  showFormationDate,
}) {
  return (
    <div>
      <div
        key={idea.id}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow w-[270px] h-[140px] border border-[#E5E7EB]"
      >
        <div className={`h-5 w-full rounded-t-lg ${colorClass}`}></div>
        <div className="p-4 flex flex-row justify-between w-full">
          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[12px] font-medium">{idea.title}</h1>
              <div className="flex flex-row gap-2">
                <img
                  src={img}
                  alt="archive"
                  className="hover:cursor-pointer hover:scale-110 transition-transform duration-200"
                  onClick={() => handleToggleArchive(idea.id)}
                />
                <img
                  src="/Trash.svg"
                  alt="delete"
                  className="hover:cursor-pointer hover:scale-110 transition-transform duration-200"
                  onClick={() => onDelete(idea.id)}
                />
              </div>
            </div>
            <p className="text-[6px] text-gray-500 pt-0.5">
              {showFormationDate(idea.date)}
            </p>
            <h3 className="text-[10px] font-light text-gray-900 pt-1">
              {idea.tips}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
