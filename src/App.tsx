import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Header, NotesList, CreateNotes } from "./components";

export interface Note {
  id: string;
  title: string;
  text: string;
  color: string;
  date: string;
}

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  return (
    <div className="App">
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
