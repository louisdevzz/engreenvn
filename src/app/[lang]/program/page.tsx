import { getActiveLanguages, getLanguageObj } from "@/lib/languageParser";
import { getListPage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import path from "path";
import ImageFallback from "@/helpers/ImageFallback";
import { GoHorizontalRule } from "react-icons/go";
import { markdownify } from "@/lib/utils/textConverter";

const Program = ({ params }: { params: { lang: string } }) => {
  const language = getLanguageObj(params.lang);
  const data = getListPage(
    path.join(language.contentDir, "program/_index.md"),
  );
  const { frontmatter } = data;
  const { title, meta_title, description, image, program } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />  
      <section className="section-sm container -mt-10">
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row">
          <ImageFallback
                className="mb-6 mx-auto"
                src={"/assets/sponsors/american.jpg"}
                width={220}
                height={120}
                alt={"american"}
              />
          <ImageFallback
              className="mb-6 mx-auto"
              src="/assets/sponsors/citizen.jpg"
              width={350}
              height={120}
              alt={"citizen"}
            />
          <ImageFallback
            className="mb-6 mx-auto"
            src="/assets/sponsors/embassy.jpg"
            width={120}
            height={120}
            alt={"embassy"}
          />
        </div>
        <div className="mt-10 text-center">
          <h3>ENGREENVN 2024</h3>
          <h5 className="font-semibold mt-2">ENGREENVN: Where Words Grow Green</h5>
        </div>
        <div className="mt-10">
          {program.map((b:any)=>(
            <div>
              <p className="font-semibold text-lg">{b.title}</p>
              <ul className="mt-5">
                {b.bullet&&b.bullet.map((point: string) => (
                  <li className="relative mb-4 pl-6 flex flex-row" key={point}>
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p dangerouslySetInnerHTML={markdownify(point)} />
                  </li>
                ))}
              </ul>
            </div>
            
          ))}
        </div>
      </section>
    </>
  );
};

export default Program;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export async function generateStaticParams() {
  return getActiveLanguages().map((language) => ({
    lang: language.languageCode,
  }));
}
