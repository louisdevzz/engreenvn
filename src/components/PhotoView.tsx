import { Viewer,Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const PhotoView = ({params}:{params:any}) =>{
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return(
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
            fileUrl={`/photos/${params.photo}.pdf`}
            plugins={[defaultLayoutPluginInstance]}
            />
        </Worker>
    )
}

export default PhotoView;