(() => {
  const projectArtwork = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 650">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#182018"/><stop offset="1" stop-color="#101512"/></linearGradient>
      <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#c9f27a"/><stop offset="1" stop-color="#82bd92"/></linearGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="55"/></filter>
    </defs>
    <rect width="1200" height="650" fill="url(#bg)"/>
    <circle cx="850" cy="170" r="165" fill="#87b957" opacity=".12" filter="url(#blur)"/>
    <g fill="none" stroke="#d7e1ce" opacity=".09"><path d="M0 470H1200M0 520H1200M0 570H1200"/><path d="M620 0V650M720 0V650M820 0V650M920 0V650"/></g>
    <rect x="142" y="101" width="917" height="448" rx="18" fill="#141a15" stroke="#435140"/>
    <path d="M160 102h882a18 18 0 0 1 18 18v38H142v-38a18 18 0 0 1 18-18" fill="#1d251e"/>
    <circle cx="172" cy="133" r="5" fill="#c9f27a"/><circle cx="190" cy="133" r="5" fill="#61705e"/><circle cx="208" cy="133" r="5" fill="#61705e"/>
    <text x="177" y="194" fill="#a5ad9e" font-family="Arial,sans-serif" font-size="12" letter-spacing="3">SMART SCHEDULER</text>
    <text x="177" y="242" fill="#f1f3eb" font-family="Arial,sans-serif" font-size="30" font-weight="600">Plan with clarity.</text>
    <text x="177" y="269" fill="#969f91" font-family="Arial,sans-serif" font-size="13">Your priorities, organized in one place.</text>
    <rect x="177" y="301" width="320" height="66" rx="8" fill="#202820" stroke="#354235"/>
    <circle cx="202" cy="334" r="8" fill="url(#glow)"/><text x="223" y="330" fill="#ebeee5" font-family="Arial,sans-serif" font-size="13">Review project milestones</text><text x="223" y="349" fill="#929d8b" font-family="Arial,sans-serif" font-size="10">TODAY · HIGH PRIORITY</text>
    <rect x="177" y="382" width="320" height="66" rx="8" fill="#1c231d" stroke="#303b30"/>
    <circle cx="202" cy="415" r="8" fill="#647b51"/><text x="223" y="411" fill="#d5dacd" font-family="Arial,sans-serif" font-size="13">Prepare weekly schedule</text><text x="223" y="430" fill="#929d8b" font-family="Arial,sans-serif" font-size="10">TOMORROW · MEDIUM PRIORITY</text>
    <rect x="523" y="192" width="486" height="288" rx="12" fill="#1a211b" stroke="#354235"/>
    <text x="550" y="228" fill="#e9ede3" font-family="Arial,sans-serif" font-size="14" font-weight="600">Your focus this week</text>
    <text x="550" y="250" fill="#929d8b" font-family="Arial,sans-serif" font-size="10">TASKS COMPLETED</text>
    <rect x="550" y="274" width="425" height="7" rx="4" fill="#30392e"/><rect x="550" y="274" width="268" height="7" rx="4" fill="url(#glow)"/>
    <g fill="#c3ccbb"><text x="550" y="316" font-family="Arial,sans-serif" font-size="11">Mon</text><text x="621" y="316" font-family="Arial,sans-serif" font-size="11">Tue</text><text x="692" y="316" font-family="Arial,sans-serif" font-size="11">Wed</text><text x="763" y="316" font-family="Arial,sans-serif" font-size="11">Thu</text><text x="834" y="316" font-family="Arial,sans-serif" font-size="11">Fri</text><text x="905" y="316" font-family="Arial,sans-serif" font-size="11">Sat</text><text x="976" y="316" font-family="Arial,sans-serif" font-size="11">Sun</text></g>
    <g fill="url(#glow)"><rect x="553" y="359" width="35" height="70" rx="4" opacity=".72"/><rect x="624" y="339" width="35" height="90" rx="4" opacity=".86"/><rect x="695" y="373" width="35" height="56" rx="4" opacity=".65"/><rect x="766" y="326" width="35" height="103" rx="4"/><rect x="837" y="351" width="35" height="78" rx="4" opacity=".75"/><rect x="908" y="383" width="35" height="46" rx="4" opacity=".5"/><rect x="979" y="395" width="10" height="34" rx="4" opacity=".34"/></g>
    <text x="177" y="501" fill="#808b7c" font-family="Arial,sans-serif" font-size="10" letter-spacing="2">FOCUS MORE ON WHAT MATTERS</text>
  </svg>`;

  window.PORTFOLIO_PROJECTS = [
    {
      name: "Smart Scheduler AI",
      description: "An AI-powered task scheduling and prioritization application designed to help users organize tasks, manage priorities, and improve productivity.",
      image:"scheduler.png",
      imageAlt: "A dark task-planning dashboard with a weekly focus chart",
      technologies: ["Python", "Node.js", "TypeScript", "Flask"],
      githubUrl: "https://github.com/maidheen-tech/Smart_Scheduler_AI",
      liveUrl: "",
      status: "FEATURED PROJECT"
    },
    {
    name: "HireSphere",
    description: "A modern full-stack job recruitment platform that connects job seekers with recruiters, featuring job listings, applications, candidate management, recruiter dashboards, and recruitment tracking.",

    image: "hiresphere.png",
    imageAlt: "HireSphere premium job recruitment platform dashboard",

    technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Flask",
        "SQL"
    ],

    githubUrl: "https://github.com/maidheen-tech/HireSphere",
    liveUrl: "",

    status: "FEATURED PROJECT"
    },
    {
    name: "EstatePro",
    description: "EstatePro is a modern real estate management platform designed to simplify property discovery, listing management, property searches, and buyer-seller interactions through an intuitive and responsive interface.",

    image: "estatepro.png",
    imageAlt: "EstatePro modern real estate property management dashboard",

    technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Java",
        "SQL",
        "Spring Boot"
    ],

    githubUrl: "https://github.com/maidheen-tech/EstatePro",
    liveUrl: "",

    status: "FEATURED PROJECT"
    },
    {
      name: "Coming soon",
      description: "More ideas, experiments, and practical projects are on the way.",
      image: "",
      imageAlt: "",
      technologies: [],
      githubUrl: "",
      liveUrl: "",
      status: "UP NEXT",
      comingSoon: true
    }
  ];
})();
