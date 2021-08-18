import React from 'react'

export const Nosotros = () => {
    return (
        <div id="nosotros">
            <div className="bg-gray-100">
                <div className="container mx-auto px-6 py-10 sm:mt-20 md:mt-20" >
                    <div className="shadow-2xl py-10 bg-white rounded-lg">
                        <h2 className="text-center text-black font-sans text-3xl font-bold mb-5">Nosotros</h2>
                        <p className="text-lg mt-2 text-gray-500 text-center font-sans text-lg">
                            "Somos un grupo de profesionales dedicados a la profesion, enfocados en la 
                            calidad de la contruccion y la infraestructura, utilizando herremientas tecnologicas y 
                            opertivas para mejorar los rendimientos"
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100">
                <div className="container mx-auto px-6 py-5">
                    <h1 className="text-blue-600 text-opacity-100 text-left fonts-sans font-extrabold text-3xl">TEC ELEC DEL PACIFICO: los experto en levantamiento de casas, edificios, calles, puentes o carreteras</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mt-5 p-8">
                            <div className="flex mt-6 justify-start">
                                <div className="w-36 h-2 rounded-full bg-indigo-500 inline-flex"></div>
                            </div>
                            <div className="mt-5 text-center flex justify-center">
                                <p className="font-sans text-lg">
                                Somos una empresa especializada en servicios de topografía, ubicada en la Ciudad de México. En TOPOGRAFÍA MDM tenemos más de 52 años de experiencia realizando trabajos de <span className="font-bold"> trazos de edificación, supervisión de obra, trazos y nivelación de terrenos y levantamientos topográficos.</span> Conócenos, somos especialistas en planos arquitectónicos y servicios de topografía en general.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 p-8">
                            <div className="flex mt-6 justify-start">
                                <div className="w-36 h-2 rounded-full bg-indigo-500 inline-flex"></div>
                            </div>
                            <div className="mt-5 text-center flex justify-center">
                                <p className="font-sans text-lg">
                                    Cada proyecto de topografía que llevamos a cabo es realizado con la más avanzada tecnología, y con la finalidad de ofrecer los resultados deseados con precisión. Para garantizarlo, contamos con un equipo de topógrafos profesionales y expertos en el ramo, quienes te asesoraremos acerca de cada uno de los detalles de tu proyecto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
