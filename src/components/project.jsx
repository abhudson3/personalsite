import React from "react";
import "..//styles/project.css";
import {v4 as uuidv4} from "uuid";

function Project(props) {
  return (
    <div id={props.id} style={{backgroundColor: props.color}} className="outer">
      <div className="project">
        <div className="left">
          <div className="innerleft">
            <h2 className="projtitle">{props.title}</h2>
            <p className="projdesc">{props.shortdesc}</p>
            <h2 className="devtools">Development Tools</h2>
            <ul className="projectlist">
              {props.tools.map((tool) => (
                <li key={uuidv4()} className="projectbullet">{tool}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="imageouter">
            <img className="projectimage" src={props.image} alt={props.alt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
