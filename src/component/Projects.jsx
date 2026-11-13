import { FaCode } from "react-icons/fa";

const Projects = () => {
  const selectedProjects = [
    {
      id: "01",
      title: "Bizedge Employee Grievance and Complaints Module",
      description:
        "A role-based complaints system where employees file issues and HR tracks them from submission to decision.",
      technologies: "React.js, Tailwind CSS, React Router, Figma",
      link: "https://griviances-bizedge.vercel.app/",
    },
    {
      id: "02",
      title: "BereaClone",
      description:
        "A social media mobile app where posts expire automatically after 24 hours.",
      technologies: "React Native, TypeScript, Supabase",
    },
    {
      id: "03",
      title: "CareConnect",
      description:
        "A full-stack clinic booking system with separate access for patients, doctors, and admins.",
      technologies:
        "Django, Python, PostgreSQL, Supabase, Django REST Framework",
      link: "https://careconnect-x4wt.onrender.com",
    },
  ];

  return (
    <section className=" bg-sectionGreen border-t border-b border-t-[#f3efe6]/30 border-b-[#f3efe6]/30 text-[#f3efe6] font-sans pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14 md:gap-16">
        <div className="flex gap-2 items-center text-[#fff]">
          <span className="text-buttonGreen">03</span>
          <p className="text-lg md:text-xl tracking-normal leading-relaxed capitalize">
            selected work
          </p>
        </div>
        <p className="text-[#fff] text-5xl md:text-6xl lg:text-7xl font-serif font-bold">
          A few things i've worked on.
        </p>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {selectedProjects.map((p) => (
            <div className="flex flex-col gap-8 md:gap-10 border border-[#698b04] p-4">
              <div className="flex w-full justify-between">
                <p>{p.id} / project</p>
                <FaCode w-4 h-4 className="text-[#698b04] md:w-8 h-8" />
              </div>
              <h1 className="font-serif font-bold text-[20px] md:text-3xl text-[#fff]">
                {p.title}
              </h1>
              <p className="text-lg md:text-xl text-[#fff]/50">
                {p.description}
              </p>
              <div className="flex gap-2 text-[#fff]/60 text-lg">
                <span className="text-[#fff] capitalize text-xl">
                  technologies:{" "}
                </span>
                {p.technologies}
              </div>
              <p>
                live demo:{" "}
                <a href={p.link} target="_blank" className="text-buttonGreen">
                  {p.link}
                </a>{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
