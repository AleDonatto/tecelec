import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const Servicios = () => {
    return (
        <div id="servicios">
            <div className="container mx-auto px-6 py-10 sm:mt-20 md:mt-20">
                <h1 className="text-center title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Nuestros Servicios</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <div className="rounded-lg h-full shadow-2xl p-5">
                            <h2 className="text-center font-bold font-sans text-xl">Topografia</h2>
                            <p className="text-sm flex justify-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Non sodales neque sodales ut etiam sit amet. Feugiat in ante metus dictum at tempor commodo. 
                                Tempus imperdiet nulla malesuada pellentesque elit eget gravida. 
                                Risus at ultrices mi tempus imperdiet nulla malesuada. 
                                Tortor condimentum lacinia quis vel eros donec.
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="rounded-lg shadow-2xl flex p-2 mt-2 justify-center bg-gray-100">
                            {/*<img src="https://images.unsplash.com/photo-1545186070-de624ed19875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" 
                            alt="Topogrfo tomando medidas" height="300px" width="500px" />*/}
                            <StaticImage src="../images/morgan.jpg" alt="Tomando Medidas" width={500} height={300} />
                        </div>
                    </div>
                    <div className="">
                        <div className="shadow-2xl h-full rounded-lg p-5 mt-2">
                            <h2 className="text-center font-bold font-sans text-xl">Control Operativo y adminstrativo de Obra</h2>
                            <p className="text-sm flex justify-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Non sodales neque sodales ut etiam sit amet. Feugiat in ante metus dictum at tempor commodo. 
                                Tempus imperdiet nulla malesuada pellentesque elit eget gravida. 
                                Risus at ultrices mi tempus imperdiet nulla malesuada. 
                                Tortor condimentum lacinia quis vel eros donec.
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="rounded-lg shadow-2xl flex justify-center p-2 mt-2 bg-gray-100">
                            {/*<img src="https://images.unsplash.com/photo-1529792083865-d23889753466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" 
                            alt="Obra en control" height="300px" width="500px" />*/}
                            <StaticImage src="../images/nicolas.jpg" alt="obra en construccion" width={500} height={300} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-2">
                <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
                <div className="">
                    <section className="text-gray-200 bg-gray-900">
                        <div className="max-w-6xl mx-auto px-5 py-24">
                            <div className="text-center mb-20">
                                <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Nuestros Servicios</h1>
                                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">L'informatique est vaste et les langages naissent presque à tout moment, je fais tout mon possible pour être à la hauteur afin de répondre au besoin de mes clients et d'apporter de l'aide aux nouveaux développeurs.</p>
                                <div className="flex mt-6 justify-center">
                                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                                </div>
                            </div>
                            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
                                    <div className="pattern-dots-md gray-light">
                                        <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>                </div>
                                                <div className="flex-grow">
                                                    <h2 className=" text-xl title-font font-medium mb-3">Webdesign</h2>
                                                    <p className="leading-relaxed text-sm text-justify">Donner du goût 😍 de la couleur aux applications, je le fais afin de rendre vos sites attrayants 🎨. Avant de devenir webdesigner, depuis tout petit j'étais déjà familier à la couleur et du dessin.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
                                        <div className="pattern-dots-md gray-light">
                                            <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                                </div>
                                                <div className="flex-grow">
                                                    <h2 className=" text-xl title-font font-medium mb-3">Intégration web</h2>
                                                    <p className="leading-relaxed text-sm text-justify">
                                                        Donner du goût 😍 de la couleur aux applications, je le fais afin de rendre vos sites attrayants 🎨. Avant de devenir webdesigner, depuis tout petit j'étais déjà familier à la couleur et du dessin. 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
                                    <div className="pattern-dots-md gray-light">
                                        <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                                            </div>
                                            <div className="flex-grow">
                                                <h2 className=" text-xl title-font font-medium mb-3">Developpement Back-end</h2>
                                                <p className="leading-relaxed text-sm text-justify">
                                                    Grâce à Php et ces frameworks (Larave, Symfoni, Slim), je peux vous réaliser un site dynamique c'est-à-dire qui interagie avec votre base de données 💪. Nous pouvons essayer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
