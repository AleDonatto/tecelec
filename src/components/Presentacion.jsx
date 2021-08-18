import React from 'react'
import logo from '../images/TECELEC1.jpg'
import bground from '../images/construccion.jpg'


export const Presentacion = () => {
    return (
        <div id="home">
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-screen-xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <a href="#home" aria-label="Home">
                                            <img className="h-8 w-auto sm:h-10" src={logo} alt="Logo Tec Elec" />
                                        </a>
                                        <div className="-mr-2 flex items-center md:hidden">
                                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block md:ml-10 md:pr-4">
                                    <a href="#nosotros" className="ml-4 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Nosotros</a>
                                    <a href="#servicios" className="ml-4 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Servicios</a>
                                    <a href="#proyectos" className="ml-4 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Proyectos</a>
                                    <a href="#contacto" className="ml-4 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out">Contacto</a>
                                </div>
                            </nav>
                        </div>
                       
                            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                                <div className="rounded-lg">
                                    <div className="rounded-lg bg-white overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                                        <div className="px-5 pt-4 flex items-center justify-between">
                                            <div>
                                                <img className="h-8 w-auto" src={logo} alt="Contruccion background" />
                                            </div>
                                            
                                            <div className="-mr-2">
                                                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="px-2 pt-2 pb-3">
                                            <div className="">
                                                <a href="#nosotros" className="ml-4 text-sm text-gray-700 underline">Nosotros</a>
                                                <a href="#servicios" className="ml-4 text-sm text-gray-700 underline">Servicios</a>
                                                <a href="#proyectos" className="ml-4 text-sm text-gray-700 underline">Proyectos</a>
                                                <a href="#contacto" className="ml-4 text-sm text-gray-700 underline">Contacto</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="sm:text-center lg:text-left">
                                    <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                                        Tec Elec del Pacifico
                                        <br className="xl:hidden"/>
                                        <br/>
                                        <span className="text-indigo-600">Topografia y Construccion</span>
                                    </h2>
                                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        Empresa 100% confiable dedicada a ofrecer servicios de topografia en sus multiples facetas y construccion en general.
                                    </p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <a href="#contacto" className="w-full inline-flex items-center space-x-2 flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <span>Solicitar una Cotizacion</span>
                                            </a>
                                        </div>
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <a href="#" className="w-full flex inline-flex items-center space-x-2 items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                                                </svg>
                                                <span>Ver mas</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={bground} alt="obra en contruccion" />
                </div>
            </div>
        </div>
    )
}
