import React from "react"
import { Container, Navbar } from "react-bootstrap"

type Props = {}

const Header = (props: Props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>React Typescript Bootstrap Notes</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header
