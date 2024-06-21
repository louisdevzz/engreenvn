import { getActiveLanguages, getLanguageObj } from "@/lib/languageParser";
import { getListPage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import path from "path";
import { markdownify } from "@/lib/utils/textConverter";
import ImageFallback from "@/helpers/ImageFallback";

type DataSponsors = {
    name: string,
    content: string,
    sponsors: []
}

type Sponsor = {
    name: string,
    image: string
}

const Sponsors = ({ params }: { params: { lang: string } }) => {
  const language = getLanguageObj(params.lang);
  const data = getListPage(
    path.join(language.contentDir, "sponsors/_index.md"),
  );
  const { frontmatter } = data;
  const { title, meta_title, description, image, sponsors } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />  
      <section className="section-sm container -mt-20">
        <div className="flex flex-col gap-20">
            {sponsors.map((data: DataSponsors,index:number)=>(
                <div key={index}>
                    <h5>{data.name}</h5>
                    <p className="mt-5" dangerouslySetInnerHTML={markdownify(data.content)}/>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-20 md:gap-10 items-center">
                        {data.sponsors&&data.sponsors.map((sponsor:Sponsor)=>(
                            sponsor.name == "Embassy"?(
                                <ImageFallback
                                    src={sponsor.image}
                                    className="mx-auto"
                                    width="180"
                                    height="50"
                                    alt="avatar"
                                    priority
                                />
                            )
                            :(
                                <ImageFallback
                                    src={sponsor.image}
                                    className="mx-auto w-[280px] h-[110px]"
                                    width="200"
                                    height="150"
                                    alt="avatar"
                                    priority
                                />
                            )
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Sponsors;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export async function generateStaticParams() {
  return getActiveLanguages().map((language) => ({
    lang: language.languageCode,
  }));
}
