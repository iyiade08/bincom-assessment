import { ArrowUpRight, Download } from "lucide-react";
import herobanner from "../assets/Allo Iyiade (4 of 5).jpg";
import resume from "../assets/Allo_Iyiade_Resume.pdf";
import Button from "../component/Button";

const Hero = () => {
  return (
    <section className="bg-[#0f1a15] text-[#f3efe6] font-sans pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-16 items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          {/* eyebrow */}
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#5cc08f]">
            <span className="w-2 h-2 rounded-full bg-[#5cc08f]" />
            <span>Personal Portfolio</span>
            <span className="opacity-50">/</span>
            <span>Lagos, Nigeria</span>
          </div>

          {/* name */}
          <h1 className="font-serif font-bold leading-[0.95] text-5xl sm:text-6xl md:text-7xl">
            Allo Iyiade <br /> Tobiloba
            <span className="text-[#5cc08f]">.</span>
          </h1>

          <p className="text-lg text-[#f3efe6]/70">
            Mobile Engineer | React Native & Full-Stack Developer
          </p>

          <h2 className="font-serif font-bold text-2xl md:text-3xl leading-snug">
            React Native and full-stack developer building end to end.
          </h2>

          <p className="text-sm md:text-base text-[#f3efe6]/70 max-w-xl leading-relaxed">
            3+ years across React Native, React, Next.js, and Django. Currently
            building onboarding, authentication, and multi-step loan flows for
            Zekarium’s fintech app, and a complaints module for Bizedge.
          </p>

          {/* buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#5cc08f] text-[#0f1a15] px-6 py-3 text-sm font-medium hover:brightness-110 transition"
            >
              View my work <ArrowUpRight size={16} />
            </a>
            <a
              href={resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-[#f3efe6]/25 px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
            >
              Download CV <Download size={16} />
            </a>
          </div>

          {/* tagline */}
          <div className="flex items-center gap-3 text-xs text-[#5cc08f] mt-4">
            <span className="w-8 h-px bg-[#5cc08f]" />
            <span>Thoughtfully made. Open to what’s next.</span>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#1f3d30]">
            <img
              src={herobanner}
              alt="Allo Iyiade Tobiloba"
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a15]/80 via-transparent to-transparent" />
            <span className="absolute top-5 left-5 text-[11px] tracking-wider">
              01 / 05
            </span>
            <div className="absolute bottom-5 left-5">
              <p className="font-serif font-bold text-2xl">Allo Iyiade</p>
              <p className="text-[11px] opacity-80">Mobile Engineer</p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 mt-4 text-[11px] text-[#f3efe6]/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5cc08f]" />
            Lagos, Nigeria
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
