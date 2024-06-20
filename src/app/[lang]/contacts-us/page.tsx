import Breadcrumbs from "@/components/Breadcrumbs";
import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import {
  getActiveLanguages,
  getLanguageObj,
  getTranslations,
} from "@/lib/languageParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import path from "path";

const Contact = async ({ params }: { params: { lang: string } }) => {
  const language = getLanguageObj(params.lang);
  const data: RegularPage = getListPage(
    path.join(language.contentDir, "contacts-us/_index.md"),
  );
  //const content = await getTranslations(params.lang);
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;
  // const { contact_form_action } = config.params;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section-sm container">
        <h5>Please contact us through following information:</h5>
        <div className="flex flex-col mt-5">
          <span>Email: envirolish2024@gmail.com</span>
          <span>Phone: 0763550172 (Mr. Thanh Dien)</span>
          <span>Address: Tân Đức, Đức Hòa, E.City Đức Hòa Long An, Vietnam</span>
        </div>
        <div className="flex flex-row items-center justify-center mt-20">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d250831.98977108847!2d106.442104!3d10.792167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ad3f703fc2821%3A0xd03984a57f051ab8!2sTan%20Tao%20University!5e0!3m2!1sen!2sus!4v1718896459687!5m2!1sen!2sus" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export async function generateStaticParams() {
  return getActiveLanguages().map((language) => ({
    lang: language.languageCode,
  }));
}
