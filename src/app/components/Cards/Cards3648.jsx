'use client'

import actividades from '../../../mocks/actividades.json'
import { useState } from "react";

export default function Cards3648 (){
    const [mostrarCards, setMostrarCards] = useState(false);
    const treintaiseisCuarentaiochoMeses = actividades.actividades.filter((actividad) => actividad.edad === "36 a 48 meses");
    return (
        <div className=" flex flex-col items-center ">
            <button 
                className=" w-[565px] text-center text-4xl font-bold py-3 text-white dark:text-fuchsia-600 cursor-pointer hover:scale-105 transition duration-200 bg-teal-700 bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border-fuchsia-800 border-opacity-18 p-5 rounded-md sm:w-[300px] sm:text-lg sm-m:w-[400px] sm-m:text-2xl"
                onClick={() => setMostrarCards(!mostrarCards)}
                >Entre 36 y 48 meses de edad </button>
            {
                mostrarCards && (
                    <div className=" flex flex-wrap justify-center gap-10 mb-10 mt-10">
                        
                {treintaiseisCuarentaiochoMeses.map((actividad) => (
                    <div key={actividad.id} className=" w-[500px] h-[200px] flex flex-col justify-between bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md cursor-pointer hover:scale-105 transition duration-300 ">
                                
                        <div>
                            <p className=" text-md text-teal-500 font-semibold ">{actividad.edad.toUpperCase()}</p>
                            <h3 className=" text-teal-700 font-semibold text-2xl">{actividad.titulo}</h3>
                        </div>
                        <div className=" flex flex-col gap-2">
                            <p className="text-md text-teal-700">Área de desarrollo</p>
                            <div className=" flex flex-wrap gap-2">
                                {actividad.area.map((area) => (
                                <p key={area} className="p-2 text-md text-gray-100 bg-teal-700 shadow-md w-fit rounded-sm">{area}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                )
            }
                    
        </div>
    )
}