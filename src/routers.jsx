import React from "react"
import { Redirect, Router } from "@reach/router"
import { Contato, Equipamentos, Home, Sobre } from "./pages"
import Header from "./components/header"
import Layout from "./components/layout"
const Routers = () => (
    <Layout path="/*">
        <Home path="/" />
        <Sobre path="sobre" />
        <Equipamentos path="equipamentos" />
        <Contato path="contato" />
    </Layout>
)


export default Routers