// import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { IMAGES_1, IMAGES_2, IMAGES_3, IMAGES_4, IMAGES_5, IMAGES_6,IMAGES_7 } from "../../../constants/images";
import Card from "./Card";
import Carousel from "./Carousel";
import Styles from "./Portfolio.module.scss"

function Portfolio() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card 
        imagen={IMAGES_1} 
        title={"LINO"} 
        descrip={"Lino es una app que conecta medicos con pacientes con el fin de concretar una cita ya sea de manera virtual, a travez de un chat, o presencial acordando una cita previa, utilizando la API de maps de google"}
        link1="https://lino-app.vercel.app/home"
        link2="https://github.com/Sagalo04/lino-app"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
        imagen={IMAGES_2} 
        title={"K-BOOM DOCENTES"} 
        descrip={"Es una plataforma de docentes para revisar el progreso de los estudiantes en el videojuego K=Boom, utiliza un inicio de sesión con Google para acceder a esta plataforma"}
        link1="https://kboom-teachers.vercel.app/signin"
        link2="https://github.com/Sagalo04/kboom-teachers"/>
      )
    },

    {
      key: uuidv4(),
      content: (
        <Card 
        imagen={IMAGES_3} 
        title={"RICK AND MORTY"} 
        descrip={"React-App para consultar los personajes de la serie Rick y Morty, tanto los capitulos en los que sales como sus respectiva información"}        
        link1="https://rick-and-morty-react-app.web.app"
        link2="https://github.com/Sagalo04/rick_and_morty_reactapp"/>
      )
    },

    {
      key: uuidv4(),
      content: (
        <Card imagen={IMAGES_4} 
        title={"Dashboard SCSS"} 
        descrip={"Este Dashboard fue creado para imitar por medio de React y SCSS a través de componentes una página, a partir de un diseño inicial copiado al mas mínimo detalle."}
        link1="https://trabajo-scss.vercel.app"
        link2="https://github.com/Sagalo04/TrabajoSCSS"/>
      )
    },

    {
      key: uuidv4(),
      content: (
        <Card 
        imagen={IMAGES_5} 
        title={"K=BOOM"} 
        descrip={"Plataforma web para el videojuego educativo K=Boom donde se visualizan los datos recolectados por el estudiante"}
        link1="https://kboomfront-omega.vercel.app/santiago.garcna@uao.edu.co"
        link2="https://github.com/tinanano19/kboomfront"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
        imagen={IMAGES_6} 
        title={"INKED TATTOO SHOP"} 
        descrip={"Página Comercial en Wordpress, para la empresa Inked Tattoo, donde se pueden ver los servicios que ofrecen, así como enviar una cotización de una idea"}
        link1="https://inkedtattooshopcol.com"
        link2="https://inkedtattooshopcol.com"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
        imagen={IMAGES_7} 
        title={"AWESOME HEROES"} 
        descrip={"App para votación de superheroes desarrollada en Angular y con la ayuda de MOCKAPI para la conservación de los votos"}
        link1="https://awesome-heroes.vercel.app"
        link2="https://github.com/Sagalo04/AwesomeHeroes"/>
      )
    },
  ];

  return (
    <div  className={Styles.portfolio}>
      <div className={Styles.sectiontitle}>
        <div className={Styles.title_container}>
          <h1 className={Styles.title}>Portafolio</h1>
        </div>
        <div className={Styles.o_dummy}></div>
      </div>

      <Carousel
        cards={cards}
        height="500px"
        width="50%"
        margin="0 auto"
        marginTop="3rem"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default Portfolio;
