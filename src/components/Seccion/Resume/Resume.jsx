import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import "./Resume.css";

function Resume(props) {
  return (
    <div className="o_resume" >
      <h1>Resumen Profesional</h1>
      <VerticalTimeline style={{ width: "65%" }} className="vertical-timeline-custom-line">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"

          // date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Técnico bachiller en informática{" "}
          </h3>
          <p>Colegio Leon de Greiff</p>
          <p className="o-date">Julio 2016</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desarrollador de páginas web
          </h3>
          <p>Universidad Autónoma de Occidente</p>
          <p className="o-date">Julio 2019 - Noviembre 2020</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desarrollador FrontEnd
          </h3>
          <p>Alianza 99 SAS</p>
          <p className="o-date">Junio 2020 - Agosto 2020</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Corporacion Talentum
          </h3>
          <p>Desarrollador Unity</p>
          <p className="o-date">Octubre 2021 - Diciembre 2021</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Desarrollador Web</h3>
          <p>Anzick Media</p>
          <p className="o-date">Mayo 2021 - Febrero 2022</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Grupo Konecta
          </h3>
          <p>Analista de desarrollo</p>
          <p className="o-date">Febrero 2022 - Actualidad</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ingeniero Multimedia
          </h3>
          <p>Universidad Autónoma de Occidente</p>
          <p className="o-date">Octubre 2022</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Resume;
