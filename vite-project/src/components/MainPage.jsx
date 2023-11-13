import React from "react";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="myContainer">
      <img className="myImg" src="myimg.jpeg" alt="" />

      <div className="myName">
        <h1>Facundo Hernández Casas</h1>
        <p>Full Stack Web Developer</p>
      </div>
      <div className="skills">
        <img className="me-3 ms-3" src="aws.png" alt="" />
        <img className="me-3" src="bootstrap.png" alt="" />
        <img className="me-3" src="css.png" alt="" />
        <img className="me-3" src="github.png" alt="" />
        <img className="me-3" src="html.png" alt="" />
        <img className="me-3" src="javascript.png" alt="" />
        <img className="me-3" src="mongodb.png" alt="" />
        <img className="me-3" src="mysql.png" alt="" />
        <img className="me-3" src="node.png" alt="" />
        <img className="me-3" src="react.png" alt="" />
        <img className="me-3" src="redux.png" alt="" />

        <img className="me-3" src="vue.png" alt="" />
      </div>
      <div>
        <img className="scroll" src="scroll-down.gif" alt="" />
      </div>
    </div>
  );
}

export default MainPage;
