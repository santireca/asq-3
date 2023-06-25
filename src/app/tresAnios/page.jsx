/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from "react";
import Cards2430 from "../components/Cards/Cards2430";
import style from './pageTresAnios.module.css'

export default function tresAniosPage (){

    return (
        <div>
            <section id={style.main} className="flex flex-col items-center justify-start min-h-screen home-dark bg-fixed bg-gradient-to-t from-violet-200 to-violet-400 dark:bg-gradient-to-t dark:from-slate-900 dark:to-indigo-950 sm:py-28 gap-10">

                <div className="bg-white bg-opacity-70 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-18 p-5 rounded-md text-center">
                    <p className=" text-sky-700 font-semibold text-lg">"Un niño no es un vaso que llenar, sino un fuego que encender."</p>
                    <p className=" text-sky-500 font-light text-lg">François Rabelais</p>
                </div>
                <Cards2430/>
                <Cards2430/>

            </section>

            <section>
                
            </section>
        </div>
    )
}