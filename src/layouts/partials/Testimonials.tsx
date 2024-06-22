"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Testimonial } from "@/types";
import "swiper/css";


interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    description?: string;
    testimonials: Array<Testimonial>;
  };
}

const Testimonials = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="section -mt-20">
          <div className="container">
            <div className="">
              <div className="mx-auto mb-12 text-center ">
                <h2
                  dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
                  className="mb-4"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(
                    data.frontmatter.description!,
                  )}
                />
              </div>
              <div className="relative grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
              {data.frontmatter.testimonials.map(
                    (item: Testimonial, index: number) => (
                      <div key={index} className="rounded-lg pb-[8rem] lg:pb-[8rem] bg-theme-light px-7 relative py-10 dark:bg-darkmode-theme-light">
                          <div className="text-dark dark:text-white">
                            <svg
                              width="33"
                              height="20"
                              viewBox="0 0 33 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.28375 19.41L0.79375 18.64C1.21375 17.0067 1.75042 15.07 2.40375 12.83C3.05708 10.5433 3.75708 8.28 4.50375 6.04C5.29708 3.75333 6.06708 1.77 6.81375 0.0899959H15.3538C14.9338 2.09666 14.4904 4.26667 14.0238 6.6C13.5571 8.88666 13.1371 11.15 12.7638 13.39C12.4371 15.5833 12.1571 17.59 11.9238 19.41H1.28375ZM31.69 0.0899959L32.18 0.859998C31.76 2.54 31.2233 4.5 30.57 6.74C29.9167 8.98 29.2167 11.2433 28.47 13.53C27.7233 15.77 26.9533 17.73 26.16 19.41H17.69C18.0167 17.9167 18.3433 16.33 18.67 14.65C18.9967 12.9233 19.3 11.22 19.58 9.54C19.9067 7.81333 20.1867 6.15667 20.42 4.57C20.7 2.93666 20.91 1.44333 21.05 0.0899959H31.69Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <blockquote
                            className="mt-8"
                            dangerouslySetInnerHTML={markdownify(item.content)}
                          />
                          <div className="mt-11 absolute bottom-5 flex items-center">
                            <div className="text-dark dark:text-white">
                              <ImageFallback
                                height={50}
                                width={50}
                                className="rounded-full border-2 border-gray-300"
                                src={item.avatar}
                                alt={item.name}
                              />
                            </div>
                            <div className="ml-4">
                              <h3
                                dangerouslySetInnerHTML={markdownify(item.name)}
                                className="h5 font-primary font-semibold"
                              />
                              <p
                                dangerouslySetInnerHTML={markdownify(
                                  item.designation,
                                )}
                                className="text-dark dark:text-white"
                              />
                            </div>
                          </div>
                        </div>
                    ),
                  )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;
