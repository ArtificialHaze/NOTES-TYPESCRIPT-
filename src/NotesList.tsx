import { Note } from "./App";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList = ({ notes, setNotes }: INotesListProps) => {
  const renderNotes = () => {
    const handleRemoveNote = (id: string) => {
      setNotes(notes.filter((note) => note.id !== id));
    };

    return notes.map((note) => {
      return (
        <Notes handleRemoveNote={handleRemoveNote} note={note} key={note.id} />
      );
    });
  };

  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
