import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Project from "./components/project";

function App() {
  
  function handleScroll(choice) {
    let element = document.getElementById(choice);
    if (element) {

      console.log(element)
      // 👇 Will scroll smoothly to the top of the next section
      //YOU NEED TO CHANGE THIS TO THE TOP OF THE ELEMENT
      element.scrollIntoView({ behavior: "smooth", block: "start"});
    }
  }

  return (
    <>
      <Navbar>
        <li>
          <a
            onClick={() => {
              handleScroll("home");
            }}
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a onClick={() => {
              handleScroll("aboutshell");
            }}
            >About</a>
        </li>
        <li>
          <a 
          onClick={() => {
            handleScroll("prop1");
          }}
          >Projects</a>
        </li>
        <li>
          <a >Designs</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </Navbar>
      <div className="welcome-page">
        <br />
        <p>hi, my name is</p>
        <p className="name">andrew hudson</p>
        <p className="title">
          i like to make cool things
        </p>
        <p className="title-2">
          you can contact me here if you want to contact me
        </p>
      </div>
      <div id="aboutshell" className="aboutshell">
        <div className="about">
          <p className="title">about me</p>
          <p className="titlesub">
            I am a junior at the University of Alabama. I am in the accelerated
            masters program for Management Information Systems. I like graphic
            design even if I'm not good at it.
          </p>
        </div>
      </div>
      <Project
        color="red"
        title="MIS 321 Project"
        id="prop1"
        shortdesc="A project for my Business Programming 2 class, it was a simulated consulting project with a group, and an outside client. Among other things, it allowed users to shop for electric vehicles, compare costs of ownership, and administators to quickly and easily manage the site."
        tools={["VanillaJS", "MySQL", "HTML", "CSS", "C# Web API"]}
        image="https://i.imgur.com/m7PSZbP.png"
        alt="321 Project"
      ></Project>
      <Project
        color="blue"
        title="Pariveda Project"
        id="prop2"
        shortdesc="A project for my Business Programming 1 class, it allowed users to choose a class to be either notified or registered for when a spot opened up."
        tools={["C#", "WinForms", "Selenium"]}
        image="https://i.imgur.com/m7PSZbP.png"
        alt="Pariveda Project"
      ></Project>
      <div id="contactshell" className="contactshell">
        <div className="about">
          <p className="title">about me</p>
          <p className="titlesub">
            I am a junior at the University of Alabama. I am in the accelerated
            masters program for Management Information Systems. I like graphic
            design even if I'm not good at it.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
