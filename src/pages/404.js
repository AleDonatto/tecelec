import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="Tec Elec del Pacifico" lang="es">

        <p>Pagina 404 </p>
        
        <Link to="/">Go home</Link>

      </Seo>
    </Layout>
  )
}

export default NotFoundPage
