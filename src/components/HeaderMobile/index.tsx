import imgHeader from '../../../src/assets/iconMobile.png'
import { ButtonHeader, ContainerButton, ContainerContent, ContainerHeaderMobile, Content } from './styles'
import { X } from "@phosphor-icons/react";

export function HeaderMobile() {
  return (

    <div>
      <ContainerHeaderMobile>
        <ButtonHeader>
          <img src={imgHeader} alt="" />
        </ButtonHeader>


      </ContainerHeaderMobile>

      <ContainerContent>
        <Content>
          <ContainerButton>
            <button><X size={13} color='#0094FF' /></button>
          </ContainerButton>
        </Content>
      </ContainerContent>


    </div>
  )
}