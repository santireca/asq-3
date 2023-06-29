'use client'

import { useState } from "react";
import actividades from '../../mocks/unAnio.json'
import Filters from "../components/Filters";

export default function ActividadesPage (){
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
            <section className="flex flex-col my-auto items-center justify-center min-h-screen home-dark bg-fixed bg-gradient-to-t from-indigo-200 to-indigo-400 dark:bg-gradient-to-t dark:from-slate-900 dark:to-indigo-950 sm:py-28 gap-10">

                <div className=" flex flex-wrap justify-center gap-10 ">
                    
                    {actividades.actividades.map((actividad) => (
                        <div key={actividad.id} className=" w-[500px] h-[200px] flex flex-col justify-between bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md cursor-pointer hover:scale-105 transition duration-300 ">
                            
                            <div>
                                <p className=" text-md text-indigo-500 font-semibold ">{actividad.edad.toUpperCase()}</p>
                                <h3 className=" text-indigo-800 font-semibold text-2xl">{actividad.titulo}</h3>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <p className="text-md text-indigo-500">Área de desarrollo</p>
                                <div className=" flex flex-wrap gap-2">
                                    {actividad.area.map((area) => (
                                    <p key={area} className="p-2 text-md text-gray-100 bg-indigo-500 shadow-md w-fit rounded-sm">{area}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}