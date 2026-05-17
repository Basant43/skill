const careerForm = document.querySelector("#careerForm");
const careerSelect = document.querySelector("#career");
const careerTitle = document.querySelector("#careerTitle");
const demandBadge = document.querySelector("#demandBadge");
const salaryLabel = document.querySelector("#salaryLabel");
const salaryRange = document.querySelector("#salaryRange");
const salaryNote = document.querySelector("#salaryNote");
const mustSkills = document.querySelector("#mustSkills");
const gapSkills = document.querySelector("#gapSkills");
const roadmapTitle = document.querySelector("#roadmapTitle");
const roadmap = document.querySelector("#roadmap");
const projects = document.querySelector("#projects");
const radarScore = document.querySelector("#radarScore");
const detailTitle = document.querySelector("#detailTitle");
const detailIntro = document.querySelector("#detailIntro");
const detailDemand = document.querySelector("#detailDemand");
const detailSalary = document.querySelector("#detailSalary");
const detailRegion = document.querySelector("#detailRegion");
const regionAdvice = document.querySelector("#regionAdvice");
const detailRoadmapTitle = document.querySelector("#detailRoadmapTitle");
const mainGap = document.querySelector("#mainGap");
const solutions = document.querySelector("#solutions");
const doList = document.querySelector("#doList");
const avoidList = document.querySelector("#avoidList");
const aiList = document.querySelector("#aiList");
const toolsList = document.querySelector("#toolsList");
const earnList = document.querySelector("#earnList");
const opportunityList = document.querySelector("#opportunityList");
const avoidSkillList = document.querySelector("#avoidSkillList");
const alternativesList = document.querySelector("#alternativesList");
const assistantToggle = document.querySelector("#assistantToggle");
const assistantPanel = document.querySelector("#assistantPanel");
const assistantClose = document.querySelector("#assistantClose");
const assistantMessages = document.querySelector("#assistantMessages");
const assistantForm = document.querySelector("#assistantForm");
const assistantInput = document.querySelector("#assistantInput");

const regionData = {
  india: {
    label: "India",
    prefix: "India salary direction",
    advice: "Focus on practical proof, communication, portfolio quality, and local industry expectations."
  },
  globalRemote: {
    label: "Global remote",
    prefix: "Remote earning direction",
    advice: "Remote work rewards proof of independent execution, async communication, documentation, and measurable outcomes."
  },
  usa: {
    label: "United States",
    prefix: "US salary direction",
    advice: "US-facing roles reward measurable impact, strong case studies, collaboration, and compliance awareness."
  },
  uk: {
    label: "United Kingdom",
    prefix: "UK salary direction",
    advice: "UK roles often value structured portfolios, clear communication, safety/compliance awareness, and professional documentation."
  },
  canada: {
    label: "Canada",
    prefix: "Canada salary direction",
    advice: "Canada-focused applications should show real projects, teamwork, practical tools, and role-specific communication."
  },
  uae: {
    label: "UAE",
    prefix: "UAE salary direction",
    advice: "UAE opportunities often reward polished presentation, client-facing confidence, premium delivery, and business awareness."
  }
};

const sectorProfiles = {
  trades: {
    sector: "Trades & Services",
    demand: "Stable practical demand",
    score: "83%",
    salary: {
      india: "INR 2L - 8L",
      globalRemote: "Remote limited; local contracts or consulting",
      usa: "USD 38k - 85k",
      uk: "GBP 24k - 55k",
      canada: "CAD 42k - 90k",
      uae: "AED 36k - 130k"
    },
    must: ["Hands-on execution", "Safety standards", "Client communication", "Time estimation", "Tool maintenance"],
    gaps: ["Digital booking", "Quote writing", "Customer reviews", "Upselling maintenance plans"],
    tools: ["WhatsApp Business", "Google Business Profile", "Booking forms", "Digital invoicing", "Basic CRM"],
    ai: ["Use AI for quotes, checklists, customer messages, training refreshers, and maintenance documentation."],
    earn: ["Full-time job", "Local service business", "Maintenance contracts", "Emergency calls", "Training apprentices"],
    opportunity: ["Freelance is strong locally; remote is mostly consulting, teaching, estimates, or operations support."],
    avoid: ["Ignoring safety", "Poor punctuality", "No written quote", "No reviews", "Depending only on word-of-mouth"],
    avoidSkills: ["Outdated manual-only marketing", "No digital payments", "No customer record keeping"],
    alternatives: ["Facility management", "Service operations", "Technical sales", "Training instructor"]
  },
  engineering: {
    sector: "Engineering & Architecture",
    demand: "Specialized technical demand",
    score: "86%",
    salary: {
      india: "INR 3L - 18L",
      globalRemote: "USD 10k - 80k",
      usa: "USD 65k - 140k",
      uk: "GBP 32k - 80k",
      canada: "CAD 60k - 120k",
      uae: "AED 72k - 240k"
    },
    must: ["Core engineering fundamentals", "CAD/simulation", "Documentation", "Safety and compliance", "Project coordination"],
    gaps: ["Real project portfolio", "Modern software stack", "Sustainability thinking", "Cross-functional communication"],
    tools: ["AutoCAD", "SolidWorks", "Revit", "MATLAB", "Ansys", "Project management tools"],
    ai: ["AI is improving design exploration, simulation support, documentation, and optimization, but fundamentals remain critical."],
    earn: ["Full-time engineering roles", "Design consulting", "CAD freelancing", "Technical documentation", "Project supervision"],
    opportunity: ["Remote possible for CAD, modeling, documentation, analysis, and consulting; site roles remain location-based."],
    avoid: ["Only theory without projects", "Ignoring standards", "Weak documentation", "No software proof", "Copying designs blindly"],
    avoidSkills: ["Old software-only dependency", "No simulation awareness", "No sustainability awareness"],
    alternatives: ["Product design", "Project management", "Technical sales", "Operations", "Quality assurance"]
  },
  business: {
    sector: "Business, Finance & Legal",
    demand: "High trust and compliance demand",
    score: "85%",
    salary: {
      india: "INR 3L - 25L",
      globalRemote: "USD 12k - 100k",
      usa: "USD 55k - 180k",
      uk: "GBP 35k - 120k",
      canada: "CAD 55k - 150k",
      uae: "AED 72k - 300k"
    },
    must: ["Domain knowledge", "Compliance awareness", "Analytical thinking", "Communication", "Professional documentation"],
    gaps: ["Data tools", "AI research workflow", "Client presentation", "Business storytelling"],
    tools: ["Excel", "PowerPoint", "Notion", "CRM", "Power BI", "Legal/accounting databases"],
    ai: ["AI can speed research, summaries, reporting, and drafting, but expert review and ethics are essential."],
    earn: ["Corporate job", "Consulting", "Retainers", "Advisory services", "Training and templates"],
    opportunity: ["Remote work is strong for analysis, documentation, research, compliance support, and advisory services."],
    avoid: ["Generic advice", "No legal/accounting accuracy", "Poor confidentiality", "Weak presentation", "No business context"],
    avoidSkills: ["Manual-only reporting", "No data literacy", "No AI verification habit"],
    alternatives: ["Operations strategy", "Compliance tech", "Business analytics", "Risk management", "Founder support"]
  },
  creative: {
    sector: "Creative, Media & Arts",
    demand: "Portfolio-driven demand",
    score: "84%",
    salary: {
      india: "INR 2.4L - 12L",
      globalRemote: "USD 8k - 70k",
      usa: "USD 42k - 120k",
      uk: "GBP 24k - 70k",
      canada: "CAD 42k - 95k",
      uae: "AED 48k - 200k"
    },
    must: ["Portfolio proof", "Visual storytelling", "Client communication", "Tool fluency", "Concept development"],
    gaps: ["AI-assisted workflow", "Case-study writing", "Motion/content systems", "Business outcome thinking"],
    tools: ["Adobe Creative Cloud", "Figma", "Canva", "Blender", "DaVinci Resolve", "After Effects"],
    ai: ["AI is changing concepting, editing, copy, storyboarding, and production speed; taste and direction become more valuable."],
    earn: ["Job", "Freelance projects", "Retainers", "Templates", "Digital products", "Content services"],
    opportunity: ["Remote and freelance are strong when the portfolio is clear and niche-specific."],
    avoid: ["Only tool tutorials", "No case studies", "Generic portfolio", "Ignoring revisions", "No niche positioning"],
    avoidSkills: ["Outdated software-only identity", "No AI workflow", "No portfolio storytelling"],
    alternatives: ["Creative direction", "Brand strategy", "Content production", "UX/UI", "Marketing design"]
  },
  healthcare: {
    sector: "Healthcare & Life Sciences",
    demand: "Essential regulated demand",
    score: "88%",
    salary: {
      india: "INR 3L - 30L",
      globalRemote: "Remote limited; health tech, research, writing, telehealth support",
      usa: "USD 60k - 250k",
      uk: "GBP 30k - 130k",
      canada: "CAD 55k - 180k",
      uae: "AED 72k - 400k"
    },
    must: ["Clinical/scientific fundamentals", "Ethics", "Patient safety", "Documentation", "Continuous learning"],
    gaps: ["Digital health tools", "Research literacy", "Communication", "Data/privacy awareness"],
    tools: ["EHR systems", "Research databases", "Telehealth tools", "Lab software", "Clinical documentation tools"],
    ai: ["AI supports diagnosis assistance, research summaries, documentation, drug discovery, and triage, but human accountability remains vital."],
    earn: ["Clinical job", "Specialization", "Telehealth", "Research", "Medical writing", "Health tech consulting"],
    opportunity: ["Remote is possible in telehealth, medical writing, research support, health data, and education; regulated roles need licensing."],
    avoid: ["Ignoring ethics", "Unverified medical advice", "Weak documentation", "No licensing awareness", "Poor communication"],
    avoidSkills: ["No digital health literacy", "No evidence-based practice", "No data/privacy awareness"],
    alternatives: ["Health tech", "Medical education", "Clinical research", "Public health", "Healthcare operations"]
  },
  technology: {
    sector: "Technology & Computing",
    demand: "Fast-changing high demand",
    score: "90%",
    salary: {
      india: "INR 4L - 30L",
      globalRemote: "USD 15k - 140k",
      usa: "USD 75k - 220k",
      uk: "GBP 40k - 130k",
      canada: "CAD 70k - 170k",
      uae: "AED 90k - 320k"
    },
    must: ["Problem solving", "Modern tools", "Production projects", "Debugging", "Security and data awareness"],
    gaps: ["Real deployment", "System design", "AI workflow", "Testing", "Documentation"],
    tools: ["GitHub", "VS Code", "Cloud platforms", "APIs", "Databases", "AI coding tools"],
    ai: ["AI is accelerating coding, analysis, security, and automation; people who can verify and ship real systems gain advantage."],
    earn: ["Full-time job", "Freelance builds", "SaaS products", "Automation services", "Technical content", "Consulting"],
    opportunity: ["Remote and freelance are strong when projects are deployed, documented, and useful."],
    avoid: ["Tutorial-only learning", "No deployed projects", "Ignoring security", "No testing", "Blind AI-generated code"],
    avoidSkills: ["Outdated stack only", "No cloud/API literacy", "No AI verification skill"],
    alternatives: ["Product management", "DevOps", "Technical support", "Solutions engineering", "No-code automation"]
  }
};

const careerCatalog = [
  ["trades", "electrician", "Electrician"],
  ["trades", "plumber", "Plumber"],
  ["trades", "chef", "Chef"],
  ["trades", "hospitalityManager", "Hospitality Manager"],
  ["trades", "carpenter", "Carpenter"],
  ["trades", "welder", "Welder"],
  ["trades", "hvacTechnician", "HVAC Technician"],
  ["trades", "automotiveMechanic", "Automotive Mechanic"],
  ["trades", "beautyProfessional", "Beauty Professional"],
  ["trades", "eventManager", "Event Manager"],
  ["engineering", "civilEngineer", "Civil Engineer"],
  ["engineering", "mechanicalEngineer", "Mechanical Engineer"],
  ["engineering", "aerospaceEngineer", "Aerospace Engineer"],
  ["engineering", "roboticsEngineer", "Robotics Engineer"],
  ["engineering", "architect", "Architect"],
  ["engineering", "electricalEngineer", "Electrical Engineer"],
  ["engineering", "chemicalEngineer", "Chemical Engineer"],
  ["engineering", "industrialEngineer", "Industrial Engineer"],
  ["engineering", "interiorDesigner", "Interior Designer"],
  ["engineering", "urbanPlanner", "Urban Planner"],
  ["business", "charteredAccountant", "Chartered Accountant"],
  ["business", "investmentBanker", "Investment Banker"],
  ["business", "corporateLawyer", "Corporate Lawyer"],
  ["business", "hrManager", "HR Manager"],
  ["business", "businessAnalyst", "Business Analyst"],
  ["business", "financialPlanner", "Financial Planner"],
  ["business", "taxConsultant", "Tax Consultant"],
  ["business", "operationsManager", "Operations Manager"],
  ["business", "salesManager", "Sales Manager"],
  ["business", "entrepreneur", "Entrepreneur"],
  ["creative", "graphicDesigner", "Graphic Designer"],
  ["creative", "videoEditor", "Video Editor"],
  ["creative", "animator", "Animator"],
  ["creative", "writer", "Writer"],
  ["creative", "uiuxDesigner", "UI/UX Designer"],
  ["creative", "photographer", "Photographer"],
  ["creative", "motionDesigner", "Motion Designer"],
  ["creative", "productPackagingDesigner", "Product Packaging Designer"],
  ["creative", "gameArtist", "Game Artist"],
  ["creative", "creativeDirector", "Creative Director"],
  ["healthcare", "doctor", "Doctor"],
  ["healthcare", "nurse", "Nurse"],
  ["healthcare", "pharmacist", "Pharmacist"],
  ["healthcare", "biotechnologist", "Biotechnologist"],
  ["healthcare", "physiotherapist", "Physiotherapist"],
  ["healthcare", "dentist", "Dentist"],
  ["healthcare", "clinicalResearcher", "Clinical Researcher"],
  ["healthcare", "medicalWriter", "Medical Writer"],
  ["healthcare", "nutritionist", "Nutritionist"],
  ["healthcare", "publicHealthSpecialist", "Public Health Specialist"],
  ["technology", "aiEngineer", "AI Engineer"],
  ["technology", "softwareDeveloper", "Software Developer"],
  ["technology", "cybersecurityAnalyst", "Cybersecurity Analyst"],
  ["technology", "dataScientist", "Data Scientist"],
  ["technology", "frontendDeveloper", "Frontend Developer"],
  ["technology", "dataAnalyst", "Data Analyst"],
  ["technology", "cloudEngineer", "Cloud Engineer"],
  ["technology", "devopsEngineer", "DevOps Engineer"],
  ["technology", "productManager", "Product Manager"],
  ["technology", "aiAutomationSpecialist", "AI Automation Specialist"],
  ["technology", "digitalMarketer", "Digital Marketer"]
];

const careerOverrides = {
  doctor: {
    must: ["Medical degree and licensing", "Clinical reasoning", "Patient communication", "Ethics", "Emergency judgment"],
    gaps: ["Digital health literacy", "AI-assisted research", "Patient education content", "Telehealth workflow"],
    avoid: ["Unverified advice", "Ignoring licensing rules", "Poor patient communication", "Weak documentation"],
    tools: ["EHR systems", "Clinical guidelines", "Medical databases", "Telehealth platforms"],
    earn: ["Hospital practice", "Clinic", "Specialization", "Telehealth", "Medical education"],
    opportunity: ["Remote work depends on licensing; telehealth, second opinions, writing, and education are options."]
  },
  architect: {
    must: ["Design thinking", "Building codes", "Revit/CAD", "Site coordination", "Presentation"],
    gaps: ["BIM workflows", "Sustainable design", "Client storytelling", "AI rendering workflow"],
    tools: ["Revit", "AutoCAD", "SketchUp", "Rhino", "Lumion", "Enscape"],
    earn: ["Architecture firm", "Freelance drawings", "3D visualization", "Interior projects", "Design consulting"]
  },
  plumber: {
    must: ["Pipe systems", "Safety", "Leak diagnosis", "Installation", "Customer service"],
    gaps: ["Digital quotes", "Maintenance packages", "Google reviews", "Emergency service positioning"],
    earn: ["Service calls", "AMC contracts", "New construction", "Emergency repairs", "Local business"],
    opportunity: ["Freelance/local business potential is high; remote is limited to consulting and training."]
  },
  videoEditor: {
    must: ["Story pacing", "Audio cleanup", "Color basics", "Short-form editing", "Client revisions"],
    gaps: ["Motion graphics", "AI-assisted editing", "Retention editing", "Content strategy"],
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects", "CapCut", "Frame.io"],
    earn: ["Freelance edits", "Retainers", "YouTube packages", "Ad creatives", "Template packs"]
  },
  cybersecurityAnalyst: {
    must: ["Networking", "Linux basics", "Threat analysis", "SIEM tools", "Incident response"],
    gaps: ["Cloud security", "Automation scripting", "Report writing", "AI threat awareness"],
    tools: ["Wireshark", "Splunk", "Burp Suite", "Nmap", "Cloud security tools"],
    avoid: ["Only hacking tricks", "No ethics", "No documentation", "Ignoring fundamentals"]
  }
};

function makeCareerProfile([sectorKey, id, title]) {
  const base = sectorProfiles[sectorKey];
  const override = careerOverrides[id] || {};
  const lower = title.toLowerCase();
  return {
    id,
    sectorKey,
    sector: base.sector,
    title,
    demand: override.demand || base.demand,
    score: override.score || base.score,
    salary: override.salary || base.salary,
    note: override.note || `${title} demand depends on practical proof, current tools, communication, and the ability to solve real industry problems.`,
    must: override.must || [`Core ${lower} fundamentals`, ...base.must.slice(1, 5)],
    gaps: override.gaps || base.gaps,
    tools: override.tools || base.tools,
    ai: override.ai || base.ai,
    earn: override.earn || base.earn,
    opportunity: override.opportunity || base.opportunity,
    avoid: override.avoid || base.avoid,
    avoidSkills: override.avoidSkills || base.avoidSkills,
    alternatives: override.alternatives || base.alternatives,
    projects: override.projects || [
      [`${title} proof project`, `Create one realistic ${lower} project that shows process, decision-making, and final outcome.`],
      ["Industry case study", "Analyze a real market problem and explain how your work would solve it."],
      ["Client-ready presentation", "Package your work as a proposal, report, portfolio page, or demo that a buyer can understand quickly."]
    ],
    solutions: override.solutions || [
      ["Proof-first learning", "Build visible evidence of skill instead of collecting random certificates."],
      ["AI-assisted workflow", "Use AI to speed research, planning, documentation, and ideation while keeping human judgment in control."],
      ["Market positioning", "Choose a niche, show outcomes, and explain why your work is valuable to employers or clients."]
    ]
  };
}

const careerData = Object.fromEntries(careerCatalog.map((entry) => {
  const profile = makeCareerProfile(entry);
  return [profile.id, profile];
}));

const levelBoost = {
  beginner: "Foundation-first plan",
  intermediate: "Portfolio upgrade plan",
  advanced: "Market positioning plan"
};

function buildRoadmap(profile, level) {
  if (level === "beginner") {
    return [
      ["Weeks 1-2", `Learn the fundamentals of ${profile.title}: basic concepts, safety/ethics, tools, and industry vocabulary.`],
      ["Weeks 3-4", `Study 5 real job posts or client requirements and list the skills that appear repeatedly.`],
      ["Weeks 5-8", `Build one beginner proof project using ${profile.tools.slice(0, 3).join(", ")} where possible.`],
      ["Weeks 9-12", "Create a simple portfolio/resume section explaining your process, result, and next improvement."]
    ];
  }

  if (level === "advanced") {
    return [
      ["Weeks 1-2", `Choose a high-value niche inside ${profile.title} and define the type of client, employer, or problem you want to serve.`],
      ["Weeks 3-5", "Create an advanced project that shows strategy, execution, documentation, and measurable value."],
      ["Weeks 6-9", `Add AI-aware workflow, quality checks, and industry-standard tools: ${profile.tools.slice(0, 4).join(", ")}.`],
      ["Weeks 10-12", "Package your expertise into a premium job application, consulting offer, service page, or portfolio case study."]
    ];
  }

  return [
    ["Weeks 1-2", `Audit your current ${profile.title} skills against real job posts and identify weak proof areas.`],
    ["Weeks 3-5", "Build a practical case study that solves a real industry problem, not a classroom exercise."],
    ["Weeks 6-9", "Improve the project with better tools, documentation, AI-assisted productivity, and feedback from real people."],
    ["Weeks 10-12", "Publish the result as a portfolio piece and use it for applications, freelance outreach, or client conversations."]
  ];
}

function fillCareerSelect() {
  if (!careerSelect) {
    return;
  }

  careerSelect.innerHTML = "";
  Object.entries(sectorProfiles).forEach(([sectorKey, sector]) => {
    const group = document.createElement("optgroup");
    group.label = sector.sector;
    careerCatalog
      .filter(([careerSector]) => careerSector === sectorKey)
      .forEach(([, id, title]) => {
        const option = document.createElement("option");
        option.value = id;
        option.textContent = title;
        group.appendChild(option);
      });
    careerSelect.appendChild(group);
  });
  careerSelect.value = "graphicDesigner";
}

function fillList(target, items) {
  if (!target) {
    return;
  }
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function fillCards(target, items, cardClass) {
  if (!target) {
    return;
  }
  target.innerHTML = "";
  items.forEach(([label, text]) => {
    const card = document.createElement("article");
    const tag = document.createElement("span");
    const title = document.createElement("h3");
    const copy = document.createElement("p");

    card.className = cardClass;
    tag.textContent = label;
    title.textContent = label;
    copy.textContent = text;

    card.append(tag, title, copy);
    target.appendChild(card);
  });
}

function getGoalGap(goal) {
  return {
    firstJob: "Interview-ready proof and clear explanation",
    betterSalary: "Business impact proof and advanced tool confidence",
    freelance: "Client proposal, pricing confidence, and delivery process"
  }[goal] || "Career positioning";
}

function updateCareer() {
  if (!careerForm) {
    return;
  }

  const data = new FormData(careerForm);
  const selectedCareer = data.get("career") || "graphicDesigner";
  const level = data.get("level") || "intermediate";
  const region = data.get("region") || "india";
  const goal = data.get("goal") || "betterSalary";
  const profile = careerData[selectedCareer] || careerData.graphicDesigner;
  const selectedRegion = regionData[region] || regionData.india;

  careerTitle.textContent = profile.title;
  demandBadge.textContent = profile.demand;
  if (salaryLabel) {
    salaryLabel.textContent = selectedRegion.prefix;
  }
  salaryRange.textContent = profile.salary[region] || profile.salary.india;
  salaryNote.textContent = `${profile.note} ${selectedRegion.advice}`;
  radarScore.textContent = profile.score;
  if (roadmapTitle) {
    roadmapTitle.textContent = `${levelBoost[level]} for ${profile.title}`;
  }

  fillList(mustSkills, profile.must);
  fillList(gapSkills, [...profile.gaps, getGoalGap(goal)]);
  fillCards(roadmap, buildRoadmap(profile, level), "roadmap-card");
  fillCards(projects, profile.projects, "project-card");
}

fillCareerSelect();

if (careerForm) {
  careerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(careerForm);
    const params = new URLSearchParams({
      career: data.get("career") || "graphicDesigner",
      level: data.get("level") || "intermediate",
      region: data.get("region") || "india",
      goal: data.get("goal") || "betterSalary"
    });
    window.location.href = `career.html?${params.toString()}`;
  });

  careerForm.addEventListener("change", updateCareer);
  updateCareer();
}

function updateDetailPage() {
  if (!detailTitle) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const selectedCareer = params.get("career") || "graphicDesigner";
  const level = params.get("level") || "intermediate";
  const region = params.get("region") || "india";
  const goal = params.get("goal") || "betterSalary";
  const profile = careerData[selectedCareer] || careerData.graphicDesigner;
  const selectedRegion = regionData[region] || regionData.india;
  const goalLabel = {
    firstJob: "first job",
    betterSalary: "better salary",
    freelance: "freelance clients"
  };

  detailTitle.textContent = `${profile.title} roadmap`;
  detailIntro.textContent = `${levelBoost[level]} built for ${goalLabel[goal] || "career growth"} in ${selectedRegion.label}.`;
  detailDemand.textContent = profile.demand;
  detailSalary.textContent = `${profile.salary[region] || profile.salary.india}. ${profile.note}`;
  detailRegion.textContent = selectedRegion.label;
  regionAdvice.textContent = selectedRegion.advice;
  detailRoadmapTitle.textContent = `${profile.title}: next 90 days`;
  mainGap.textContent = profile.gaps[0];

  fillCards(roadmap, buildRoadmap(profile, level), "roadmap-card");
  fillCards(projects, profile.projects, "project-card");
  fillCards(solutions, profile.solutions, "solution-card");
  fillList(doList, profile.must);
  fillList(avoidList, profile.avoid);
  fillList(aiList, profile.ai);
  fillList(toolsList, profile.tools);
  fillList(earnList, profile.earn);
  fillList(opportunityList, [profile.opportunity]);
  fillList(avoidSkillList, profile.avoidSkills);
  fillList(alternativesList, profile.alternatives);
}

updateDetailPage();

function findCareerFromText(text) {
  const normalized = text.toLowerCase();
  return Object.values(careerData).find((career) => {
    return normalized.includes(career.title.toLowerCase()) || normalized.includes(career.id.toLowerCase());
  });
}

function currentCareerProfile() {
  if (careerForm) {
    const data = new FormData(careerForm);
    return careerData[data.get("career")] || careerData.graphicDesigner;
  }

  const params = new URLSearchParams(window.location.search);
  return careerData[params.get("career")] || careerData.graphicDesigner;
}

function assistantReply(question) {
  const text = question.toLowerCase();
  const profile = findCareerFromText(text) || currentCareerProfile();

  if (text.includes("earn") || text.includes("money") || text.includes("income") || text.includes("freelance")) {
    return `${profile.title} can earn through ${profile.earn.join(", ")}. Best first move: create one proof project, package it as a simple offer, and show how it saves time, improves quality, or creates business value.`;
  }

  if (text.includes("avoid") || text.includes("outdated") || text.includes("wrong")) {
    return `For ${profile.title}, avoid: ${profile.avoid.join(", ")}. Also avoid skills like ${profile.avoidSkills.join(", ")}. Do not learn randomly; learn what helps you produce proof.`;
  }

  if (text.includes("ai") || text.includes("automation") || text.includes("future")) {
    return `AI impact for ${profile.title}: ${profile.ai.join(" ")} Your advantage is not only using AI, but using it with judgment, quality control, and real industry context.`;
  }

  if (text.includes("roadmap") || text.includes("learn") || text.includes("beginner") || text.includes("advanced")) {
    const plan = buildRoadmap(profile, text.includes("advanced") ? "advanced" : text.includes("beginner") ? "beginner" : "intermediate");
    return `${profile.title} roadmap: ${plan.map(([step, action]) => `${step}: ${action}`).join(" ")}`;
  }

  if (text.includes("remote")) {
    return `${profile.title} remote/freelance signal: ${profile.opportunity} To improve your chance, show work samples, process, communication, and clear outcomes.`;
  }

  if (text.includes("choose") || text.includes("career")) {
    return `Choose a career by matching three things: your interest, market demand, and proof you can build in 30 days. If you are unsure, start with a practical field from the scanner, generate a roadmap, and build one proof project before deciding.`;
  }

  if (text.includes("report") || text.includes("paid")) {
    return `SkillGap AI can earn by selling career reports: skill gap map, roadmap, tools to learn, AI impact, earning paths, and portfolio projects. Start manually, charge low, learn what users ask, then automate later.`;
  }

  return `For ${profile.title}, focus on ${profile.must.slice(0, 3).join(", ")}. The biggest gaps are ${profile.gaps.slice(0, 3).join(", ")}. Build one real proof project and avoid random course learning without output.`;
}

function addAssistantMessage(message, type) {
  if (!assistantMessages) {
    return;
  }
  const bubble = document.createElement("div");
  bubble.className = `assistant-message ${type}`;
  bubble.textContent = message;
  assistantMessages.appendChild(bubble);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
}

if (assistantToggle && assistantPanel) {
  addAssistantMessage("Hi, I am your SkillGap Guide. Ask me what to learn, what to avoid, how AI affects a career, or how to earn from a skill.", "bot");

  assistantToggle.addEventListener("click", () => {
    assistantPanel.classList.toggle("open");
  });

  assistantClose.addEventListener("click", () => {
    assistantPanel.classList.remove("open");
  });

  document.querySelectorAll("[data-prompt]").forEach((button) => {
    button.addEventListener("click", () => {
      const prompt = button.dataset.prompt;
      addAssistantMessage(prompt, "user");
      addAssistantMessage(assistantReply(prompt), "bot");
    });
  });
}

if (assistantForm) {
  assistantForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = assistantInput.value.trim();
    if (!question) {
      return;
    }
    addAssistantMessage(question, "user");
    addAssistantMessage(assistantReply(question), "bot");
    assistantInput.value = "";
  });
}
