/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from "react";
import CardsUnoCuatroMeses from "../components/Cards/CardsUnoCuatroMeses";
import CardsCuatroOchoMeses from "../components/Cards/CardsCuatroOchoMeses";
import CardsOchoDoceMeses from "../components/Cards/CardsOchoDoceMeses";
import style from './pageUnAnio.module.css'

export default function UnAnioPage (){
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <section id={style.main} className="flex flex-col items-center justify-start min-h-screen home-dark bg-fixed bg-gradient-to-t from-violet-200 to-violet-400 dark:bg-gradient-to-t dark:from-slate-900 dark:to-indigo-950 sm:py-28 gap-10">

                <div className="bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md text-center">
                    <p className=" text-orange-700 font-semibold text-lg">"Los niños son el recurso más valioso y la esperanza más preciada para el futuro."</p>
                    <p className=" text-orange-600 font-light text-lg">Lyndon B. Johnson</p>
                </div>
                <CardsUnoCuatroMeses/>
                <CardsCuatroOchoMeses/>
                <CardsOchoDoceMeses/>

            </section>

            <section>
                
            </section>
        </div>
    )
}