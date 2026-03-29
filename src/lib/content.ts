// ─── Site metadata ────────────────────────────────────────────────────────────
export const SITE = {
  name: "COSMOS UK",
  fullName: "The Council of Sri Lankan Muslim Organisations UK",
  tagline: "The Council of Sri Lankan Muslim Organisations",// "Sri Lankan Muslim Organisations",
  established: "Established 2014 · United Kingdom",
  memberCount: "26",
  yearsOfService: "10+",
  nationsRepresented: "3",
  copyright: "© 2026 COSMOS UK · All rights reserved",
  copyrightShort: "© 2026 COSMOS UK",
  registered: "Registered in England & Wales",
  logoLetter: "C",
  footerBlurb:
    "An umbrella body representing 26 Sri Lankan Muslim social and religious community organisations across the United Kingdom.",
} as const;

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV = {
  home: "Home",
  press: "Press releases",
  about: "About",
  donate: "Support",
} as const;

// ─── Footer links ─────────────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  pages: {
    heading: "Pages",
    items: [
      { label: "Home", href: "/" },
      { label: "Press releases", href: "/press" },
      { label: "About", href: "/about" },
    ],
  },
  community: {
    heading: "Community",
    items: [
      { label: "Donate", href: "#" },
      { label: "Contact us", href: "#" },
      { label: "Member organisations", href: "#" },
    ],
  },
} as const;

// ─── Home page ────────────────────────────────────────────────────────────────
export const HOME = {
  ticker: {
    label: "Latest",
    text: "Sri Lanka Flood Emergency Appeal – SLMCC UK & COSMOS UK · November 2025",
  },

  hero: {
    eyebrow: "Established 2014 · United Kingdom",
    heading: "Uniting Sri Lankan Muslim Communities Across the UK",
    body: "COSMOS UK is the national umbrella body representing 26 Sri Lankan Muslim organisations – advocating, connecting and supporting our community at home and abroad.",
    ctaPrimary: "About COSMOS UK",
    ctaSecondary: "Latest news",
    stats: [
      { number: "26", label: "Member orgs" },
      { number: "10+", label: "Years of service" },
      { number: "UK", label: "National reach" },
    ],
  },

  latestNews: {
    eyebrow: "Recent updates",
    title: "Latest from COSMOS UK",
    subtitle: "Statements, events and news from the Executive Committee.",
    viewAllCta: "View all press releases →",
    items: [
      {
        category: "Emergency appeal",
        date: "30 November 2025",
        title: "Sri Lanka Flood Emergency Appeal",
      },
      {
        category: "Commemoration",
        date: "3 June 2025",
        title: "16th Anniversary of End of Sri Lanka's Civil War",
      },
      {
        category: "AGM",
        date: "5 December 2024",
        title: "COSMOS UK 10th Annual General Meeting",
      },
    ],
  },

  who: {
    eyebrow: "Who we are",
    heading: "A national voice for Sri Lankan Muslims in Britain",
    body: "COSMOS UK was founded in 2014 as the umbrella council for Sri Lankan Muslim social and religious organisations across the United Kingdom. We advocate at national level, coordinate relief efforts, and build lasting bridges within our diaspora community.",
    pillars: [
      {
        title: "Advocacy",
        body: "Representing our community's voice in Parliament and UK institutions.",
      },
      {
        title: "Relief",
        body: "Coordinating humanitarian aid for communities in Sri Lanka during crises.",
      },
      {
        title: "Unity",
        body: "Connecting 26 member organisations across England, Wales and Scotland.",
      },
    ],
  },
} as const;

// ─── Press releases page ──────────────────────────────────────────────────────
export const PRESS = {
  eyebrow: "COSMOS UK",
  heading: "Press releases",
  subtitle: "Official statements and announcements from the Executive Committee.",
  items: [
    {
      day: "30",
      month: "Nov '25",
      category: "Emergency appeal",
      title: "SLMCC UK & COSMOS UK – Sri Lanka Flood Emergency Appeal",
    },
    {
      day: "29",
      month: "Nov '25",
      category: "Community update",
      title: "COSMOS UK Update – Flood Emergency Meeting at SLMCC Harrow",
    },
    {
      day: "03",
      month: "Jun '25",
      category: "Commemoration",
      title: "16th Anniversary of the End of Sri Lanka's 30-Year Civil War",
    },
    {
      day: "02",
      month: "Apr '25",
      category: "Meeting",
      title: "Meeting with Sheikh Arkam Nooramith – Secretary General, ACJU",
    },
    {
      day: "05",
      month: "Dec '24",
      category: "AGM",
      title: "COSMOS UK – 10th Annual General Meeting",
    },
  ],
} as const;

// ─── About page ───────────────────────────────────────────────────────────────
export const ABOUT = {
  eyebrow: "COSMOS UK",
  heading: "About COSMOS UK",
  subtitle: "Our history, mission and the community we serve.",

  intro: {
    eyebrow: "Who we are",
    heading: "The Council of Sri Lankan Muslim Organisations UK",
    paragraphs: [
      "COSMOS UK was established in 2014 as the national umbrella body for Sri Lankan Muslim social and religious communities in the United Kingdom. We represent 26 member organisations across England, Wales and Scotland.",
      "Our work spans parliamentary advocacy through the All-Party Parliamentary Group, coordinating humanitarian relief during crises, and fostering institutional relationships with religious leadership in Sri Lanka and across the diaspora.",
      "Over the past decade we have responded to Covid-19 policy issues affecting Muslim burial rites, coordinated multiple relief fundraisers, and convened annual general meetings to govern our community network.",
    ],
  },

  stats: [
    { number: "26", label: "Member organisations" },
    { number: "10+", label: "Years of service" },
    { number: "3", label: "Nations represented" },
  ],

  mission: {
    eyebrow: "Our mission",
    title: "What we stand for",
    cards: [
      {
        eyebrow: "Advocacy",
        body: "Representing Sri Lankan Muslim interests with the UK Government, Parliament and civil institutions.",
      },
      {
        eyebrow: "Relief",
        body: "Coordinating emergency humanitarian support for communities in Sri Lanka during floods and disasters.",
      },
      {
        eyebrow: "Community",
        body: "Connecting and strengthening bonds between Sri Lankan Muslim organisations and diaspora families across the UK.",
      },
    ],
  },

  timeline: {
    eyebrow: "Key milestones",
    title: "Our journey",
    items: [
      {
        year: "2014",
        description:
          "COSMOS UK founded as the national umbrella body for Sri Lankan Muslim organisations",
      },
      {
        year: "2021",
        description:
          "Engaged with APPG on Muslim cremation policy affecting communities during Covid-19",
      },
      {
        year: "2022",
        description:
          "All-Party Parliamentary Group meeting on Sri Lankan diaspora affairs",
      },
      {
        year: "2024",
        description:
          "10th Annual General Meeting held, marking a decade of community service",
      },
      {
        year: "2025",
        description:
          "Flood emergency relief coordination launched in response to Sri Lanka floods",
      },
    ],
  },
} as const;
