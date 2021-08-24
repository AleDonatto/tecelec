import React from 'react'
import topografo from '../images/scott.jpg'
import construccion from '../images/ivan.jpg'
import carretera from '../images/mika.jpg'

export const Proyectos = () => {
    return (
        <div id="proyectos">
            <div className="container mx-auto px-6 py-10 sm:mt-20 md:mt-20">
                <h1 className="text-center title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Nuestros Proyectos</h1>

                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                        <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${carretera})` }}></div>

                        <div className="w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden mx-5 p-5">
                            <div className="header-content inline-flex">
                                <div className="category-badge flex-1 h-4 w-4 m rounded-full m-1 bg-purple-100">
                                    <div className="h-2 w-2 rounded-full m-1 bg-purple-500 "></div>
                                </div>
                                <div className="category-title flex-1 text-sm">Carreteras</div>
                            </div>
                            <div className="title-post font-medium">av. Escenica</div>

                            <div className="summary-post text-base text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                        <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${topografo})`   }}></div>

                        <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden mx-5 p-5">
                        
                            <div className="header-content inline-flex">
                                <div className="category-badge flex-1 h-4 w-4 m rounded-full m-1 bg-purple-100">
                                    <div className="h-2 w-2 rounded-full m-1 bg-purple-500 "></div>
                                </div>
                                <div className="category-title flex-1 text-sm">Topografia</div>
                            </div>
                            <div className="title-post font-medium">Levantamineto topográfico marina brisas</div>

                            <div className="summary-post text-base text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                        <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${construccion})` }}></div>

                        <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden mx-5 p-5">
                        
                            <div className="header-content inline-flex">
                                <div className="category-badge flex-1 h-4 w-4 m rounded-full m-1 bg-purple-100">
                                    <div className="h-2 w-2 rounded-full m-1 bg-purple-500 "></div>
                                </div>
                                <div className="category-title flex-1 text-sm"> Construccion</div>
                            </div>
                            <div className="title-post font-medium">Residencia Brisas</div>

                            <div className="summary-post text-base text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure. 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
