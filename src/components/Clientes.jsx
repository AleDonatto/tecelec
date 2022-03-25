import React from 'react'

export const Clientes = () => {
    return (
        <div>
            <div className="py-10 bg-stone-100 my-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mx-auto items-center max-w-5xl mx-auto">
                    <div className="px-4 md:mr-6">
                        <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
                            Contamos con una amplia gama de cliente satisfechos.
                        </h3>
                        <p className="mt-4 text-stone-800 text-xl font-medium">
                            With our diverse range of lenders, we fight hard to get you the best deal.
                        </p>
                    </div>
                    <div>
                        <div className="absolute bg-blue-500 transform -translate-x-10 relative h-64"></div>
                        <div className="transform md:rounded-md  bg-white rotate-3 scale-110 translate-x-10 md:shadow-2xl -ml-4 -mt-44 p-12  space-y-2">
                            <div className="sm:px-0 grid grid-cols-5 sm:grid-cols-4 gap-2 sm:gap-8 max-w-5xl mx-auto">
                                <img src="https://cdn.mjwebs.com/img-neodymium/lenders/1.png" alt='cliente'/>
                                <img src="https://cdn.mjwebs.com/img-neodymium/lenders/2.png" alt='cliente'/>
                                <img src="https://cdn.mjwebs.com/img-neodymium/lenders/3.png" alt='cliente'/>
                                <img src="https://cdn.mjwebs.com/img-neodymium/lenders/4.png" alt='cliente'/>
                                <img src="https://cdn.mjwebs.com/img-neodymium/lenders/5.png" alt='cliente'/>
                                <img src="https://cdn.mjwebs.com/img-neodymium/lenders/6.png" alt='cliente'/>
                                <img src="https://cdn.mjwebs.com/img-neodymium/lenders/7.png" alt='cliente'/>
                                <img src="https://cdn.mjwebs.com/img-neodymium/lenders/8.png" alt='cliente'/>
                                <img src="https://cdn.mjwebs.com/img-neodymium/lenders/9.png" alt='cliente'/>
                                <img src="https://cdn.mjwebs.com/img-neodymium/lenders/10.png" alt='cliente'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
