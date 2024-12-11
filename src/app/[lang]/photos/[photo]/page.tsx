'use client'

import { useParams } from 'next/navigation'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import dynamic from 'next/dynamic';


const PhotoView = dynamic(()=>import("../../../../components/PhotoView"),{ssr:false})

const Photo = () =>{
    const params = useParams<{photo:string}>()
    const decodeSlug = (str: string) =>{
        str =  str.replace(/-/g," ")
        str = str[0].toUpperCase() + str.substring(1);
        return str
    }
    console.log("params",params)
    return(
        <section className="section-sm container -mt-10">
            <h2 className=''>{decodeSlug(params.photo)}</h2>
            <div className='mt-5'>
                <PhotoView params={params}/>
            </div>
        </section>
    )
    
}

export default Photo;
