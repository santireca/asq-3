'use client'

import actividades from '../../../mocks/actividades.json'
import { useState } from "react";
import './Cards.css'

export default function CardsUnoCuatroMeses (){
    const [mostrarCards, setMostrarCards] = useState(false);
    const unoCuatroMeses = actividades.actividades.filter((actividad) => actividad.edad === "1 a 4 meses");
    return (
        <div className=" flex flex-col items-center ">
            <button 
                className=" w-[540px] text-center text-4xl font-bold py-3 text-white dark:text-fuchsia-600  cursor-pointer hover:scale-105 transition duration-200 bg-orange-700 bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border-fuchsia-800 border-opacity-18 p-5 rounded-md"
                onClick={() => setMostrarCards(!mostrarCards)}
                >Entre 1 y 4 meses de edad </button>
            {
                mostrarCards && (
                    <div className=" flex flex-wrap justify-center gap-10 mb-10 mt-10 ">
                        
                {unoCuatroMeses.map((actividad) => (
                    <div key={actividad.id} className=" w-[500px] h-[200px] flex flex-col justify-between bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md cursor-pointer hover:scale-105 transition duration-300 ">
                                
                        <div>
                            <p className=" text-md text-orange-700 font-semibold ">{actividad.edad.toUpperCase()}</p>
                            <h3 className=" text-orange-800 font-semibold text-2xl">{actividad.titulo}</h3>
                        </div>
                        <div className=" flex flex-col gap-2">
                            <p className="text-md text-orange-700">Área de desarrollo</p>
                            <div className=" flex flex-wrap gap-2">
                                {actividad.area.map((area) => (
                                <p key={area} className="p-2 text-md text-gray-100 bg-orange-700 shadow-md w-fit rounded-sm">{area}</p>
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