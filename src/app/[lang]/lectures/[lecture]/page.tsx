'use client'

import { useParams } from 'next/navigation'
import { Viewer,Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useState } from 'react';

const Lecture = () =>{
    const params = useParams<{lecture:string}>()
    const [isError, setIsError ] = useState<boolean>(false)
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
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
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer
                    fileUrl={`/lectures/${params.lecture}.pdf`}
                    plugins={[defaultLayoutPluginInstance]}
                    />
                </Worker>
            </div>
            
        </section>
    )
    
}

export default Lecture;