import React from "react"
import '../styles/global.css'
import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import { Presentacion } from "../components/Presentacion"
import { Nosotros } from "../components/Nosotros"
import { Footer } from "../components/Footer"
import { Servicios } from "../components/Servicios"
import { Proyectos } from "../components/Proyectos"
import { Contacto } from "../components/Contacto"
import { Clientes } from "../components/Clientes"

// markup
const IndexPage = () => {
  return (
    <Layout>

      <p>pruebas de rama test</p>

      <p>prueba de rama main a test</p>
      <Seo title="Tec Elec del Pacifico" lang="es" />

      <Presentacion />

      <div className="mt-5">
        <Nosotros />
      </div>

      <div className="mt-5">
        <Servicios />
      </div>

      <div className="mt-5">
        <Proyectos />
      </div>

      <div className="">
        <Clientes />
      </div>

      <div className="mt-5">
        <Contacto />
      </div>


      <Footer/>
      {/*<title>Home Page</title>
      <h1 >
        Congratulations
        <br />
        <span >— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p >
        Edit <code >src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />*/}
    </Layout>
  )
}

export default IndexPage
