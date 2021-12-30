import Styles from "./Card.module.scss";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "../../Button/Button";
import { arrow, Github } from '../../../constants/icons'


function Card({ imagen, title, descrip, link1="#",link2="#", dis1, dis2}) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      <p>
        {descrip}
      </p>
      <div className={Styles.btnn}>
        <Button title="Demo" icon={arrow} refr={link1} dis={dis1}/>
        <Button title="Code" icon={Github} refr={link2} dis={dis2}/>
      </div>
    </animated.div>
  );
}

export default Card;
