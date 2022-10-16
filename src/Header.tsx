import { Navbar, Container } from "react-bootstrap";

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>TYPESCRIPT NOTES</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
