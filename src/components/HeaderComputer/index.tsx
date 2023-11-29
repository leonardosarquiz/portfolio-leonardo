
import { ButtonHeader } from "../ButtonHeader";
import { Header, Nav } from "./styles";




export function HeaderComputer() {
  return (
    <Header>
      <Nav>
        <div>
          <ButtonHeader title="home" />
          <span></span>
          <ButtonHeader title="sobre" />
          <span></span>
          <ButtonHeader title="projetos" />
          <span></span>
          <ButtonHeader title="skills" />
          <span></span>
          <ButtonHeader title="contato" />


        </div>
      </Nav>
    </Header>
  )
}