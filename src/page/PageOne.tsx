
import { useEffect, useState } from "react";
import { HeaderComputer } from "../components/HeaderComputer";
import { HeaderMobile } from "../components/HeaderMobile";
import { ContainerTitle, } from "./styles";




export function PageOne() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);




  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };


    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (

    <>

      {isMobile ? <HeaderMobile /> : <HeaderComputer />}


      <ContainerTitle>

        <div>
          <p>Olá, eu sou o</p>
          <p>Leonardo</p>
          <p>desenvolvedor Full-Stack</p>
        </div>


        <div>
          <img src="" alt="" />
        </div>

      </ContainerTitle>

    </>


  )
}