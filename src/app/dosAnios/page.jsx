/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from "react";
import Cards1216 from "../components/Cards/Cards1216";
import style from './pageDosAnios.module.css'

export default function UnAnioPage (){
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <section id={style.main} className="flex flex-col items-center justify-start min-h-screen home-dark bg-fixed bg-gradient-to-t from-violet-200 to-violet-400 dark:bg-gradient-to-t dark:from-slate-900 dark:to-indigo-950 sm:py-28 gap-10">

                <div className="bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md text-center">
                    <p className=" text-orange-950 font-semibold text-lg">"La sonrisa de un niño es la mejor recompensa para un pediatra."</p>
                    <p className=" text-orange-900 font-light text-lg">Abraham Verghese</p>
                </div>
                <Cards1216/>
                <Cards1216/>
                <Cards1216/>

            </section>
        </div>
    )
}