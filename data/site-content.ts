export type EditableService = {
  title: string;
  description: string;
  image: string;
};

export type EditableTeacher = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type EditableContact = {
  address: string;
  phone: string;
  email: string;
  telegram: string;
};

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type ProgramSchedule = {
  days: string;
  sessions: { time: string; label?: string }[];
};

export type Program = {
  id: "main" | "private" | "online";
  title: string;
  tagline: string;
  intro: string;
  highlights: string[];
  schedules: ProgramSchedule[];
  onlineCourses?: { title: string; teacher: string; time: string }[];
  fee: string;
};

export type SiteContent = {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutParagraphOne: string;
  aboutParagraphTwo: string;
  visionText: string;
  missionItems: string[];
  services: EditableService[];
  teachers: EditableTeacher[];
  contact: EditableContact;
  programsIntro: string;
  programs: Program[];
  gallery: GalleryPhoto[];
};

export const defaultSiteContent: SiteContent = {
  heroTitle: "Nurturing Learners, Building English Confidence",
  heroSubtitle:
    "Practical English for young learners, teens and adults in Hledan, Yangon — learn in our classrooms five days a week, in small private groups, or live on Zoom.",
  aboutTitle: "About FLC Education",
  aboutParagraphOne:
    "FLC Education is a student-centered language school that supports children, teenagers, and adults in reaching their English goals. We combine structured content, practical speaking tasks, and ongoing coaching to help every learner progress.",
  aboutParagraphTwo:
    "Our classes focus on communication, academic readiness, and confidence. With a caring teaching team and modern learning environment, we build strong foundations for future success.",
  visionText:
    "To be a trusted English education center that empowers learners with language skills for local and global opportunities.",
  missionItems: [
    "Deliver high-quality and practical English programs.",
    "Support every learner with caring teachers and active classes.",
    "Build confidence, communication skills, and lifelong learning habits.",
  ],
  services: [
    {
      title: "English for General Purpose",
      description:
        "Build confident daily communication through speaking, listening, and practical conversation activities.",
      image: "/images/english_for_general.jpg",
    },
    {
      title: "English for Academic",
      description:
        "Improve academic writing, reading, presentation skills, and exam readiness for school and university success.",
      image: "/images/english-for-academic.jpg",
    },
    {
      title: "English for Young Learner",
      description:
        "Fun and interactive lessons for children that develop vocabulary, pronunciation, and confidence from an early age.",
      image: "/images/english-for-young-learner.jpg",
    },
  ],
  teachers: [
    {
      name: "Saya Ye'",
      role: "General English Instructor",
      bio: "Focuses on real-life communication and helps learners become confident in speaking and listening.",
      image: "/images/sayarYe.jpg",
    },
    {
      name: "Saya Nyi Nyi",
      role: "Academic English Lecturer",
      bio: "Specializes in academic writing, critical reading, and exam preparation for high school and university students.",
      image: "/images/sayarNyiNyi.jpg",
    },
    {
      name: "Saya John Win",
      role: "Young Learner Teacher",
      bio: "Creates energetic classes with games and stories so children can enjoy learning English naturally.",
      image: "/images/default-profile.svg",
    },
  ],
  contact: {
    address: "No.18, U Tun Linn Chan St., Kamaryut, Hledan, Yangon, Myanmar",
    phone: "09 519 5131, 09 789 877 165",
    email: "flceducation92@gmail.com",
    telegram: "FLC Messenger",
  },
  programsIntro:
    "အင်္ဂလိပ်ဘာသာစကားကို ကျောင်းတက်နေရသလို အချိန်ပြည့်လေ့လာလေ့ကျင့်ချင်သူများအတွက် FLC Education မှ သင်တန်းအစီအစဉ်များကို အောက်ပါအတိုင်း တက်ရောက်နိုင်ပါသည်။",
  programs: [
    {
      id: "main",
      title: "Main Class",
      tagline: "Full-time English, 5 days a week",
      intro:
        "အတန်းတစ်တန်းကျောင်းအပ်ရုံဖြင့် Main-Class အတန်းများအားလုံး တက်ရောက်ခွင့်ရှိပြီး တစ်ပတ်လျှင် (၅) ရက် သင်ကြားပေးပါသည်။",
      highlights: [],
      schedules: [
        {
          days: "Monday, Tuesday & Wednesday",
          sessions: [
            { time: "8:00 – 9:30 a.m.", label: "Section 1 · A2: 4 Skills English" },
            { time: "9:30 – 11:00 a.m.", label: "Section 1 · A2+: General English" },
            { time: "12:00 – 1:30 p.m.", label: "Section 2 · B1: Multi-lesson English" },
            { time: "2:00 – 3:00 p.m.", label: "Section 3 · Reading-oriented Class" },
            { time: "3:00 – 4:15 p.m.", label: "Section 4 · Writing-oriented Class" },
          ],
        },
        {
          days: "Saturday & Sunday",
          sessions: [
            { time: "8:00 – 9:30 a.m.", label: "Section 5 · A2: 4 Skills English" },
            { time: "9:30 – 12:00 p.m.", label: "Section 6 · B1: Practical English & Reading" },
            { time: "1:00 – 2:30 p.m.", label: "Section 7 · B2: Audio-lingual English" },
          ],
        },
      ],
      fee: "80,000 MMK for 2 months, then 40,000 MMK per month",
    },
    {
      id: "private",
      title: "Private Group Coaching",
      tagline: "Small groups of 8 students or fewer",
      intro:
        "စာသင်ဝိုင်းသီးသန့်တန်းများဖြင့် သင်ကြားပေးနေပြီး Section တစ်ခုလျှင် အများဆုံး (၈) ဦးအထိသာ လက်ခံပါသည်။",
      highlights: [
        "Language Test စစ်ဆေးပြီးမှ ကိုက်ညီသော level ဖြင့် သင်ကြားပေးပါသည်။",
        "အတန်းတက်မှန်ပါက Certification of Completion ပေးအပ်ပါသည်။",
        "Speaking, Grammar, Reading, Writing တို့ကို အခြေခံမှစ၍ လေ့ကျင့်နိုင်ပါသည်။",
      ],
      schedules: [
        {
          days: "Mon / Tue / Wed",
          sessions: [
            { time: "9:30 – 11:00 a.m." },
            { time: "12:00 – 1:30 p.m." },
            { time: "3:00 – 4:30 p.m." },
          ],
        },
        {
          days: "Sat / Sun",
          sessions: [
            { time: "9:00 – 11:00 a.m." },
            { time: "1:00 – 3:00 p.m." },
            { time: "4:00 – 6:00 p.m." },
          ],
        },
      ],
      fee: "Entrance 10,000 MMK + 120,000 MMK for 2 months (books included)",
    },
    {
      id: "online",
      title: "Online Classes",
      tagline: "Live on Zoom, from anywhere",
      intro:
        "သင်တန်းကျောင်းသို့ မတက်ရောက်နိုင်သူများအတွက် Zoom Live Class ဖြင့် Online Classes တက်ရောက်နိုင်ပါသည်။",
      highlights: [
        "Class capacity: 40 students only.",
        "Recorded/covered lessons are shared in the Online English Group.",
      ],
      schedules: [],
      onlineCourses: [
        {
          title: "4 Skills English – Elementary",
          teacher: "Saya John Win",
          time: "Sat & Sun · 5:00 – 7:00 PM",
        },
        {
          title: "4 Skills English – Intermediate",
          teacher: "Saya Ye'",
          time: "Mon, Tue & Wed · 6:00 – 8:00 PM",
        },
        {
          title: "Essential Grammar & Composition",
          teacher: "Saya Nyi Nyi",
          time: "Thu & Fri · 6:00 – 8:00 PM",
        },
      ],
      fee: "1 class 80,000 MMK · 2 classes 140,000 MMK · 3 classes 200,000 MMK",
    },
  ],
  gallery: [
    {
      src: "/images/gallery/class-celebration.jpg",
      alt: "FLC students and teachers waving together in the classroom",
      caption: "One big FLC family",
    },
    {
      src: "/images/gallery/young-learners-celebration.jpg",
      alt: "Young learners making heart shapes with their hands",
      caption: "Young Learners",
    },
    {
      src: "/images/gallery/riverside-trip.jpg",
      alt: "Students cheering by the river on a school trip",
      caption: "Riverside day trip",
    },
    {
      src: "/images/gallery/classroom-activity.jpg",
      alt: "Students taking part in an active classroom game",
      caption: "Learning by doing",
    },
    {
      src: "/images/gallery/sports-day.jpg",
      alt: "Students posing together at a sports hall",
      caption: "Sports day",
    },
    {
      src: "/images/gallery/certificate-day.jpg",
      alt: "Students gathered for a certificate ceremony",
      caption: "Certificate day",
    },
    {
      src: "/images/gallery/excursion-trip.jpg",
      alt: "Large group of FLC students on an excursion",
      caption: "School excursion",
    },
    {
      src: "/images/gallery/young-learners-class.jpg",
      alt: "Young learners with their teacher in a bright classroom",
      caption: "Our youngest learners",
    },
    {
      src: "/images/gallery/outdoor-picnic.jpg",
      alt: "Students and teachers at an outdoor picnic",
      caption: "Outdoor picnic",
    },
    {
      src: "/images/gallery/speaking-game.jpg",
      alt: "Students lined up for a speaking game",
      caption: "Speaking games",
    },
    {
      src: "/images/gallery/badminton-club.jpg",
      alt: "Students with badminton rackets at a court",
      caption: "Badminton club",
    },
    {
      src: "/images/gallery/school-assembly.jpg",
      alt: "Students and teachers at a school assembly",
      caption: "School assembly",
    },
  ],
};
