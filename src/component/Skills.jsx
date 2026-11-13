const Skills = () => {
  const selectedSkills = [
    {
      id: "01",
      tag: "Languages",
      languages: "JavaScript, TypeScript, Python, HTML, CSS",
    },
    {
      id: "02",
      tag: "Frameworks",
      languages:
        "React Native, React.js, Next.js, Django, Django REST Framework, Tailwind CSS",
    },
    {
      id: "03",
      tag: "Cloud / DevOps",
      languages: "Vercel, Render, Supabase, Firebase Auth",
    },
    {
      id: "04",
      tag: "Tools",
      languages: "Git, GitHub, Figma, Zustand, Axios, Android SDK",
    },
    {
      id: "05",
      tag: "Soft skills",
      languages:
        "Cross-team collaboration,End-to-end ownership, Troubleshooting, Translating designs into working UI",
    },
  ];
  return (
    <section className=" text-[#f3efe6] font-sans pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex gap-2 items-center text-[#fff]">
          <span className="text-buttonGreen">04</span>
          <p className="text-lg md:text-xl tracking-normal leading-relaxed capitalize">
            what i bring
          </p>
        </div>
        <p className="text-[#fff] text-5xl md:text-6xl lg:text-7xl font-serif font-bold">
          skills, built through practice
        </p>
        {/* list section */}
        <div className="flex flex-col gap-4 md:gap-6">
          {selectedSkills.map((s) => (
            <div
              key={s.id}
              className={`flex border-t border-t-[#f3efe6]  py-4 `}
            >
              <div className="flex gap-2 max-w-[40%] w-full items-center">
                <span className="text-buttonGreen">{s.id}</span>
                <p className="text-xl md:text-2xl capitalize">{s.tag}</p>
              </div>
              <div className="max-w-[60%] w-full">
                <p className="text-lg md:text-xl"> {s.languages}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// ${index === 4 ? "border-b border-b-[#f3efe6]" : ""}
