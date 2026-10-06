export const profile = {
  name: "Mokhammad Dwi Nurkolis",
  role: "Android Engineer",
  location: "Kediri, East Java · studying in Yogyakarta, Indonesia",
  email: "kolisdestroyer29@gmail.com",
  linkedin: "https://www.linkedin.com/in/mokhammad-dwi-nurkolis",
  summary:
    "Android Engineer with 3+ years of experience developing production mobile applications, with a primary focus on Kotlin and native Android development. Experienced in enterprise Android solutions, mobile security assessment, reverse engineering, and Samsung Knox Manage. Also experienced in cross-platform development using Flutter.",
  currently:
    "Middle Mobile Developer at XYBER · Master of Informatics (Data Science) student at Universitas Islam Indonesia",
};

export const stats = [
  { value: "3+", label: "years building mobile apps" },
  { value: "3.76", label: "bachelor GPA (of 4.00)" },
  { value: "4", label: "certifications" },
];

export const experience = [
  {
    company: "XYBER",
    place: "Yogyakarta, Indonesia",
    title: "Middle Mobile Developer",
    period: "Nov 2023 – Present",
    points: [
      "Develop and maintain native Android applications using Kotlin and Android SDK, focusing on security, performance, and system stability.",
      "Implement Samsung Knox Manage for enterprise device security policies, application distribution, and device management.",
      "Conduct authorized Android application security assessments and reverse engineering to analyze application behavior, identify potential security weaknesses, and understand application logic.",
      "Develop a private enterprise communication application designed to protect user privacy and data integrity.",
      "Build a mobile survey and reporting application with centralized data, real-time reporting, and location-based reporting.",
      "Develop mobile solutions for vote counting and data aggregation, enabling structured and efficient result processing.",
      "Develop an internal HR management and employee monitoring application using Flutter.",
    ],
  },
  {
    company: "PT Days App Development",
    place: "Kediri, Indonesia",
    title: "Junior Mobile Developer",
    period: "Jun 2023 – Sep 2023",
    points: [
      "Developed a mobile cashier application using Flutter and Dart to support client operational workflows.",
      "Implemented core application features with a focus on clean code, performance, and application stability.",
    ],
  },
];

export const projects = [
  {
    year: "2026",
    name: "Android Security Research & Reverse Engineering",
    description:
      "Authorized Android application security research and reverse engineering to analyze application structure, application logic, data flow, security controls, and potential security weaknesses.",
    tags: ["Android", "Security", "Reverse Engineering"],
  },
  {
    year: "2025",
    name: "BroilerKu",
    description:
      "Flutter-based mobile application for broiler farm management, including daily feed recording, livestock monitoring, and automated FCR calculations.",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    year: "2024",
    name: "Fama Agent",
    description:
      "Android-based field reporting application for submitting text, image, and location-based reports to a centralized system.",
    tags: ["Kotlin", "Android", "REST API"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Kotlin", "Java", "Dart", "XML"] },
  { group: "Mobile", items: ["Android SDK", "Flutter", "Android Studio", "Samsung Knox Manage"] },
  { group: "Architecture", items: ["MVVM", "Clean Architecture", "Clean Code"] },
  {
    group: "Security",
    items: ["Android Security Assessment", "Reverse Engineering", "Application Logic Analysis"],
  },
  {
    group: "Backend & Tools",
    items: [
      "REST API",
      "Firebase Authentication",
      "Firestore",
      "Firebase Cloud Messaging",
      "Git",
      "GitHub",
      "GitLab",
    ],
  },
];

export const education = [
  {
    school: "Universitas Islam Indonesia",
    place: "Yogyakarta, Indonesia",
    degree: "Master of Informatics – Data Science",
    period: "Sep 2026 – Sep 2028 (Expected)",
    note: "",
  },
  {
    school: "Universitas Teknologi Digital Indonesia",
    place: "Yogyakarta, Indonesia",
    degree: "Bachelor of Informatics",
    period: "Sep 2024 – Feb 2026",
    note: "GPA 3.76 / 4.00",
  },
  {
    school: "Politeknik Negeri Malang",
    place: "East Java, Indonesia",
    degree: "Associate Degree in Informatics Management",
    period: "Aug 2021 – Aug 2023",
    note: "GPA 3.82 / 4.00",
  },
];

export const achievements = [
  { year: "2026", name: "IBM iOS and Android Mobile App Developer" },
  { year: "2026", name: "Developing Mobile Apps with Flutter Specialization" },
  { year: "2023", name: "Samsung Knox Manage Certificate" },
  { year: "2023", name: "Certificate of Competence in Information Technology (BNSP)" },
];

export const organisation = {
  name: "UKM MIMPI Polinema",
  place: "Kediri, East Java",
  role: "Event Coordinator",
  points: [
    "Led an organizational recruitment program involving 50+ participants, managing planning, execution, and budget.",
    "Increased new member recruitment by 10% compared with the previous year.",
  ],
};
