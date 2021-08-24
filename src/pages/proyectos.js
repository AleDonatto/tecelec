import React from 'react'
import { Link } from "gatsby"
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

const ProyectosPage = () => {
    return (
        <Layout>
            <Seo title="Tec Elec del Pacifico" lang="es">    
                <div>
                    <p>Pagina para los proyectos </p>

                    <Link to="/" >Regresar al inicio</Link>
                </div>
            </Seo>
        </Layout>
    )
}

export default ProyectosPage