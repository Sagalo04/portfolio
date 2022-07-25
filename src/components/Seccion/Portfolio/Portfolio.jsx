// import "./App.css";
import { v4 as uuidv4 } from "uuid";
import {
  IMAGES_1,
  IMAGES_2,
  IMAGES_3,
  IMAGES_4,
  IMAGES_5,
  IMAGES_6,
  IMAGES_7,
  IMAGES_8,
  IMAGES_9,
  IMAGES_10,
  IMAGES_11,
  IMAGES_12,
  IMAGES_13,
} from "../../../constants/images";
import prayer from "../../../images/PrayerSlayerInstall.exe";
import Card from "./Card";
import Carousel from "./Carousel";
import Styles from "./Portfolio.module.scss";

function Portfolio() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={IMAGES_1}
          title={"LINO"}
          descrip={
            "Lino es una app que conecta medicos con pacientes con el fin de concretar una cita ya sea de manera virtual, a travez de un chat, o presencial acordando una cita previa, utilizando la API de maps de google"
          }
          link1="https://lino-app.vercel.app/home"
          link2="https://github.com/Sagalo04/lino-app"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={IMAGES_2}
          title={"K-BOOM DOCENTES"}
          descrip={
            "Es una plataforma de docentes para revisar el progreso de los estudiantes en el videojuego K=Boom, utiliza un inicio de sesión con Google para acceder a esta plataforma"
          }
          link1="https://kboom-teachers.vercel.app/signin"
          link2="https://github.com/Sagalo04/kboom-teachers"
        />
      ),
    },

    {
      key: uuidv4(),
      content: (
        <Card
          imagen={IMAGES_3}
          title={"RICK AND MORTY"}
          descrip={
            "React-App para consultar los personajes de la serie Rick y Morty, tanto los capitulos en los que sales como sus respectiva información"
          }
          link1="https://rick-and-morty-react-app.web.app"
          link2="https://github.com/Sagalo04/rick_and_morty_reactapp"
        />
      ),
    },

    {
      key: uuidv4(),
      content: (
        <Card
          imagen={IMAGES_4}
          title={"Dashboard SCSS"}
          descrip={
            "Este Dashboard fue creado para imitar por medio de React y SCSS a través de componentes una página, a partir de un diseño inicial copiado al mas mínimo detalle."
          }
          link1="https://trabajo-scss.vercel.app"
          link2="https://github.com/Sagalo04/TrabajoSCSS"
        />
      ),
    },

    {
      key: uuidv4(),
      content: (
        <Card
          imagen={IMAGES_10}
          title={"K=BOOM"}
          descrip={
            "Plataforma web para el videojuego educativo K=Boom donde se visualizan los datos recolectados por el estudiante"
          }
          link1="https://kboomfront-omega.vercel.app/santiago.garcna@uao.edu.co"
          link2="https://github.com/tinanano19/kboomfront"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={IMAGES_6}
          title={"INKED TATTOO SHOP"}
          descrip={
            "Página Comercial en Wordpress, para la empresa Inked Tattoo, donde se pueden ver los servicios que ofrecen, así como enviar una cotización de una idea"
          }
          link1="https://inkedtattooshopcol.com"
          link2="https://inkedtattooshopcol.com"
          dis2={false}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={IMAGES_7}
          title={"AWESOME HEROES"}
          descrip={
            "App para votación de superheroes desarrollada en Angular y con la ayuda de MOCKAPI para la conservación de los votos"
          }
          link1="https://awesome-heroes.vercel.app"
          link2="https://github.com/Sagalo04/AwesomeHeroes"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={IMAGES_8}
          title={"Bisanti Auto"}
          descrip={
            "Onepage Comercial en Wordpress, para la empresa Bisanti, donde se pueden ver los servicios que ofrecen, así como enviar una ponerse en contacto con la empresa"
          }
          link1="https://bisantiauto.com"
          link2="https://github.com/Sagalo04/AwesomeHeroes"
          dis2={false}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={IMAGES_9}
          title={"Prayer Slayer"}
          descrip={
            "Prototipo de Videojuego en Unity en PixelArt para proyecto de videojuegos"
          }
          link1={prayer}
          link2="https://sites.google.com/uao.edu.co/prayerslayerproject/página-principal"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={IMAGES_5}
          title={"K=Boom Project"}
          descrip={
            "Videojuego educativo para enseñar el tema de Física Trabajo y Energia Maquina de Atwood en universidades, a traves de una historia ficticia (Trabajo de Grado)"
          }
          link1="https://drive.google.com/file/d/1fRkt6cdc0VXGH8QTijsGGbqwOIU9DMnG/view?usp=sharing"
          link2="https://github.com/Sagalo04/K-Boom-project"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={IMAGES_11}
          title={"Portal Galaxias"}
          descrip={
            "Página en Angular, que prueba consumir una API creada en Mongo, a cerca de Astros, con un buscador y filtros."
          }
          link1="https://pruebatecnicanice.vercel.app"
          link2="https://github.com/Sagalo04/pruebatecnicanice"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={IMAGES_12}
          title={"Breaking Bad App"}
          descrip={
            <>
              React app con Redux, para consultar los personajes y frases de la
              serie Breaking Bad, y calificar cada una de sus frases dejando un
              comentario. Creado en colaboración con{" "}
              <a
                href="https://github.com/AngieV1198"
                target="_blank"
                rel="noreferrer"
              >
                Angie Varela
              </a>
            </>
          }
          link1="https://breaking-bad-react-eight.vercel.app"
          link2="https://github.com/Sagalo04/breaking_bad_react"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={IMAGES_13}
          title={"Heroes App"}
          descrip={
            "React App donde podemos ver a todos los superheroes de marvel y calificarlos a cada uno cuantas veces queramos, para así crear  un ranking. Desarrollador con react, redux y laravel"
          }
          link1="https://heroes-isobar-afkbbmbnf-santiago-garcia09-livecom.vercel.app"
          link2="https://github.com/Sagalo04/heroes-isobar"
        />
      ),
    },
  ];

  return (
    <div className={Styles.portfolio}>
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
        showArrows={true}
      />
    </div>
  );
}

export default Portfolio;
