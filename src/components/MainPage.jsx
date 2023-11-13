import React from "react";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="container myContainer">
      <img className="myImg mt-5 p-3" src="myimg.jpeg" alt="" />

      <div className="myName p-3">
        <h1>Facundo Hernández Casas</h1>
        <p>Full Stack Web Developer</p>
      </div>
      <div className="row text-center">
        <div className="col skills mt-3 p-3">
          <img className="me-3 ms-3" src="aws.png" alt="" />
          <img className="me-3" src="bootstrap.png" alt="" />
          <img className="me-3" src="css.png" alt="" />

          <img className="me-3" src="github.png" alt="" />
          <div className="col">
            <img className="me-3" src="html.png" alt="" />
            <img className="me-3" src="javascript.png" alt="" />
            <img className="me-3" src="mongodb.png" alt="" />

            <img className="me-3" src="mysql.png" alt="" />
          </div>
          <div className="col">
            <img className="me-3" src="node.png" alt="" />
            <img className="me-3" src="react.png" alt="" />
            <img className="me-3" src="redux.png" alt="" />
            <img className="me-3" src="vue.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <img className="scroll mt-5 mb-5 " src="scroll-down.gif" alt="" />
      </div>
    </div>
  );
}

export default MainPage;
