import languages from "@/config/language.json";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { getActiveLanguages } from "@/lib/languageParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import Link from "next/link";
import path from "path";
import { GoHorizontalRule } from "react-icons/go";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export async function generateStaticParams() {
  return getActiveLanguages().map((language) => ({
    lang: language.languageCode,
  }));
}

const Home = ({ params }: { params: { lang: string } }) => {
  const lang = params.lang;
  const language = languages.find(
    (language) => language.languageCode === lang,
  )!;
  const homepage = getListPage(
    path.join(language?.contentDir, "homepage/_index.md"),
  );
  const testimonial = getListPage(
    path.join(language.contentDir, "sections/testimonial.md"),
  );
  const callToAction = getListPage(
    path.join(language.contentDir, "sections/call-to-action.md"),
  );
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      <section className="section pt-5">
        <div className="container">
          <div className="row justify-center">
            {banner.image && (
              <div className="col-12">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto"
                  width="800"
                  height="420"
                  alt="banner image"
                  priority
                />
              </div>
            )}
            <div className="mt-20">
              <h1
                className="mb-4 text-h3 lg:text-h1"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <div
                className="mb-8 w-full"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="-mt-[15rem]">
        {features.map((feature, index: number) => (
          <section
            key={index}
            className={`section-sm mt-7 md:-mt-[12rem]`}
          >
            <div className="container">
              <div className="items-center justify-between">
                {/* <div
                  className={`mb:md-0 mb-6 md:col-5 ${
                    index % 2 !== 0 && "md:order-2"
                  }`}
                >
                  <ImageFallback
                    src={feature.image}
                    height={480}
                    width={520}
                    alt={feature.title}
                  />
                </div> */}
                <div
                  className={`w-full`}
                >
                  <h2
                    className="mb-4 mt-10"
                    dangerouslySetInnerHTML={markdownify(feature.title)}
                  />
                  <div
                    className="mb-8 text-lg"
                    dangerouslySetInnerHTML={markdownify(feature.content)}
                  />
                  <ul>
                    {feature.bulletpoints&&feature.bulletpoints.map((bullet: string) => (
                      <li className="relative mb-4 pl-6 flex flex-row" key={bullet}>
                        <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                        <p dangerouslySetInnerHTML={markdownify(bullet)} />
                      </li>
                    ))}
                  </ul>
                  {feature.button.enable && (
                    <Link
                      className="btn btn-primary mt-5"
                      href={feature.button.link}
                    >
                      {feature.button.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Testimonials data={testimonial} />
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
