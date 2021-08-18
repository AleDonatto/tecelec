import React from 'react'

export const Proyectos = () => {
    return (
        <div id="proyectos">
            <div className="container mx-auto px-6 py-10 sm:mt-20 md:mt-20">
                <h1 className="text-center title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Nuestros Proyectos</h1>

                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                        <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1597668094804-6236e6a8d248?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80)" }}></div>

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
                        <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1607134541878-f3bbce97b2dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)" }}></div>

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
                        <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1563166423-482a8c14b2d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)" }}></div>

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
