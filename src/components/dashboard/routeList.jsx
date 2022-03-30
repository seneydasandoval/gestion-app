import React from "react";
import { Routes, Route } from "react-router-dom";
import Proceso from "../Proceso";
import Home from "../Home";
import Proyecto from "../Proyecto";
import Recurso from "../Recurso";
import Rol from "../Rol";
import Tarea from "../Tarea";
import Sprint from "../Sprint";
import Backlog from "../Backlog";

export const routerList = (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/backlog" element={<Backlog />}></Route>
    <Route path="/proceso" element={<Proceso />}></Route>
    <Route path="/proyecto" element={<Proyecto />}></Route>
    <Route path="/recurso" element={<Recurso />}></Route>
    <Route path="/rol" element={<Rol />}></Route>
    <Route path="/sprint" element={<Sprint />}></Route>
    <Route path="/tarea" element={<Tarea />}></Route>
  </Routes>
)