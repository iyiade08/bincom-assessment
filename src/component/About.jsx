const About = () => {
  return (
    <section className="bg-sectionGreen border-t border-b border-t-[#f3efe6]/30 border-b-[#f3efe6]/30 text-[#f3efe6] font-sans pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto mt-[2rem] flex flex-col gap-6">
        <div className="flex gap-2">
          <span className="text-buttonGreen">01</span>
          <p className="capitalize text-xl tracking-normal">
            a little about me
          </p>
        </div>
        <h1 className="text-[#fff] font-bold text-5xl sm:text-6xl md:text-7xl leading-[0.95] font-serif">
          Good work starts with good questions.
        </h1>
        {/* last section that is divided into two */}
        <div className="flex flex-col md:flex-row gap-16 ">
          <div className="text-xl flex flex-col gap-14 md:gap-16 text-[#fff] md:max-w-[50%]">
            <p>
              I’m a mobile engineer and full-stack developer based in Lagos. I
              build with React Native, React, Next.js, and Django, and I like
              owning a feature from the Figma file to the API that powers it.
              Right now I’m building onboarding, authentication, and multi-step
              loan flows for Zekarium’s fintech app, and a complaints module for
              Bizedge.
            </p>
            <p>
              Before I write code, I want to know who it’s for, what can go
              wrong, and what “done” looks like. That habit comes from working
              across the stack, from designing Django REST backends with
              Firebase auth to shipping React Native screens that real
              applicants use every month. My background is in nutrition and
              biology education, and I came into software through full-stack
              training in 2026 and hands-on work since.
            </p>
          </div>
          <div className="md:max-w-[50%] w-full flex flex-col text-[#fff]">
            {/* first section */}
            <div className="flex justify-between px-2 border-t border-b border-t-[#f3efe6]/30 border-b-[#f3efe6]/30 py-4">
              <div className="flex gap-2 items-center">
                <span className="text-buttonGreen">01</span>
                <p className="text-lg md:text-xl capitalize leading-relaxed tracking-normal">
                  based in
                </p>
              </div>
              <p className="text-lg md:text-xl">Lagos Nigeria</p>
            </div>
            {/* second section */}
            <div className="flex justify-between px-2 border-t border-b border-t-[#f3efe6]/30 border-b-[#f3efe6]/30 py-4">
              <div className="flex gap-2 items-center">
                <span className="text-buttonGreen">02</span>
                <p className="text-lg md:text-xl capitalize leading-relaxed tracking-normal">
                  experience
                </p>
              </div>
              <p className="text-lg md:text-xl">3+ years</p>
            </div>
            {/* third section */}
            <div className="flex justify-between px-2 border-t border-b border-t-[#f3efe6]/30 border-b-[#f3efe6]/30 py-4">
              <div className="flex gap-2 items-center">
                <span className="text-buttonGreen">01</span>
                <p className="text-lg md:text-xl capitalize leading-relaxed tracking-normal">
                  languages
                </p>
              </div>
              <p className="text-lg md:text-xl">
                JavaScript, TypeScript, Python, <br /> React, django,
                react-native
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
