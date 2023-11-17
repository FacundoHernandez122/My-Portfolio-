import React from "react";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="container myContainer pt-5">
      
      <img className="myImg mt-5 p-3" src="myimg.jpeg" alt="" />
     
      <div className="myName p-3 mt-3">
        <h1>Facundo Hernández Casas</h1>
        <p>Full Stack Web Developer</p>
      </div>
      <div className="">
        <img className="scroll" src="scroll-down.gif" alt="" />
      </div>
      <div className="row skills-container text-center">
        <div className="col skills mt-5 p-3 mb-5">
          <img className="me-3 iconskill ms-3" src="aws.png" alt="" />
          <img className="me-3 iconskill" src="bootstrap.png" alt="" />
          <img className="me-3 iconskill " src="css.png" alt="" />

          <img className="me-3 iconskill" src="github.png" alt="" />
          <div className="col">
            <img className="me-3 iconskill" src="html.png" alt="" />
            <img className="me-3 iconskill" src="javascript.png" alt="" />
            <img className="me-3 iconskill" src="mongodb.png" alt="" />

            <img className="me-3 iconskill" src="mysql.png" alt="" />
          </div>
          <div className="col">
            <img className="me-3  iconskill" src="node.png" alt="" />
            <img className="me-3 iconskill" src="react.png" alt="" />
            <img className="me-3 iconskill" src="redux.png" alt="" />
            <img className="me-3 iconskill" src="vue.png" alt="" />
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default MainPage;
