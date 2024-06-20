import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getActiveLanguages, getLanguageObj } from "@/lib/languageParser";
import { GoHorizontalRule,GoDotFill } from "react-icons/go";
import { getListPage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import path from "path";

const Participants = ({ params }: { params: { lang: string } }) => {
  const language = getLanguageObj(params.lang);
  const data: RegularPage = getListPage(
    path.join(language.contentDir, "participants/_index.md"),
  );
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="-mt-10 ">
              <div className="flex flex-row">
                {image && (
                  <ImageFallback
                    className="mb-6 mx-auto"
                    src={image}
                    width={220}
                    height={120}
                    alt={title}
                  />
                )}
                <ImageFallback
                    className="mb-6 mx-auto"
                    src="/assets/citizen.jpg"
                    width={350}
                    height={120}
                    alt={title}
                  />
                  <ImageFallback
                    className="mb-6 mx-auto"
                    src="/assets/hcm.jpg"
                    width={120}
                    height={120}
                    alt={title}
                  />
              </div>
              <div className="content">
                <MDXContent content={content} />
              </div>
              <div>
                <h5>Why should you participate?</h5>
                <ul className="mt-6">
                  <li className="relative mb-4 pl-6 flex flex-row">
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p>Enhance scientific English language skills.</p>
                  </li>
                  <li className="relative mb-4 pl-6 flex flex-row">
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p>Gain hands-on experience with lab experiments under the guidance of international instructors and lecturers who have graduated from abroad.</p>
                  </li>
                  <li className="relative mb-4 pl-6 flex flex-row">
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p>Receive a certificate of completion.</p>
                  </li>
                  <li className="relative mb-4 pl-6 flex flex-row">
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p>Financial support provided when attending on-site classes at Tan Tao University, covering reasonable costs for meals, accommodation, and transportation as follows.
                      <ul className="mt-5">
                        <li className="relative mb-2 pl-6 flex flex-row">
                          <GoDotFill className={"absolute left-0 top-1.5"} />
                          <p>Meal allowance: 120,000 VND per day</p>
                        </li>
                        <li className="relative mb-2 pl-6 flex flex-row">
                          <GoDotFill className={"absolute left-0 top-1.5"} />
                          <p>Accommodation allowance: 350,000 VND per day</p>
                        </li>
                        <li className="relative mb-2 pl-6 flex flex-row">
                          <GoDotFill className={"absolute left-0 top-1.5"} />
                          <p>Travel allowance: 1,000,000 VND per course</p>
                        </li>
                      </ul>
                    </p>
                  </li>
                  <p><b>Note: Specific support amounts may vary depending on individual circumstances</b></p>
                </ul>
              </div>
              <div className="mt-10">
                <h5>Who can participate?</h5>
                <ul className="mt-6">
                  <li className="relative mb-4 pl-6 flex flex-row">
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p>Be a Vietnamese citizen, aged 18 or older.</p>
                  </li>
                  <li className="relative mb-4 pl-6 flex flex-row">
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p>Students and teachers from HCMC and the Mekong Delta provinces of Vietnam.</p>
                  </li>
                  <li className="relative mb-4 pl-6 flex flex-row">
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p>Demonstrated interest in science and research in biology and environment.</p>
                  </li>
                  <li className="relative mb-4 pl-6 flex flex-row">
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p>Good communication and writing skills.</p>
                  </li>
                  <li className="relative mb-4 pl-6 flex flex-row">
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p>Understanding of scientific English (a plus).</p>
                  </li>
                  <li className="relative mb-4 pl-6 flex flex-row">
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p>Ability to work effectively in a team environment.</p>
                  </li>
                  <li className="relative mb-4 pl-6 flex flex-row">
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p>Commitment to following lab safety protocols.</p>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <h5>How to join us?</h5>
                <ul className="mt-6">
                  <li className="relative mb-4 pl-6 flex flex-row">
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p>Shortlisted applicants may be invited for a brief interview to discuss their skills and project expectations.</p>
                  </li>
                  <li className="relative mb-4 pl-6 flex flex-row">
                    <GoHorizontalRule className={"absolute left-0 top-1.5"} />
                    <p>30 successful applicants will be notified by the end of June, 2024.</p>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <h5>Form to register for the event</h5>
                <div className="flex flex-row items-center justify-center mt-5">
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeA1EVpjMKBMdf1uWTQ9mLL6izOn7tYhV9C4bPI4GjZp7eMWA/viewform?embedded=true" width="640" height="2951" >Đang tải…</iframe>
                </div>
              </div>
              <div className="mt-10">
                <h5>For inquiries and registration details, please contact us</h5>
                <div className="flex flex-col mt-5">
                  <span>Email: envirolish2024@gmail.com</span>
                  <span>Phone: 0763550172 (Mr. Thanh Dien)</span>
                  <span className="mt-1 italic">We look forward to your participation and contribution to this educational revolution. Thank you!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Participants;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export async function generateStaticParams() {
  return getActiveLanguages().map((language) => ({
    lang: language.languageCode,
  }));
}
