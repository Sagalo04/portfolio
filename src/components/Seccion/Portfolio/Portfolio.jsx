// import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import Styles from "./Portfolio.module.scss"


function Portfolio() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      )
    }
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
