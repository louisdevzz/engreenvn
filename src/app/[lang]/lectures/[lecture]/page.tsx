'use client'

import { useParams } from 'next/navigation'
import { Viewer,Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useState } from 'react';
import dynamic from 'next/dynamic';


const ViewPDF = dynamic(()=>import("../../../../components/ViewPDF"),{ssr:false})

const Lecture = () =>{
    const params = useParams<{lecture:string}>()
    const decodeSlug = (str: string) =>{
        str =  str.replace(/-/g," ")
        str = str[0].toUpperCase() + str.substring(1);
        return str
    }
    console.log("parms",params.lecture)
    return(
        <section className="section-sm container -mt-10">
            <h2 className=''>Lecture: {decodeSlug(params.lecture)}</h2>
            <div className='mt-5'>
                <ViewPDF params={params}/>
            </div>
        </section>
    )
    
}

export default Lecture;