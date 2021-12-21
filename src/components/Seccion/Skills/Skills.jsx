import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useMeasure, usePrevious } from "./helpers.jsx";
import { Frame, Content, toggle, ico } from "./styles";
import { Icon } from "@iconify/react";
import { SANTIIMAGE2 } from "../../../constants/images";
import {ConsoleIcon,BracketsIcon,FrameworkIcon,GameIcon,DatabaseIcon,DesignIcon} from "../../../constants/icons"
import * as Icons from "./icons";
import Styles from "./Skills.module.scss";

function Skills(props) {
  function Tree({ children, name, style, open = false, iconi }) {
    const [isOpen, setOpen] = useState(open);
    const prev = usePrevious(isOpen);
    const [bind, { height: viewHeight }] = useMeasure();
    let { height, opacity, transform } = useSpring({
      from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
      to: {
        height: isOpen ? viewHeight : 0,
        opacity: isOpen ? 1 : 0,
        transform: `translate3d(${isOpen ? 0 : 100}px,0,0)`,
      },
    });
    const Icona =
      Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
    return (
      <Frame>
        <div className={Styles.skillset} onClick={() => setOpen(!isOpen)}>
          <div>
            <Icon style={{ ...ico }} icon={iconi} color="#0094ff" height="24" />
            <span
              //   onClick={() => setOpen(!isOpen)}
              style={{ verticalAlign: "middle", marging: 0, ...style }}
            >
              {name}
            </span>
          </div>
          {
            <Icona
              style={{ ...toggle, opacity: children ? 1 : 0.3 }}
              //   onClick={() => setOpen(!isOpen)}
            />
          }
        </div>
        <Content
          style={{
            opacity,
            height: height.interpolate((height) =>
              isOpen && prev === isOpen ? "auto" : height
            ),
          }}
        >
          <animated.div style={{ transform }} {...bind}>
            {children}
          </animated.div>
        </Content>
      </Frame>
    );
  }
  return (
    <div className={Styles.skills}>
      <div className={Styles.sectiontitle}>
        <div className={Styles.title_container}>
          <h1 className={Styles.Title}>SKILLS</h1>
        </div>
        <div className={Styles.o_dummy}></div>
      </div>
      <div className={Styles.skill_Container}>
        <div className={Styles.tree}>
          <Tree
            name="Lenguajes de programación"
            iconi={ConsoleIcon}
            style={{ fontSize: "1.4rem" }}
          >
            <Tree name="Python" />
            <Tree name="Java" />
            <Tree name="Javascript" />
            <Tree name="C#" />
            <Tree name="Php"  />
            <Tree name="TypeScript"  />
            <Tree name="Matlab"/>
            <Tree name="C++">
            </Tree>
            <Tree name="SQL" />
            <Tree name="Dart" />
          </Tree>
          <Tree
            name="Desarrollo Web"
            iconi={BracketsIcon}
            style={{ fontSize: "1.4rem" }}
          >
            <Tree name="HTML 5" />
            <Tree name="CSS" />
            <Tree name="SASS" />
            <Tree name="LESS" />
            <Tree name="Node.Js" />
            <Tree name="Deno" />
            <Tree name="Api Rest" />
            <Tree name="AWS" />
            <Tree name="Github" />
          </Tree>
          <Tree
            name="Frameworks / Bibliotecas"
            iconi={FrameworkIcon}
            style={{ fontSize: "1.4rem" }}
          >
            <Tree name="React" />
            <Tree name="Vue" />
            <Tree name="Next.Js" />
            <Tree name=".Net" />
            <Tree name="Express" />
            <Tree name="Flask" />
            <Tree name="Keras" />
            <Tree name="TensorFlow" />
            <Tree name="Arduino" />
          </Tree>
          <Tree
            name="Desarrollo de Videojuegos"
            iconi={GameIcon}
            style={{ fontSize: "1.4rem" }}
          >
            <Tree name="Unity" />
            <Tree name="Unreal Engine" />
          </Tree>
          <Tree
            name="Bases de Datos"
            iconi={DatabaseIcon}
            style={{ fontSize: "1.4rem" }}
          >
            <Tree name="Relacionales" />
            <Tree name="No Relacionales" />
            <Tree name="MySQL" />
            <Tree name="MongoDB" />
            <Tree name="MariaDB" />
            <Tree name="PostgreSQL" />
            <Tree name="SQLite" />
            <Tree name="Firebase" />
          </Tree>
          <Tree
            name="Diseño Web"
            iconi={DesignIcon}
            style={{ fontSize: "1.4rem" }}
          >
            <Tree name="Adobe XD" />
            <Tree name="Figma" />
            <Tree name={<span>🙀 something something</span>} />
          </Tree>
        </div>
        <img src={SANTIIMAGE2} alt="" />
      </div>
    </div>
  );
}

export default Skills;
