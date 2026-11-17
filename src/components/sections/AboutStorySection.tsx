"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Eye, MapPin, Sparkles, Target } from "lucide-react";
import { getWpMedia } from "@/lib/wp-media";
import { useSiteSettings } from "@/context/SiteSettingsContext";
import { siteData } from "@/data/siteData";

export function AboutStorySection() {
  const { t } = useLanguage();
  const { settings } = useSiteSettings();
  // Story, mission, vision and core values are authored in WordPress →
  // Site Settings → the "About - ..." tabs.
  const about = settings.about_content;

  const founders = [
    {
      name: settings.founders.siddharth.name || siteData.about.story.siddharth.name,
      role: {
        en: settings.founders.siddharth.role || "Co-Founder & Director",
        es: "Cofundador y Director"
      },
      location: {
        en: "Valencia, Spain",
        es: "Valencia, España"
      },
      image: settings.founders.siddharth.image || getWpMedia("/images/team/siddharth-thakker.jpg"),
      alt: "Siddharth Thakker Co-Founder and Director Worldwide Supply 28 SL",
    },
    {
      name: settings.founders.sakina.name || siteData.about.story.sakina.name,
      role: {
        en: settings.founders.sakina.role || "Co-Founder & Director",
        es: "Cofundadora y Directora"
      },
      location: {
        en: "Valencia, Spain",
        es: "Valencia, España"
      },
      image: settings.founders.sakina.image || getWpMedia("/images/team/sakina-idmouhine.jpg"),
      alt: "Sakina Idmouhine Co-Founder and Director Worldwide Supply 28 SL",
    },
  ];

  return (
    <section className="bg-white py-14 text-[#071321] sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00A884]/20 bg-[#00A884]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00A884]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t("Executive Leadership", "Liderazgo Ejecutivo")}</span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#071321] sm:text-5xl">
            {t("Meet Our Founders & Directors", "Conozca a Nuestros Fundadores y Directores")}
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {t(
              "Complementary expertise in luxury wholesale, duty-free distribution, perfumery, cosmetics, and logistics.",
              "Experiencia complementaria en mayorista de lujo, distribucion duty-free, perfumeria, cosmetica y logistica."
            )}
          </p>
        </div>

        <div className="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-8 sm:mb-20 md:grid-cols-2">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:border-[#00A884] hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                <Image
                  src={founder.image}
                  alt={founder.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-6">
                  <span className="inline-block rounded-full bg-[#00A884] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    {t(founder.role.en, founder.role.es)}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-[#071321] sm:text-3xl">
                  {founder.name}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-[#00A884]" />
                  <span>{t(founder.location.en, founder.location.es)}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Company story heading and lead-in */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h3 className="text-3xl font-semibold tracking-tight text-[#071321] sm:text-4xl">
            {t(about.story.title.en, about.story.title.es)}
          </h3>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {t(about.story.intro.en, about.story.intro.es)}
          </p>
        </div>

        {/* Shared Culture & Vision Card on Light Background */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12 mb-20 shadow-sm relative overflow-hidden">
          <div className="max-w-4xl space-y-4 relative z-10">
            <span className="text-xs font-bold text-[#00A884] uppercase tracking-wider block">
              {t("Shared Philosophy & Culture", "Filosofía y Cultura Compartida")}
            </span>
            <p className="text-base sm:text-xl font-semibold leading-relaxed text-[#071321]">
              &quot;{t(about.story.together.en, about.story.together.es)}&quot;
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#00A884] pt-2">
              {t(about.story.family.en, about.story.family.es)}
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#00A884] sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A884]/10 text-[#00A884]">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-[#071321]">
              {t(about.mission.title.en, about.mission.title.es)}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {t(about.mission.desc.en, about.mission.desc.es)}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#00A884] sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071321] text-white">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-[#071321]">
              {t(about.vision.title.en, about.vision.title.es)}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {t(about.vision.desc.en, about.vision.desc.es)}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h3 className="text-3xl font-semibold text-[#071321]">
              {t("Our Core Values", "Nuestros Valores Fundamentales")}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {about.core_values.map((val, idx) => (
              <div
                key={val.title.en}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:border-[#00A884] hover:shadow-md"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#00A884]/10 text-sm font-bold text-[#00A884]">
                  0{idx + 1}
                </div>
                <h4 className="mt-4 text-base font-bold text-[#071321]">
                  {t(val.title.en, val.title.es)}
                </h4>
                <p className="mt-2 text-xs leading-6 text-slate-600">
                  {t(val.desc.en, val.desc.es)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
