import { getActiveLanguages, getLanguageObj } from "@/lib/languageParser";
import { getListPage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import path from "path";
import { markdownify } from "@/lib/utils/textConverter";
import ImageFallback from "@/helpers/ImageFallback";

type DataMentor = {
  image: string,
  info: string
}

const Mentors = ({ params }: { params: { lang: string } }) => {
  const language = getLanguageObj(params.lang);
  const data = getListPage(
    path.join(language.contentDir, "mentors/_index.md"),
  );
  const { frontmatter } = data;
  const { title, meta_title, description, image, mentors } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />  
      <section className="section-sm container">
        <div className="flex flex-col gap-14 md:gap-16">
          {mentors.map((data: DataMentor)=>(
            <div className="flex flex-col md:flex-row gap-5 md:gap-14">
              {data.image?(
                <ImageFallback
                    src={data.image}
                    className="mx-auto object-cover w-[200px] h-[200px] md:w-[182px] md:h-[182px]"
                    width="182"
                    height="182"
                    alt="avatar"
                    priority
                  />
              
              ):(
                <ImageFallback
                    src="/images/avatar.png"
                    className="mx-auto w-[200px] h-[200px] md:w-[182px] md:h-[182px]"
                    width="182"
                    height="182"
                    alt="avatar"
                    priority
                  />
              )}
              <p className="text-sm md:text-lg" dangerouslySetInnerHTML={markdownify(data.info)}/>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Mentors;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export async function generateStaticParams() {
  return getActiveLanguages().map((language) => ({
    lang: language.languageCode,
  }));
}
