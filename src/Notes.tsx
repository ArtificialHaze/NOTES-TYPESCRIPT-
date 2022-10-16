import { Note } from "./App";
import { Card, Button } from "react-bootstrap";

interface INotesProps {
  note: Note;
  handleRemoveNote: (id: string) => void;
}

const Notes = ({ note, handleRemoveNote }: INotesProps) => {
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
          <Button
            onClick={() => handleRemoveNote(note.id)}
            variant="danger"
            className="mt-3"
          >
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
