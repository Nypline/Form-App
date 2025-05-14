import AddNote from "./AddNote";
import KontenList from "./KontenList";

export default function Notes() {
  return (
    <div className="flex flex-col gap-10">
      <AddNote></AddNote>
      <KontenList></KontenList>
    </div>
  );
}
