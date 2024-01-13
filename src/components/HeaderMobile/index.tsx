import imgHeader from '../../../src/assets/menumobile.png'
import './style.css'
// import { ButtonHeader, ContainerButton, ContainerContent, ContainerHeaderMobile, Content } from './styles'
import { X, Envelope, LinkedinLogo, WhatsappLogo, GithubLogo } from "@phosphor-icons/react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function HeaderMobile() {
  return (

    <div className='container-menu-mobile'>

      <div className='menu-mobile'>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger >
            <img src={imgHeader} alt="" />
          </DropdownMenu.Trigger>

          <DropdownMenu.Content>
            <div className='container-content-menu-mobile'>
              <DropdownMenu.Item className='container-button-x'>
                <X size={17} className='x-button' />
              </DropdownMenu.Item>

              <div className='container-nav-header'>
                <ul>
                  <DropdownMenu.Item>  <li><button className='btn-nav-header' >HOME</button></li></DropdownMenu.Item>
                  <DropdownMenu.Item>  <li><button className='btn-nav-header'>SOBRE</button></li></DropdownMenu.Item>
                  <DropdownMenu.Item> <li><button className='btn-nav-header' >PROJETOS</button></li></DropdownMenu.Item>
                  <DropdownMenu.Item>  <li><button className='btn-nav-header' >SKILLS</button></li></DropdownMenu.Item>
                  <DropdownMenu.Item> <li><button className='btn-nav-header' >CONTATO</button></li></DropdownMenu.Item>

                </ul>

              </div>

              <div className='midia-social'>
                <DropdownMenu.Item><a href=''><Envelope className='icons-header' size={16} weight="fill" /></a></DropdownMenu.Item>
                <DropdownMenu.Item><a href=''><LinkedinLogo className='icons-header' size={16} weight="fill" /></a></DropdownMenu.Item>
                <DropdownMenu.Item><a href=''><WhatsappLogo className='icons-header' size={16} weight="fill" /></a></DropdownMenu.Item>
                <DropdownMenu.Item><a href=''><GithubLogo className='icons-header' size={16} weight="fill" /></a></DropdownMenu.Item>
              </div>


            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

      </div>



    </div>
  )
}