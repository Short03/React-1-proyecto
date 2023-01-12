import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import {Button} from './Button'
import {TaskCard} from './Task'
import {Saludar} from './Saludar'

const root =ReactDOM.createRoot(document.getElementById ("root"));



root.render(
  <>
  <TaskCard ready={false}/>
  <Saludar/>
  <Button text="Saludar" />

  <form onSubmit={ () => console.log("enviando datos del formulario")}>
    <h1>Registro de usuario</h1>
    <button>Send</button>
  </form>

  </>
);
