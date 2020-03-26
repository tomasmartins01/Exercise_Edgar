import React, { Fragment } from "react";
import ImagePedro from "../assets/images/pedro.png";
import NavTrans from "./NavTrans";
import DropDown2 from "./DropDown2";
import Banner from "./Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const items = [
  "Edgar",
  "Bruno",
  "Pedro",
  "Flávio",
  "Joana",
  "Diogo",
  "Tomás",
  "Araújo",
  "Maria"
];

const selected = "Choose...";

export default function BasicExample() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/">
            <NavTrans name="/" />
            <Home />
          </Route>

          <Route path="/about">
            <NavTrans name="/about" />
            <About />
          </Route>

          <Route path="/dashboard">
            <NavTrans name="/dashboard" />
            <Dashboard />
          </Route>

          <Route path="/exercises">
            <NavTrans name="/exercises" />
            <Exercises />
          </Route>

          <Route path="/bannerex">
            <NavTrans name="/bannerex" />
            <Banner bColor="red" visible={true}>
              Ola eu sou o Tomásovski
            </Banner>
          </Route>
        </Switch>{" "}
      </Fragment>{" "}
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>
        A home, or domicile, is a living space used as a permanent or semi -
        permanent residence for an individual{" "}
      </h2>{" "}
    </div>
  );
}

function About() {
  return (
    <div>
      <h2> I am Bruno Reis😁 </h2>{" "}
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>
        Propriedade que caracteriza os organismos cuja existência evolui do
        nascimento até a morte.wtf{" "}
      </h2>{" "}
      <img className="img--main" alt="A random person" src={ImagePedro} />{" "}
    </div>
  );
}

function Exercises() {
  return (
    <div>
      <DropDown2
        title="Welcome to DropDown exercise"
        selected={selected}
        items={items}
      />{" "}
    </div>
  );
}
