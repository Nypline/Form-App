export default function Navbar() {
  return (
    <div className="py-5 flex flex-row justify-around items-center border-b border-[#E5E7EB]">
      <div className="flex flex-row">
        <img src="/KodeinNote.png" alt="logo" className="w-full h-7" />
      </div>
      <div>
        <input
          type="text"
          placeholder="🔍Search..."
          className="border border-[#E5E7EB] py-3 px-10 bg-[#F9FAFB] w-full rounded-lg"
        />
      </div>
    </div>
  );
}
