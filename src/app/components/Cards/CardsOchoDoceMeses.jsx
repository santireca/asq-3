'use client'

import actividades from '../../../mocks/ochoDoceMeses.json'
import { useState } from "react";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CardsOchoDoceMeses (){
    const [mostrarCards, setMostrarCards] = useState(false);
    const ochoDoceMeses = actividades.actividades.filter((actividad) => actividad.edad === "8 a 12 meses" && actividad.tipo === "principal");
    const ochoDoceMesesExtra = actividades.actividades.filter((actividad) => actividad.edad === "8 a 12 meses" && actividad.tipo === "extra");
    return (
        <div className=" flex flex-col items-center ">
            <button 
                className=" w-[540px] text-center text-4xl font-bold py-3 text-white dark:text-fuchsia-600 cursor-pointer hover:scale-105 transition duration-200 bg-orange-800 bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border-fuchsia-800 border-opacity-18 p-5 rounded-md sm:w-[300px] sm:text-lg sm-m:w-[400px] sm-m:text-2xl"
                onClick={() => setMostrarCards(!mostrarCards)}
                >Entre 8 y 12 meses de edad </button>
                <motion.div className='w-[1800px] overflow-hidden flex flex-col items-center justify-center'>
                    {
                        mostrarCards && (
                            <motion.div className=" flex justify-start items-center gap-5 mb-5 mt-10 sm:gap-5 h-[220px] cursor-grab" drag='x' dragConstraints={{right: 480.5, left: -480.5}}>
                                
                                {ochoDoceMeses.map((actividad) => (
                                    <div key={actividad.id} className=" w-[300px] h-[180px] flex flex-col items-center justify-between bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md  sm-m:min-w-[300px] sm:w-[300px] cursor-grab">
                                                
                                        <div>
                                            <h3 className=" text-orange-800 font-semibold text-2xl text-center">{actividad.titulo}</h3>
                                        </div>
                                        <Link href={'https://agesandstages.com/wp-content/uploads/2023/05/12-month_ASQ-3-Parent-Activities_Spanish.pdf'} target='_blank' className=" flex flex-col gap-2">
                                            <button className="py-2 px-4 text-base text-gray-100 bg-orange-700 shadow-md w-fit rounded-md hover:bg-orange-800 hover:scale-105 transition duration-300">Ver actividad</button>
                                        </Link>
                                    </div>
                                ))}
                            </motion.div>
                        )
                    }
                </motion.div>

                <motion.div className=' w-[1800px] overflow-hidden flex flex-col items-center justify-center'>
                    
                    {
                        mostrarCards && (
                            <>
                            <div className='bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 px-5 py-2 rounded-md'>
                                <p className='text-xl text-orange-800 font-semibold'>Actividades extra</p>
                            </div>
                            <motion.div className="  overflow-hidden flex justify-start items-center gap-5 mb-10 mt-10 sm:gap-5 h-[375px] cursor-grab px-10" drag='x' dragConstraints={{right: 3040, left: -3040}}>
                                
                                {ochoDoceMesesExtra.map((actividad) => (
                                    <div key={actividad.id} className=" w-[300px] h-[360px] flex flex-col justify-between bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md  hover:scale-105 transition duration-300 sm-m:min-w-[300px] sm:w-[300px] cursor-grab">
                                                
                                        <div className=' flex flex-col'>
                                            <p className=' text-xl font-bold text-orange-900'>{actividad.numero}/20</p>
                                            <h3 className=" text-orange-800 font-semibold text-sm">{actividad.descripcion}</h3>
                                        </div>
                                        
                                    </div>
                                ))}
                            </motion.div>
                            </>
                        )
                    }
                </motion.div>
                    
        </div>
    )
}