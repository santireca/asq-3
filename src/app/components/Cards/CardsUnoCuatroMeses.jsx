'use client'

import actividades from '../../../mocks/unAnio.json'
import { useState } from "react";
import './Cards.css'
import { motion } from 'framer-motion';

export default function CardsUnoCuatroMeses (){
    const [mostrarCards, setMostrarCards] = useState(false);
    const unoCuatroMeses = actividades.actividades.filter((actividad) => actividad.edad === "1 a 4 meses" && actividad.tipo === "principal");
    const unoCuatroMesesExtra = actividades.actividades.filter((actividad) => actividad.edad === "1 a 4 meses" && actividad.tipo === "extra");
    return (
        <div className=" flex flex-col items-center overflow-hidden w-screen ">
            <button 
                className=" w-[540px] text-center text-4xl font-bold py-3 text-white dark:text-fuchsia-600  cursor-pointer hover:scale-105 transition duration-200 bg-orange-800 bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border-fuchsia-800 border-opacity-18 p-5 rounded-md sm:w-[300px] sm:text-lg sm-m:w-[400px] sm-m:text-2xl"
                onClick={() => setMostrarCards(!mostrarCards)}
                >Entre 1 y 4 meses de edad </button>
                <motion.div className='overflow-hidden px-80'>
                    {
                        mostrarCards && (
                            <motion.div className=" flex justify-center items-center gap-5 mb-5 mt-10 sm:gap-5 h-[220px] cursor-grab" drag='x' dragConstraints={{right: 480.5, left: -480.5}}>
                                
                                {unoCuatroMeses.map((actividad) => (
                                    <div key={actividad.id} className=" w-[300px] h-[200px] flex flex-col justify-between bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md  hover:scale-105 transition duration-300 sm-m:min-w-[300px] sm:w-[300px] cursor-grab">
                                                
                                        <div>
                                            {/* <p className=" text-md text-orange-700 font-semibold ">{actividad.edad.toUpperCase()}</p> */}
                                            <h3 className=" text-orange-800 font-semibold text-2xl">{actividad.titulo}</h3>
                                        </div>
                                        <div className=" flex flex-col gap-2">
                                            <p className="text-md text-orange-700">Área de desarrollo</p>
                                            <div className=" flex flex-wrap gap-2">
                                                {actividad.area.map((area) => (
                                                <p key={area} className="p-2 text-sm text-gray-100 bg-orange-700 shadow-md w-fit rounded-sm sm:text-xs">{area}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )
                    }
                </motion.div>

                <motion.div className=' max-w-screen overflow-hidden'>
                    {
                        mostrarCards && (
                            <motion.div className=" overflow-hidden flex justify-center items-center gap-5 mb-10 mt-10 sm:gap-5 h-[220px] cursor-grab px-10" drag='x' dragConstraints={{right: 3040, left: -3040}}>
                                
                                {unoCuatroMesesExtra.map((actividad) => (
                                    <div key={actividad.id} className=" w-[300px] h-[200px] flex flex-col justify-between bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md  hover:scale-105 transition duration-300 sm-m:min-w-[300px] sm:w-[300px] cursor-grab">
                                                
                                        <div className=' flex flex-col'>
                                            <p className=' text-xl font-bold text-orange-900'>{actividad.numero}°</p>
                                            <h3 className=" text-orange-800 font-semibold text-sm">{actividad.descripcion}</h3>
                                        </div>
                                        
                                    </div>
                                ))}
                            </motion.div>
                        )
                    }
                </motion.div>
                    
        </div>
    )
}