const Wheresection = () => {
  const trackRecords = [
    {
      role: "Frontend Development Intern",
      company: "Bizedge, Lagos",
      date: "08/2026-10/2026",
      dutyone:
        "Built the employee grievance and complaints module from scratch in React, Tailwind CSS, and React Router, covering HR views, filters, row actions, and complaint detail drawers.",
      dutyTwo:
        "Wired it to backend REST endpoints with a token-authenticated API layer, and used React Context for role-based routing so HR users and employees each see the right workflow.",
    },
    {
      role: "Mobile Engineer",
      company: "Zekarium mobile, Lagos",
      date: "05/2026 – Present",
      dutyone:
        "Built React Native and TypeScript features for the talent-backed financing app: onboarding, authentication, dashboard, and loan applications, supporting 150+ monthly users.",
      dutyTwo:
        "Developed the multi-step loan application flow, including ID and education verification, document upload, and review and submit, reducing manual review steps across an estimated 50+ applications a month.",
    },
    {
      role: "Backend Engineer",
      company: "1999 Ideas Concepts Innovations & Creations, Lagos",
      date: "06/2025 – 04/2026",
      dutyone:
        "Architected a Django REST Framework backend with Firebase Auth, validating ID tokens server-side before granting access to protected resources.",
      dutyTwo:
        "Modeled community membership with role and status-based permissions, and built filterable event APIs with RSVP endpoints.",
    },
  ];

  return (
    <section className=" text-[#f3efe6] font-sans pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14 md:gap-16">
        <div className="flex gap-2 items-center text-[#fff]">
          <span className="text-buttonGreen">02</span>
          <p className="text-lg md:text-xl tracking-normal leading-relaxed capitalize">
            where i've been
          </p>
        </div>
        <p className="text-[#fff] text-5xl md:text-6xl lg:text-7xl font-serif font-bold">
          A track record of making things better.
        </p>
        {trackRecords.map((t) => (
          <div key={t.id} className="flex w-full gap-16">
            <div className="max-w-[70%] w-full space-y-2 md:space-y-4">
              <p className="text-[#fff] font-semibold text-3xl md:text-5xl capitalize">
                {t.role}
              </p>
              <p className="text-buttonGreen text-xl md:text-2xl font-serif">
                {t.company}
              </p>
              <p className="text-lg md:text-xl">{t.dutyone}</p>
              <p className="text-lg md:text-xl">{t.dutyTwo}</p>
            </div>
            <div className="max-w-[30%] text-xl md:text-2xl w-full flex items-center">
              <p>Date: {t.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wheresection;
