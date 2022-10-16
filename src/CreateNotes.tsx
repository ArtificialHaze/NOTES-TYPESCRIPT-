import { useEffect, useRef, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { Note } from "./App";

interface ICreatesNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes = ({ notes, setNotes }: ICreatesNotesProps) => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);
  const [err, setErr] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setErr("You must fill all fields.");
    }
    setErr("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toUTCString(),
      },
    ]);
    (textRef.current as HTMLTextAreaElement).value = "";
    (titleRef.current as HTMLInputElement).value = "";
  };

  useEffect(() => {
    const errorTime = setTimeout(() => {
      setErr("");
    }, 2500);
    return () => {
      clearTimeout(errorTime);
    };
  }, [err]);

  return (
    <>
      <h2>Create Notes</h2>
      {err && <Alert variant="danger">{err}</Alert>}
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            ref={titleRef}
            type="text"
            placeholder="Enter here.."
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Text:</Form.Label>
          <Form.Control
            ref={textRef}
            as={"textarea"}
            placeholder="Enter notes.."
            rows={3}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Color:</Form.Label>
          <Form.Control
            ref={colorRef}
            id="colorInput"
            type="color"
            defaultValue="#f3f3f3"
            title="Choose your color"
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
