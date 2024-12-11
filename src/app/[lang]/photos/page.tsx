import Link from "next/link";

interface Lecture {
    title: string,
    background: string,
    date: string
}

const Photos = () =>{

    const photos = [
        {
            title:"Welcome CDAF Participants",
            background:"/assets/photos/photo-1.png",
            date: "05/07/2024"
        },
        {
            title:"English and Business Activities",
            background:"/assets/photos/photo-2.png",
            date: "06/07/2024"
        },
        {
            title:"Computer-Assisted Molecular Modeling of Plastic-Eating Enzymes",
            background:"/assets/photos/photo-3.png",
            date: "06/07/2024"
        },
        {
            title:"Biology Lecture",
            background:"/assets/photos/photo-4.png",
            date: "12/07/2024"
        },
        {
            title:"Vietnam Waste Solution Field Trip",
            background:"/assets/photos/photo-5.png",
            date: "12/07/2024"
        },
        {
            title:"Biology Experimentation Core of this CDAF Project",
            background:"/assets/photos/photo-6.png",
            date: "18/07/2024"
        },
        {
            title:"Culminating Activity",
            background:"/assets/photos/photo-7.png",
            date: "20/07/2024"
        },
        {
            title:"Certificates of Recognition",
            background:"/assets/photos/photo-8.png",
            date: "26/07/2024"
        },
        {
            title:"CDAF Participants",
            background:"/assets/photos/photo-9.png",
            date: "02/08/2024"
        },
        {
            title:"List of Mentors and Staff Members",
            background:"/assets/photos/photo-10.png",
            date: "02/08/2024"
        },
        {
            title:"Post-In-Person Activity",
            background:"/assets/photos/photo-11.png",
            date: "02/08/2024"
        }
    ]

    const slugify = (str:string)=> {
        str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
        str = str.toLowerCase(); // convert string to lowercase
        str = str.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
                 .replace(/\s+/g, '-') // replace spaces with hyphens
                 .replace(/-+/g, '-'); // remove consecutive hyphens
        return str;
    }

    const truncate = (str : string) =>{
        if(str.length > 50){
            return str.slice(0,50)+"..."
        }
        return str
    }

    return(
        <section className="section-sm container -mt-10">
            <div className="flex flex-col md:flex-row gap-5 flex-wrap w-full">
                {photos.map((lt:Lecture,idx: number)=>(
                    <Link key={idx} href={`/photos/${slugify(lt.title)}`} className="flex relative flex-col w-72 h-[295px] rounded-lg p-2 shadow-sm pb-5 gap-3 border border-gray-300">
                        <img width={100} className="w-full rounded-t-lg" src={lt.background} alt="background" />
                        <span className="font-semibold">{truncate(lt.title)}</span>
                        <div className="text-sm absolute bottom-5 w-72 flex flex-row justify-between left-0 px-3 mt-4">
                            <img width={20} src="/assets/schedule.svg" alt="icon" />
                            <span>{lt.date}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Photos;