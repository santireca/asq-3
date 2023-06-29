'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
import Doctor from '../utils/animations/Doctor.json';
import DoctorBW from '../utils/animations/DoctorBW.json';
import DoctorBlue from '../utils/animations/DoctorBlue.json'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
        <section class="flex my-auto items-center justify-center h-screen home-dark bg-fixed bg-gradient-to-t from-blue-200 to-blue-400 dark:bg-gradient-to-t dark:from-slate-900 dark:to-indigo-950 sm:py-28">
                  
                  <div className=" flex flex-col justify-center items-center">
                    <div data-aos="fade-down" data-aos-duration="700" className="flex flex-col items-center justify-center mb-10 laptop:mb-6 sm-m:mb-5 sm:mb-4">
                      <h1 className="text-5xl font-bold py-2 text-blue-800 dark:text-indigo-600 laptop:text-4xl sm-m:text-3xl sm:text-2xl">Actividades ASQ-3</h1>
                    </div>

                    <div className=" flex items-center justify-center mb-10 gap-14 sm:gap-0 sm-m:gap-0">

                      <div className=" flex flex-col justify-center items-center gap-5 laptop:mx-5">

                        <div className=" w-[570px] flex flex-col items-center bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md
                        laptop:min-w-[400px] laptop:max-w-[450px] sm-m:w-[380px] sm:w-[290px]">
                          <h2 className=" text-2xl mb-5 font-bold text-blue-800 dark:text-indigo-600 laptop:text-xl sm-m:text-lg sm:text-base">¿Qué son?</h2>
                          <p className=" text-center text-lg text-gray-500 laptop:text-base sm-m:text-sm sm:text-xs">Las Actividades ASQ-3 (Ages and Stages Questionnaires, Third Edition) son <span className="text-blue-500 font-semibold">actividades específicas</span> diseñadas para evaluar el desarrollo y las habilidades de los niños desde el nacimiento hasta los 5 años de edad.</p>
                        </div>

                        <div className=" w-[570px] flex flex-col items-center bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md
                        laptop:min-w-[400px] laptop:max-w-[450px] sm-m:w-[380px] sm:w-[290px]">
                          <h2 className=" text-2xl mb-5 font-bold text-blue-800 dark:text-indigo-600 laptop:text-xl sm-m:text-lg sm:text-base">¿Cuál es su objetivo?</h2>
                          <p className=" text-center text-lg text-gray-500 laptop:text-base sm-m:text-sm sm:text-xs">El objetivo principal de las Actividades ASQ-3 es <span className="text-blue-500 font-semibold">identificar</span> cualquier retraso o dificultad en el desarrollo de un niño para que se puedan tomar medidas adecuadas y oportunas.</p>
                        </div>

                      </div>

                      <div>
                        <Player
                            autoplay
                            loop
                            src={DoctorBlue}
                            className=" max-w-md laptop:max-w-80 laptop:min-w-74 sm:hidden sm-m:hidden mt-0 p-0"
                          />
                      </div>

                    </div>

                    <div>
                      <Link href={'/edad'}>
                        <button className=" px-5 py-2 bg-blue-800 rounded-sm text-gray-200 text-lg hover:bg-blue-700 hover:scale-105 transition duration-200 shadow-lg">¡Empecemos!</button>
                      </Link>
                    </div>

                  </div>
                </section>
      </div>
  )
}
