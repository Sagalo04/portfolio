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
        descrip={"La mecánica cuántica es la rama de la física que estudia la naturaleza a escalas espaciales pequeñas, los sistemas atómicos y subatómicos y sus interacciones con la radiación electromagnética"}
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
        descrip={"La mecánica cuántica es la rama de la física que estudia la naturaleza a escalas espaciales pequeñas, los sistemas atómicos y subatómicos y sus interacciones con la radiación electromagnética"}
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
        descrip={"La mecánica cuántica es la rama de la física que estudia la naturaleza a escalas espaciales pequeñas, los sistemas atómicos y subatómicos y sus interacciones con la radiación electromagnética"}        
        link1="https://rick-and-morty-react-app.web.app"
        link2="https://github.com/Sagalo04/rick_and_morty_reactapp"/>
      )
    },

    {
      key: uuidv4(),
      content: (
        <Card imagen={IMAGES_4} 
        title={"Dashboard SCSS"} 
        descrip={"La mecánica cuántica es la rama de la física que estudia la naturaleza a escalas espaciales pequeñas, los sistemas atómicos y subatómicos y sus interacciones con la radiación electromagnética"}
        link1="https://trabajo-scss.vercel.app"
        link2="https://github.com/Sagalo04/TrabajoSCSS"/>
      )
    },

    {
      key: uuidv4(),
      content: (
        <Card 
        imagen={IMAGES_5} 
        title={"K-BOOM"} 
        descrip={"La mecánica cuántica es la rama de la física que estudia la naturaleza a escalas espaciales pequeñas, los sistemas atómicos y subatómicos y sus interacciones con la radiación electromagnética"}
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
        descrip={"La mecánica cuántica es la rama de la física que estudia la naturaleza a escalas espaciales pequeñas, los sistemas atómicos y subatómicos y sus interacciones con la radiación electromagnética"}
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
        descrip={"La mecánica cuántica es la rama de la física que estudia la naturaleza a escalas espaciales pequeñas, los sistemas atómicos y subatómicos y sus interacciones con la radiación electromagnética"}
        link1="https://awesome-heroes.vercel.app"
        link2="https://github.com/Sagalo04/AwesomeHeroes"/>
      )
    },
  ];

  return (
    <div style={{ width: "100%" }} className={Styles.portfolio}>
      <div className={Styles.sectiontitle}>
        <div className={Styles.title_container}>
          <h1 className={Styles.title}>Portfolio</h1>
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
