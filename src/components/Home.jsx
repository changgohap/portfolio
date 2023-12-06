import React from "react";
import Header from "./Header";
import Main from "./Main";
import Intro from "./Intro";
import About from "./About";
import Skill from "./Skill";
import Awards from "./Awards";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Intro />
        <About />
        <Skill />
        <Awards />
        <Projects />
      </Main>
      <Footer />
    </>
  );
}
