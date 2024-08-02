import Link from "next/link";

interface Lecture {
    title: string,
    background: string,
    date: string
}

const Lectures = () =>{

    const Lectures = [
        {
            title:"Welcome to our envirolish project",
            background:"/assets/lectures/lecture-1.png",
            date: "05/07/2024"
        },
        {
            title:"Part 1: Scientific english immersion with hands-on experimentation on microbial plastic degradation in vietnam",
            background:"/assets/lectures/lecture-2.png",
            date: "06/07/2024"
        },
        {
            title:"Uses & issues vocabulary for experiments",
            background:"/assets/lectures/lecture-3.png",
            date: "11/07/2024"
        },
        {
            title:"How to tackle plastic pollution and create a circular economy",
            background:"/assets/lectures/lecture-4.png",
            date: "12/07/2024"
        },
        {
            title:"Transforming waste into Wealth",
            background:"/assets/lectures/lecture-5.png",
            date: "12/07/2024"
        },
        {
            title:"Part 2: Scientific english immersion with hands-on experimentation on microbial plastic degradation in vietnam",
            background:"/assets/lectures/lecture-2.png",
            date: "20/07/2024"
        },
        {
            title:"Plastic and biodegradation methods",
            background:"/assets/lectures/lecture-final.png",
            date: "26/07/2024"
        }
        // {
        //     title:"Part 2: Final Presentation",
        //     background:"/assets/lectures/lecture-final-2.png",
        //     date: "27/07/2024"
        // },
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
                {Lectures.map((lt:Lecture,idx: number)=>(
                    <Link key={idx} href={`/lectures/${slugify(lt.title)}`} className="flex relative flex-col w-72 h-[295px] rounded-lg p-2 shadow-sm pb-5 gap-3 border border-gray-300">
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

export default Lectures;